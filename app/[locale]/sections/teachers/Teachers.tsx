import { Slider } from "@/app/[locale]/elements/slider/Slider";
import { TeacherCard } from "@/app/[locale]/elements/teacher-card/TeacherCard";
import Illia from "@/app/img/illya.png";
import Nadiia from "@/app/img/nadiia.png";
import Oksana2 from "@/app/img/okasana2.png";
import Oksana from "@/app/img/oksana.png";
import Polina from "@/app/img/polina.png";
import Rita from "@/app/img/rita.png";
import Sofiia from "@/app/img/sofiia.png";
import Tetiana from "@/app/img/tetiana.png";
import Viktoriia from "@/app/img/viktoriia.png";
import Yana from "@/app/img/yana.png";
import { useTranslations } from "next-intl";

export const Teachers = () => {
    const t = useTranslations("Teachers");

    const teachers = [
        {
            name: t("name1"),
            area: t("area1"),
            experience: t("experience1"),
            photo: Yana.src,
            aboutMusic: t("aboutMusic1"),
            teaching: t("teaching1"),
        },
        {
            name: t("name2"),
            area: t("area2"),
            experience: t("experience2"),
            photo: Tetiana.src,
            aboutMusic: t("aboutMusic2"),
            teaching: t("teaching2"),
        },
        {
            name: t("name3"),
            area: t("area3"),
            experience: t("experience3"),
            photo: Sofiia.src,
            aboutMusic: t("aboutMusic3"),
            teaching: t("teaching3"),
        },
        {
            name: t("name4"),
            area: t("area4"),
            experience: t("experience4"),
            photo: Oksana.src,
            aboutMusic: t("aboutMusic4"),
            teaching: t("teaching4"),
        },
        {
            name: t("name5"),
            area: t("area5"),
            experience: t("experience5"),
            photo: Viktoriia.src,
            aboutMusic: t("aboutMusic5"),
            teaching: t("teaching5"),
        },
        {
            name: t("name6"),
            area: t("area6"),
            experience: t("experience6"),
            photo: Illia.src,
            aboutMusic: t("aboutMusic6"),
            teaching: t("teaching6"),
        },
        {
            name: t("name7"),
            area: t("area7"),
            experience: t("experience7"),
            photo: Rita.src,
            aboutMusic: t("aboutMusic7"),
            teaching: t("teaching7"),
        },
        {
            name: t("name8"),
            area: t("area8"),
            experience: t("experience8"),
            photo: Oksana2.src,
            aboutMusic: t("aboutMusic8"),
            teaching: t("teaching8"),
        },
        {
            name: t("name9"),
            area: t("area9"),
            experience: t("experience9"),
            photo: Polina.src,
            aboutMusic: t("aboutMusic9"),
            teaching: t("teaching9"),
        },
        {
            name: t("name10"),
            area: t("area10"),
            experience: t("experience10"),
            photo: Nadiia.src,
            aboutMusic: t("aboutMusic10"),
            teaching: t("teaching10"),
        },
    ];

    return (
        <section id="teachers">
            <Slider header={t("title")}>
                {teachers.map(
                    ({
                        area,
                        aboutMusic,
                        photo,
                        name,
                        teaching,
                        experience,
                    }) => (
                        <TeacherCard
                            key={Date()}
                            name={name}
                            photo={photo}
                            area={area}
                            exp={experience}
                            aboutMusic={aboutMusic}
                            teaching={teaching}
                        />
                    )
                )}
            </Slider>
        </section>
    );
};
