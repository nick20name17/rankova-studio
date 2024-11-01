import { useTranslations } from "next-intl";
import Link from "next/link";
import "./EnrollBtn.css";

type Props = { black?: boolean; onCard?: boolean };

export const EnrollBtn = ({ black, onCard }: Props) => {
    const t = useTranslations("EnrollBtn");

    return (
        <Link
            href={"https://n814279.alteg.io/company/764262/record-type?o="}
            target="_blank">
            <button
                className={`enroll-btn ${black ? "black" : ""} ${
                    onCard ? "on-card" : ""
                }`}>
                {t("enroll")}
            </button>
        </Link>
    );
};
