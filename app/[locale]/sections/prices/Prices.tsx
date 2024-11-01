import { PriceCard } from "@/app/[locale]/elements/price-card/PriceCard";
import { Slider } from "@/app/[locale]/elements/slider/Slider";
import { prices } from "./PricesMock";

export const Prices = () => {
    return (
        <section id="prices">
            <Slider header="Вартість">
                {prices.map((priceCard) => (
                    <PriceCard key={priceCard.title} card={priceCard} />
                ))}
            </Slider>
        </section>
    );
};
