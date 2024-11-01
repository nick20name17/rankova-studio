import { EnrollBtn } from "@/app/[locale]/elements/enroll-btn/EnrollBtn";
import background from "@/app/img/header-img.png";
import { useTranslations } from "next-intl";
import Image from "next/image";
import "./Header.css";

export const Header = () => {
    const t = useTranslations("Header");
    return (
        <header
            style={{
                backgroundImage: `url(${background.src})`,
            }}>
            <Image className="header-img" src={background} alt="bg" />

            <div className="header-content">
                <svg
                    className="header-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="380"
                    height="82"
                    viewBox="0 0 380 82"
                    fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M378 37.31C367.935 18.9648 290.933 17.8046 248.866 5.04395C208.636 -7.15962 187.461 15.7716 136.5 16.1047C85.4806 16.4382 46.99 -9.90332 24 5.04395C0.870916 20.0817 -10.6247 35.2262 13.8124 51.5941C38.1382 67.8873 106.704 61.814 157.048 67.0646C203.646 71.9245 247.473 86.1792 290.224 80.4221C340.81 73.6099 388.57 56.5755 378 37.31Z"
                        fill="#FFDF18"
                    />
                </svg>
                <h1>{t("title")}</h1>
                <ul>
                    <li>{t("list1")}</li>
                    <li>{t("list2")}</li>
                    <li>{t("list3")}</li>
                </ul>
                <EnrollBtn black />
            </div>
        </header>
    );
};
