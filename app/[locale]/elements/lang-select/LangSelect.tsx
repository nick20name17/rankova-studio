"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

export const LangSelect = () => {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const localActive = useLocale();

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value;
        startTransition(() => {
            router.replace(`/${nextLocale}`);
        });
    };
    return (
        <select
            onChange={onSelectChange}
            disabled={isPending}
            defaultValue={localActive}
            name="lang"
            id="lang">
            <option value="ua">Укр</option>
            <option value="en">Eng</option>
        </select>
    );
};
