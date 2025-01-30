import { PriceCard } from "@/app/[locale]/elements/price-card/PriceCard";
import { Slider } from "@/app/[locale]/elements/slider/Slider";

import { getPrices } from "@/app/actions";
import { Price } from "@/app/types/teachers";
import { getTranslations } from "next-intl/server";
import { ISection } from "./PricesMock";

function parsePriceDescription(description: string) {
    const sections: ISection[] = [];
    const lines =
        description?.split("\n")?.filter((line) => line?.trim() !== "") ?? "";

    let currentSection: any = null;
    let hasCustomGap = false;

    for (const line of lines) {
        if (line === "---") {
            hasCustomGap = true;
            continue;
        }

        const sectionTitleMatch = line.match(
            /^\*\*(.+?)\s*(?:\*\*\s*\((\d+)\s*хв\))?\s*\*\*(\d+)\s*₴\*\*$/
        );
        const titleWithCaptionMatch = line.match(/^\*\*(.+?)\*\*\s*(\(.*\))$/);
        const listItemFullMatch = line.match(
            /^-\s*(.+?)\s*\((\d+)\s*хв\)\s*\*\*(\d+)\s*₴\*\*$/
        );

        if (listItemFullMatch) {
            if (!currentSection) {
                currentSection = {
                    title: "",
                    items: [],
                    list: true,
                    gap: hasCustomGap,
                };
                hasCustomGap = false;
            }
            currentSection.list = true;
            currentSection.items?.push({
                item: listItemFullMatch[1],
                time: parseInt(listItemFullMatch[2]),
                price: parseInt(listItemFullMatch[3]),
            });
        } else if (sectionTitleMatch) {
            if (currentSection) {
                sections?.push(currentSection);
            }

            currentSection = {
                title: sectionTitleMatch[1],
                list: false,
                gap: hasCustomGap,
                time: sectionTitleMatch[2]
                    ? parseInt(sectionTitleMatch[2])
                    : undefined,
                price: parseInt(sectionTitleMatch[3]),
            };

            hasCustomGap = false;
        } else if (titleWithCaptionMatch) {
            if (currentSection) {
                sections?.push(currentSection);
            }

            currentSection = {
                title: titleWithCaptionMatch[1],
                list: false,
                gap: hasCustomGap,
                caption: titleWithCaptionMatch[2].replace(/^\(|\)$/g, ""),
            };

            hasCustomGap = false;
        } else if (line.startsWith("**") && line.endsWith("**")) {
            if (currentSection) {
                sections?.push(currentSection);
            }

            currentSection = {
                title: line.replace(/\*\*/g, ""),
                items: [],
                list: false,
                gap: hasCustomGap,
            };

            hasCustomGap = false;
        } else {
            if (line.startsWith("- ")) {
                if (!currentSection) {
                    currentSection = {
                        title: "",
                        items: [],
                        list: true,
                        gap: hasCustomGap,
                    };
                    hasCustomGap = false;
                }

                const itemMatch = line.match(
                    /^-\s*(.+?)\s*\((\d+)\s*хв\)\s*(\*\*\d+\s*₴\*\*)?/
                );
                if (itemMatch) {
                    currentSection.list = true;
                    currentSection.items?.push({
                        item: itemMatch[1],
                        time: parseInt(itemMatch[2]),
                        price: itemMatch[3]
                            ? parseInt(
                                itemMatch[3]
                                    .replace(/\*\*/g, "")
                                    .replace(" ₴", "")
                            )
                            : undefined,
                    });
                } else {
                    const priceMatch = line.match(
                        /^-?\s*(.+?)\s*(\*\*\d+\s*₴\*\*)/
                    );
                    if (priceMatch) {
                        currentSection.list = true;
                        currentSection.items?.push({
                            item: priceMatch[1],
                            price: parseInt(
                                priceMatch[2]
                                    .replace(/\*\*/g, "")
                                    .replace(" ₴", "")
                            ),
                        });
                    }
                }
            } else {
                const priceMatch = line.match(/^(.+?)\s*\*\*(\d+)\s*₴\*\*/);
                if (priceMatch) {
                    if (!currentSection) {
                        currentSection = {
                            title: "",
                            items: [],
                            list: false,
                            gap: hasCustomGap,
                        };
                        hasCustomGap = false;
                    }
                    currentSection.list = false;
                    currentSection.items?.push({
                        item: priceMatch[1].trim(),
                        price: parseInt(priceMatch[2]),
                    });
                }
            }
        }
    }

    // Add last section
    if (currentSection) {
        sections?.push(currentSection);
    }

    return { sections };
}

export const Prices = async () => {
    const t = await getTranslations("Prices");

    const price = (await getPrices()) as Price[];

    console.log(price[8].content);

    // const prices: ICard[] = [
    //     {
    //         title: t("price1_title"),
    //         icon: Vokal.src,
    //         sections: [
    //             {
    //                 title: t("price1_section1_title"),
    //                 list: true,
    //                 items: [
    //                     {
    //                         item: t("price1_section1_item1"),
    //                         time: 50,
    //                         price: 700,
    //                     },
    //                 ],
    //             },
    //             {
    //                 title: t("price1_section2_title"),
    //                 list: false,
    //                 items: [
    //                     {
    //                         item: t("price1_section2_item1"),
    //                         price: 2700,
    //                     },
    //                     {
    //                         item: t("price1_section2_item2"),
    //                         price: 5300,
    //                     },
    //                     {
    //                         item: t("price1_section2_item3"),
    //                         price: 7800,
    //                     },
    //                 ],
    //             },
    //             {
    //                 title: t("price1_section3_title"),
    //                 list: true,
    //                 gap: true,
    //                 items: [
    //                     {
    //                         item: t("price1_section3_item1"),
    //                         time: 50,
    //                         price: 450,
    //                     },
    //                     {
    //                         item: t("price1_section3_item2"),
    //                         time: 30,
    //                         price: 250,
    //                     },
    //                 ],
    //             },
    //             {
    //                 title: t("price1_section4_title"),
    //                 list: false,
    //                 items: [
    //                     {
    //                         item: t("price1_section4_item1"),
    //                         price: 1700,
    //                     },
    //                     {
    //                         item: t("price1_section4_item2"),
    //                         price: 3200,
    //                     },
    //                     {
    //                         item: t("price1_section4_item3"),
    //                         price: 4700,
    //                     },
    //                 ],
    //             },
    //         ],
    //     },
    //     {
    //         title: t("price2_title"),
    //         icon: Guitar.src,
    //         sections: [
    //             {
    //                 list: true,
    //                 items: [
    //                     {
    //                         item: t("price2_section1_item1"),
    //                         time: 50,
    //                         price: 450,
    //                     },
    //                     {
    //                         item: t("price2_section1_item2"),
    //                         time: 30,
    //                         price: 250,
    //                     },
    //                 ],
    //             },
    //             {
    //                 title: t("price2_section2_title"),
    //                 list: false,
    //                 items: [
    //                     {
    //                         item: t("price2_section2_item1"),
    //                         price: 1700,
    //                     },
    //                     {
    //                         item: t("price2_section2_item2"),
    //                         price: 3200,
    //                     },
    //                     {
    //                         item: t("price2_section2_item3"),
    //                         price: 4700,
    //                     },
    //                 ],
    //             },
    //             {
    //                 title: t("price2_section3_title"),
    //                 list: true,
    //                 gap: true,
    //                 items: [
    //                     {
    //                         item: t("price2_section3_item1"),
    //                         time: 50,
    //                         price: 700,
    //                     },
    //                 ],
    //             },
    //             {
    //                 title: t("price2_section4_title"),
    //                 list: false,
    //                 items: [
    //                     {
    //                         item: t("price2_section4_item1"),
    //                         price: 2600,
    //                     },
    //                     {
    //                         item: t("price2_section4_item2"),
    //                         price: 5000,
    //                     },
    //                     {
    //                         item: t("price2_section4_item3"),
    //                         price: 7400,
    //                     },
    //                 ],
    //             },
    //         ],
    //     },
    //     {
    //         title: t("price3_title"),
    //         icon: Piano.src,
    //         sections: [
    //             {
    //                 list: true,
    //                 items: [
    //                     {
    //                         item: t("price3_section1_item1"),
    //                         time: 50,
    //                         price: 450,
    //                     },
    //                     {
    //                         item: t("price3_section1_item2"),
    //                         time: 30,
    //                         price: 250,
    //                     },
    //                 ],
    //             },
    //             {
    //                 title: t("price3_section2_title"),
    //                 list: false,
    //                 items: [
    //                     {
    //                         item: t("price3_section2_item1"),
    //                         price: 1700,
    //                     },
    //                     {
    //                         item: t("price3_section2_item2"),
    //                         price: 3200,
    //                     },
    //                     {
    //                         item: t("price3_section2_item3"),
    //                         price: 4700,
    //                     },
    //                 ],
    //             },
    //             {
    //                 title: t("price3_section3_title"),
    //                 list: true,
    //                 gap: true,
    //                 items: [
    //                     {
    //                         item: t("price3_section3_item1"),
    //                         time: 50,
    //                         price: 700,
    //                     },
    //                 ],
    //             },
    //             {
    //                 title: t("price3_section4_title"),
    //                 list: false,
    //                 items: [
    //                     {
    //                         item: t("price3_section4_item1"),
    //                         price: 2600,
    //                     },
    //                     {
    //                         item: t("price3_section4_item2"),
    //                         price: 5000,
    //                     },
    //                     {
    //                         item: t("price3_section4_item3"),
    //                         price: 7400,
    //                     },
    //                 ],
    //             },
    //         ],
    //     },
    //     {
    //         title: t("price4_title"),
    //         icon: Sax.src,
    //         sections: [
    //             {
    //                 list: true,
    //                 items: [
    //                     {
    //                         item: t("price4_section1_item1"),
    //                         time: 50,
    //                         price: 450,
    //                     },
    //                     {
    //                         item: t("price4_section1_item2"),
    //                         time: 30,
    //                         price: 250,
    //                     },
    //                 ],
    //             },
    //             {
    //                 title: t("price4_section2_title"),
    //                 list: false,
    //                 items: [
    //                     {
    //                         item: t("price4_section2_item1"),
    //                         price: 1700,
    //                     },
    //                     {
    //                         item: t("price4_section2_item2"),
    //                         price: 3200,
    //                     },
    //                     {
    //                         item: t("price4_section2_item3"),
    //                         price: 4700,
    //                     },
    //                 ],
    //             },
    //             {
    //                 title: t("price4_section3_title"),
    //                 list: true,
    //                 gap: true,
    //                 items: [
    //                     {
    //                         item: t("price4_section3_item1"),
    //                         time: 50,
    //                         price: 700,
    //                     },
    //                 ],
    //             },
    //             {
    //                 title: t("price4_section4_title"),
    //                 list: false,
    //                 items: [
    //                     {
    //                         item: t("price4_section4_item1"),
    //                         price: 2600,
    //                     },
    //                     {
    //                         item: t("price4_section4_item2"),
    //                         price: 5000,
    //                     },
    //                     {
    //                         item: t("price4_section4_item3"),
    //                         price: 7400,
    //                     },
    //                 ],
    //             },
    //         ],
    //     },
    //     {
    //         title: t("price5_title"),
    //         icon: Sopilka.src,
    //         sections: [
    //             {
    //                 list: true,
    //                 items: [
    //                     {
    //                         item: t("price5_section1_item1"),
    //                         time: 50,
    //                         price: 450,
    //                     },
    //                     {
    //                         item: t("price5_section1_item2"),
    //                         time: 30,
    //                         price: 250,
    //                     },
    //                 ],
    //             },
    //             {
    //                 title: t("price5_section2_title"),
    //                 list: false,
    //                 items: [
    //                     {
    //                         item: t("price5_section2_item1"),
    //                         price: 1700,
    //                     },
    //                     {
    //                         item: t("price5_section2_item2"),
    //                         price: 3200,
    //                     },
    //                     {
    //                         item: t("price5_section2_item3"),
    //                         price: 4700,
    //                     },
    //                 ],
    //             },
    //             {
    //                 title: t("price5_section3_title"),
    //                 list: true,
    //                 gap: true,
    //                 items: [
    //                     {
    //                         item: t("price5_section3_item1"),
    //                         time: 50,
    //                         price: 700,
    //                     },
    //                 ],
    //             },
    //             {
    //                 title: t("price5_section4_title"),
    //                 list: false,
    //                 items: [
    //                     {
    //                         item: t("price5_section4_item1"),
    //                         price: 2600,
    //                     },
    //                     {
    //                         item: t("price5_section4_item2"),
    //                         price: 5000,
    //                     },
    //                     {
    //                         item: t("price5_section4_item3"),
    //                         price: 7400,
    //                     },
    //                 ],
    //             },
    //         ],
    //     },
    //     {
    //         title: t("price6_title"),
    //         icon: Kids.src,
    //         sections: [
    //             {
    //                 title: t("price6_section1_title"),
    //                 caption: t("price6_section1_caption"),
    //                 list: true,
    //                 items: [
    //                     {
    //                         item: t("price6_section1_item1"),
    //                         time: 30,
    //                         price: 250,
    //                     },
    //                 ],
    //             },
    //             {
    //                 title: t("price6_section2_title"),
    //                 list: false,
    //                 items: [
    //                     {
    //                         item: t("price6_section2_item1"),
    //                         price: 950,
    //                     },
    //                     {
    //                         item: t("price6_section2_item2"),
    //                         price: 1800,
    //                     },
    //                     {
    //                         item: t("price6_section2_item3"),
    //                         price: 2600,
    //                     },
    //                 ],
    //             },
    //             {
    //                 title: t("price6_section3_title"),
    //                 caption: t("price6_section3_caption"),
    //                 list: true,
    //                 gap: true,
    //                 items: [
    //                     {
    //                         item: t("price6_section1_item1"),
    //                         time: 30,
    //                         price: 250,
    //                     },
    //                 ],
    //             },
    //             {
    //                 title: t("price6_section4_title"),
    //                 list: false,
    //                 items: [
    //                     {
    //                         item: t("price6_section4_item1"),
    //                         price: 900,
    //                     },
    //                     {
    //                         item: t("price6_section4_item2"),
    //                         price: 1600,
    //                     },
    //                 ],
    //             },
    //         ],
    //     },
    //     {
    //     title: t("price7_title"),
    //     icon: Group.src,
    // sections: [
    //     {
    //         title: t("price7_section1_title"),
    //         list: false,
    //         time: 60,
    //         price: 200,
    //     },
    //     {
    //         title: t("price7_section2_title"),
    //         list: false,
    //         gap: true,
    //         time: 60,
    //         price: 200,
    //     },
    // ],
    // },
    //     {
    //         title: t("price8_title"),
    //         icon: Additional.src,
    //         sections: [
    //             {
    //                 title: t("price8_section1_title"),
    //                 list: false,
    //                 time: 60,
    //                 price: 250,
    //             },
    //             {
    //                 title: t("price8_section2_title"),
    //                 list: false,
    //                 gap: true,
    //             },
    //             {
    //                 title: t("price8_section3_title"),
    //                 list: false,
    //                 caption: t("price8_section3_caption"),
    //             },
    //         ],
    //     },
    // ];

    const prices = price.map((priceCard) => {
        return {
            title: priceCard.title,
            icon: priceCard.icon[0].url,
            ...parsePriceDescription(priceCard.content),
        };
    });

    console.log(parsePriceDescription(price[7].content));

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
