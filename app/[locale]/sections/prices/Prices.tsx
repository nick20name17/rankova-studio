import { PriceCard } from "@/app/[locale]/elements/price-card/PriceCard";
import { Slider } from "@/app/[locale]/elements/slider/Slider";
import { useTranslations } from "next-intl";

import Additional from "@/app/img/additional.svg";
import Group from "@/app/img/group.svg";
import Guitar from "@/app/img/guitar.svg";
import Kids from "@/app/img/kids.svg";
import Piano from "@/app/img/piano.svg";
import Sax from "@/app/img/sax.svg";
import Sopilka from "@/app/img/sopilka.svg";
import Vokal from "@/app/img/vokal.svg";
import { ICard } from "./PricesMock";

export const Prices = () => {
    const t = useTranslations("Prices");

    const prices: ICard[] = [
        {
            title: t("price1_title"),
            icon: Vokal.src,
            sections: [
                {
                    title: t("price1_section1_title"),
                    list: true,
                    items: [
                        {
                            item: t("price1_section1_item1"),
                            time: 50,
                            price: 700,
                        },
                    ],
                },
                {
                    title: t("price1_section2_title"),
                    list: false,
                    items: [
                        {
                            item: t("price1_section2_item1"),
                            price: 2700,
                        },
                        {
                            item: t("price1_section2_item2"),
                            price: 5300,
                        },
                        {
                            item: t("price1_section2_item3"),
                            price: 7800,
                        },
                    ],
                },
                {
                    title: t("price1_section3_title"),
                    list: true,
                    gap: true,
                    items: [
                        {
                            item: t("price1_section3_item1"),
                            time: 50,
                            price: 450,
                        },
                        {
                            item: t("price1_section3_item2"),
                            time: 30,
                            price: 250,
                        },
                    ],
                },
                {
                    title: t("price1_section4_title"),
                    list: false,
                    items: [
                        {
                            item: t("price1_section4_item1"),
                            price: 1700,
                        },
                        {
                            item: t("price1_section4_item2"),
                            price: 3200,
                        },
                        {
                            item: t("price1_section4_item3"),
                            price: 4700,
                        },
                    ],
                },
            ],
        },
        {
            title: t("price2_title"),
            icon: Guitar.src,
            sections: [
                {
                    list: true,
                    items: [
                        {
                            item: t("price2_section1_item1"),
                            time: 50,
                            price: 450,
                        },
                        {
                            item: t("price2_section1_item2"),
                            time: 30,
                            price: 250,
                        },
                    ],
                },
                {
                    title: t("price2_section2_title"),
                    list: false,
                    items: [
                        {
                            item: t("price2_section2_item1"),
                            price: 1700,
                        },
                        {
                            item: t("price2_section2_item2"),
                            price: 3200,
                        },
                        {
                            item: t("price2_section2_item3"),
                            price: 4700,
                        },
                    ],
                },
                {
                    title: t("price2_section3_title"),
                    list: true,
                    gap: true,
                    items: [
                        {
                            item: t("price2_section3_item1"),
                            time: 50,
                            price: 700,
                        },
                    ],
                },
                {
                    title: t("price2_section4_title"),
                    list: false,
                    items: [
                        {
                            item: t("price2_section4_item1"),
                            price: 2600,
                        },
                        {
                            item: t("price2_section4_item2"),
                            price: 5000,
                        },
                        {
                            item: t("price2_section4_item3"),
                            price: 7400,
                        },
                    ],
                },
            ],
        },
        {
            title: t("price3_title"),
            icon: Piano.src,
            sections: [
                {
                    list: true,
                    items: [
                        {
                            item: t("price3_section1_item1"),
                            time: 50,
                            price: 450,
                        },
                        {
                            item: t("price3_section1_item2"),
                            time: 30,
                            price: 250,
                        },
                    ],
                },
                {
                    title: t("price3_section2_title"),
                    list: false,
                    items: [
                        {
                            item: t("price3_section2_item1"),
                            price: 1700,
                        },
                        {
                            item: t("price3_section2_item2"),
                            price: 3200,
                        },
                        {
                            item: t("price3_section2_item3"),
                            price: 4700,
                        },
                    ],
                },
                {
                    title: t("price3_section3_title"),
                    list: true,
                    gap: true,
                    items: [
                        {
                            item: t("price3_section3_item1"),
                            time: 50,
                            price: 700,
                        },
                    ],
                },
                {
                    title: t("price3_section4_title"),
                    list: false,
                    items: [
                        {
                            item: t("price3_section4_item1"),
                            price: 2600,
                        },
                        {
                            item: t("price3_section4_item2"),
                            price: 5000,
                        },
                        {
                            item: t("price3_section4_item3"),
                            price: 7400,
                        },
                    ],
                },
            ],
        },
        {
            title: t("price4_title"),
            icon: Sax.src,
            sections: [
                {
                    list: true,
                    items: [
                        {
                            item: t("price4_section1_item1"),
                            time: 50,
                            price: 450,
                        },
                        {
                            item: t("price4_section1_item2"),
                            time: 30,
                            price: 250,
                        },
                    ],
                },
                {
                    title: t("price4_section2_title"),
                    list: false,
                    items: [
                        {
                            item: t("price4_section2_item1"),
                            price: 1700,
                        },
                        {
                            item: t("price4_section2_item2"),
                            price: 3200,
                        },
                        {
                            item: t("price4_section2_item3"),
                            price: 4700,
                        },
                    ],
                },
                {
                    title: t("price4_section3_title"),
                    list: true,
                    gap: true,
                    items: [
                        {
                            item: t("price4_section3_item1"),
                            time: 50,
                            price: 700,
                        },
                    ],
                },
                {
                    title: t("price4_section4_title"),
                    list: false,
                    items: [
                        {
                            item: t("price4_section4_item1"),
                            price: 2600,
                        },
                        {
                            item: t("price4_section4_item2"),
                            price: 5000,
                        },
                        {
                            item: t("price4_section4_item3"),
                            price: 7400,
                        },
                    ],
                },
            ],
        },
        {
            title: t("price5_title"),
            icon: Sopilka.src,
            sections: [
                {
                    list: true,
                    items: [
                        {
                            item: t("price5_section1_item1"),
                            time: 50,
                            price: 450,
                        },
                        {
                            item: t("price5_section1_item2"),
                            time: 30,
                            price: 250,
                        },
                    ],
                },
                {
                    title: t("price5_section2_title"),
                    list: false,
                    items: [
                        {
                            item: t("price5_section2_item1"),
                            price: 1700,
                        },
                        {
                            item: t("price5_section2_item2"),
                            price: 3200,
                        },
                        {
                            item: t("price5_section2_item3"),
                            price: 4700,
                        },
                    ],
                },
                {
                    title: t("price5_section3_title"),
                    list: true,
                    gap: true,
                    items: [
                        {
                            item: t("price5_section3_item1"),
                            time: 50,
                            price: 700,
                        },
                    ],
                },
                {
                    title: t("price5_section4_title"),
                    list: false,
                    items: [
                        {
                            item: t("price5_section4_item1"),
                            price: 2600,
                        },
                        {
                            item: t("price5_section4_item2"),
                            price: 5000,
                        },
                        {
                            item: t("price5_section4_item3"),
                            price: 7400,
                        },
                    ],
                },
            ],
        },
        {
            title: t("price6_title"),
            icon: Kids.src,
            sections: [
                {
                    title: t("price6_section1_title"),
                    caption: t("price6_section1_caption"),
                    list: true,
                    items: [
                        {
                            item: t("price6_section1_caption"),
                            time: 30,
                            price: 250,
                        },
                    ],
                },
                {
                    title: t("price6_section2_title"),
                    list: false,
                    items: [
                        {
                            item: t("price6_section2_item1"),
                            price: 950,
                        },
                        {
                            item: t("price6_section2_item2"),
                            price: 1800,
                        },
                        {
                            item: t("price6_section2_item3"),
                            price: 2600,
                        },
                    ],
                },
                {
                    title: t("price6_section3_title"),
                    caption: t("price6_section3_caption"),
                    list: true,
                    gap: true,
                    items: [
                        {
                            item: t("price6_section1_item1"),
                            time: 30,
                            price: 250,
                        },
                    ],
                },
                {
                    title: t("price6_section4_title"),
                    list: false,
                    items: [
                        {
                            item: t("price6_section4_item1"),
                            price: 900,
                        },
                        {
                            item: t("price6_section4_item2"),
                            price: 1600,
                        },
                    ],
                },
            ],
        },
        {
            title: t("price7_title"),
            icon: Group.src,
            sections: [
                {
                    title: t("price7_section1_title"),
                    list: false,
                    time: 60,
                    price: 200,
                },
                {
                    title: t("price7_section2_title"),
                    list: false,
                    gap: true,
                    time: 60,
                    price: 200,
                },
            ],
        },
        {
            title: t("price8_title"),
            icon: Additional.src,
            sections: [
                {
                    title: t("price8_section1_title"),
                    list: false,
                    time: 60,
                    price: 250,
                },
                {
                    title: t("price8_section2_title"),
                    list: false,
                    gap: true,
                },
                {
                    title: t("price8_section3_title"),
                    list: false,
                    caption: t("price8_section3_caption"),
                },
            ],
        },
    ];

    return (
        <section id="prices">
            <Slider header={t("title")}>
                {prices.map((priceCard) => (
                    <PriceCard key={priceCard.title} card={priceCard} />
                ))}
            </Slider>
        </section>
    );
};
