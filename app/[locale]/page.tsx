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
                <QA />
                <Reviews />
                <Contacts />
                <Photots />
            </main>
        </>
    );
}
