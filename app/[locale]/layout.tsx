import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import { notFound } from "next/navigation";
import { ScrollToTop } from "./elements/scroll-to-top/ScrollToTop";
import "./globals.css";
import { Footer } from "./sections/footer/Footer";
import { Nav } from "./sections/nav/Nav";

const comfortaa = Comfortaa({
    variable: "--comfortaa",
    subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext"],
});

export const metadata: Metadata = {
    title: "Ранкова",
    description: "Музика для всіх, а не тільки для обраних",
    icons: {
        icon: "/favicon.svg",
        shortcut: "/favicon.svg",
    },
};

export default async function LocaleLayout({
    children,
    params: { locale },
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    if (!routing.locales.includes(locale as "en" | "ua")) {
        notFound();
    }

    return (
        <html lang="en">
            <body className={`${comfortaa.className}`}>
                <Nav />
                <ScrollToTop />
                {children}
                <Footer />
            </body>
        </html>
    );
}
