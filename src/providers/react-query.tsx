'use client'

import { MutationCache, QueryClient, QueryClientProvider, type QueryKey } from '@tanstack/react-query'
import type { PropsWithChildren } from 'react'
import { toast } from 'sonner'

declare module '@tanstack/react-query' {
  interface Register {
    mutationMeta: {
      invalidatesQuery?: QueryKey
      successMessage?: string
      errorMessage?: string
    }
  }
}

const queryClient = new QueryClient({
  mutationCache: new MutationCache({
    onError(error, __, ___, mutation) {
      const errorMessage = error.message
      toast.error(mutation.meta?.errorMessage ? mutation.meta.errorMessage : errorMessage)
    },
    onSuccess(_, __, ___, mutation) {
      if (mutation.meta?.successMessage) {
        toast.success(mutation.meta.successMessage)
      }
    },
    onSettled(_, __, ___, ____, mutation) {
      if (mutation.options.meta) {
        mutation.options.meta?.invalidatesQuery?.map((queryKey) => {
          queryClient.invalidateQueries({
            queryKey: [queryKey]
          })
        })
      }
    }
  }),
  defaultOptions: {
    queries: {
      retry: 0,
      staleTime: 1000 * 60 * 5
    },
    mutations: {
      retry: 0
    }
  }
})

export const ReactQueryProvider = ({ children }: PropsWithChildren) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
