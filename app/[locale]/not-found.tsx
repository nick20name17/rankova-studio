import "./not-found.css";

import Image from "next/image";

import notFound from "@/app/img/not-found.png";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const NotFound = () => {
    const t = useTranslations("NotFoundPage");
    return (
        <main className="not-found">
            <h1 className="not-found-title">{t("title")}</h1>

            <Image className="not-found-img" src={notFound} alt="404" />

            <Link className="not-found-link" href="/">
                {t("link")}
            </Link>
        </main>
    );
};

export default NotFound;
