import { Nunito } from "next/font/google";
import Link from "next/link";
import "./Career.css";

import CareerImg from "@/app/img/career.png";
import { useTranslations } from "next-intl";

const nunito = Nunito({
    subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext"],
    weight: ["800", "400"],
});

export const Career = () => {
    const t = useTranslations("Career");
    return (
        <section
            style={{ backgroundImage: `url(${CareerImg.src})` }}
            className="career"
            id="career">
            {/* <svg
                className="yellow-wave"
                xmlns="http://www.w3.org/2000/svg"
                width="1439"
                height="1000"
                viewBox="0 0 1439 512"
                fill="none">
                <path
                    d="M-5 512C-5 512 84.715 408.561 255.5 391.441C387.92 378.166 713.642 379.514 716.481 379.526C716.569 379.527 716.429 379.527 716.516 379.527C719.359 379.527 1088.76 379.527 1220 379.527C1454.25 379.527 1438 208.5 1438 208.5V0.5C1438 0.5 1256.5 102.561 716.5 102.561C473.246 102.561 302.74 102.561 188.802 102.561C81.6592 102.561 -5 189.417 -5 296.561V348V512Z"
                    fill="#FFDF18"
                />
            </svg> */}
            <div className="career-cta">
                <div className="career-content">
                    <h2 className="career-header">{t("title")}</h2>
                    <p className={`${nunito.className} career-text`}>
                        {t("text")}
                    </p>
                </div>
                <Link
                    href={
                        "https://docs.google.com/forms/d/e/1FAIpQLSdo0W2k9JKpuigvQJ5X5jHBmr1QFqNo6OQtdhbfQnhgJzA8Qw/viewform"
                    }
                    target="_blank">
                    <button className="black enroll-btn fill-form-btn">
                        {t("btn")}
                    </button>
                </Link>
            </div>
        </section>
    );
};
