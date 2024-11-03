import { useTranslations } from "next-intl";
import { TickerTape } from "./elements/TickerTape/TickerTape";
import styles from "./page.module.css";
import { Advantages } from "./sections/advantages/Advantages";
import { Career } from "./sections/career/Career";
import { Contacts } from "./sections/contacts/Contacts";
import { Form } from "./sections/form/Form";
import { Gift } from "./sections/gift/Gift";
import { Header } from "./sections/header/Header";
import { OurStory } from "./sections/our-story/OurStory";
import { Photots } from "./sections/photos/Photots";
import { Prices } from "./sections/prices/Prices";
import { QA } from "./sections/qa/QA";
import { Reviews } from "./sections/reviews/Reviews";
import { Teachers } from "./sections/teachers/Teachers";
import { WhyUs } from "./sections/why-us/WhyUs";

export default function Home() {
    const t = useTranslations("ContactInfo");
    const s = useTranslations("Story");
    const faq = useTranslations("FAQ");

    return (
        <>
            <Header />
            <TickerTape />
            <main className={styles.main}>
                <WhyUs />
                <OurStory
                    open={s("open")}
                    btn={s("btn")}
                    title={s("title")}
                    caption={s("caption")}
                    text={s("text")}
                    text1={s("text1")}
                    text2={s("text2")}
                    text3={s("text3")}
                />
                <Advantages />
                <Teachers />
                <Career />
                <Prices />
                <Form
                    btn={t("btn")}
                    placeholder={t("NamePlaceholder")}
                    success={t("success")}
                    title={t("title")}
                />
                <Gift />
                <QA
                    title={faq("title")}
                    listTitle1={faq("listTitle1")}
                    listTitle2={faq("listTitle2")}
                    listTitle3={faq("listTitle3")}
                    listTitle4={faq("listTitle4")}
                    listTitle5={faq("listTitle5")}
                    listTitle6={faq("listTitle6")}
                    listTitle7={faq("listTitle7")}
                    listTitle8={faq("listTitle8")}
                    listTitle9={faq("listTitle9")}
                    listTitle10={faq("listTitle10")}
                    listDesc1={faq.rich("ListDesc1", {
                        br: () => <br />,
                    })}
                    listDesc2={faq.rich("ListDesc2", {
                        br: () => <br />,
                    })}
                    listDesc3={faq.rich("ListDesc3", {
                        br: () => <br />,
                    })}
                    listDesc4={faq.rich("ListDesc4", {
                        br: () => <br />,
                    })}
                    listDesc5={faq.rich("ListDesc5", {
                        br: () => <br />,
                    })}
                    listDesc6={faq.rich("ListDesc6", {
                        br: () => <br />,
                    })}
                    listDesc7={faq.rich("ListDesc7", {
                        br: () => <br />,
                    })}
                    listDesc8={faq.rich("ListDesc8", {
                        br: () => <br />,
                    })}
                    listDesc9={faq.rich("ListDesc9", {
                        br: () => <br />,
                        link: (chunks) => (
                            <a
                                style={{
                                    textDecoration: "underline",
                                }}
                                href="https://n813529.alteg.io/company/764262/record-type?fbclid=PAZXh0bgNhZW0CMTEAAaYbIhfclfdE8PY3IJRZpJ4TXwpLqOEzNmn7sCbY0GSX9kYSQsZNa0g0Gac_aem_v91XHUy7WzNaS1IsqAp8fA&o=">
                                {chunks}
                            </a>
                        ),
                    })}
                    listDesc10={faq.rich("ListDesc10", {
                        br: () => <br />,
                    })}
                />
                <Reviews />
                <Contacts />
                <Photots />
            </main>
        </>
    );
}
