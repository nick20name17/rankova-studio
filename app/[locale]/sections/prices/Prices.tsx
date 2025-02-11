
import { fetchAndNormalizePrices } from "@/app/actions";
import { getLocale, getTranslations } from "next-intl/server";
import { PriceCard } from "../../elements/price-card/PriceCard";
import { Slider } from "../../elements/slider/Slider";


export const Prices = async () => {
    const t = await getTranslations("Prices");

    const prices = await fetchAndNormalizePrices()

    const locale = await getLocale();

    const isEng = locale === "en";

    return (
        <section id="prices">
            <Slider header={t("title")}>
                {prices?.map((priceCard) => (
                    <PriceCard isEng={isEng} key={priceCard.title} card={priceCard} />
                ))}
            </Slider>
        </section>
    );
};
