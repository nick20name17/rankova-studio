'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { Loader2 } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { withMask } from 'use-mask-input'
import * as z from 'zod/mini'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const ContactUsSchema = z.object({
  name: z.string().check(z.minLength(1), z.maxLength(100)),
  phone: z.string().check(z.minLength(1))
})

type ContactUsFormData = z.infer<typeof ContactUsSchema>

export const ContactUsForm = () => {
  const t = useTranslations('Common')
  const t2 = useTranslations('Pages.Home.Sections.ContactUs')

  const form = useForm({
    resolver: zodResolver(ContactUsSchema),
    defaultValues: {
      name: '',
      phone: ''
    }
  })

  const sendContactInfoMutation = useMutation({
    mutationFn: async (formData: ContactUsFormData) => {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbygGtfx8EEODRuDPrtJ6ZYhpdQXpxuThLf9I3kGiFpwzW_toMalt-KVQuz82EsVr4D2/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            phoneNumber: formData.phone.replace('+38', '')
          })
        }
      )

      if (!response.ok && response.type !== 'opaque') {
        throw new Error('Request failed')
      }
    },
    onSuccess: () => {
      toast.success(t2('SuccessMessage'))
      form.reset()
    },
    onError: (error) => {
      toast.error(error instanceof Error ? error.message : t('Placeholders.SomethingWentWrong'))
    }
  })

  const onSendContactInfo = async (formData: ContactUsFormData) => {
    sendContactInfoMutation.mutate(formData)
  }

  return (
    <Form {...form}>
      <form
        className='mx-auto mt-13 w-full max-w-105 space-y-4'
        noValidate
        onSubmit={form.handleSubmit(onSendContactInfo)}
      >
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  disabled={sendContactInfoMutation.isPending}
                  placeholder={t('Placeholders.FullName')}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='phone'
          render={({ field }) => (
            <FormItem>
              <FormControl ref={withMask('+38 (099) 999-99-99')}>
                <Input
                  disabled={sendContactInfoMutation.isPending}
                  type='tel'
                  placeholder='+38 (099) 999-99-99'
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button
          disabled={sendContactInfoMutation.isPending}
          className='w-full'
          type='submit'
        >
          {sendContactInfoMutation.isPending ? <Loader2 className='animate-spin' /> : t('Placeholders.Send')}
        </Button>
      </form>
    </Form>
  )
}
