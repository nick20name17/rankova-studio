import { Slider } from "@/app/[locale]/elements/slider/Slider";
import { TeacherCard } from "@/app/[locale]/elements/teacher-card/TeacherCard";
import { getTeachers } from "@/app/actions";
import { Teacher } from "@/app/types/teachers";
import { getTranslations } from "next-intl/server";

export const Teachers = async () => {
    const t = await getTranslations("Teachers");

    const teachers = (await getTeachers()) as Teacher[];

    // const teachers = [
    //     {
    //         name: t("name1"),
    //         area: t("area1"),
    //         experience: t("experience1"),
    //         photo: Yana,
    //         aboutMusic: t("aboutMusic1"),
    //         teaching: t("teaching1"),
    //     },
    //     {
    //         name: t("name2"),
    //         area: t("area2"),
    //         experience: t("experience2"),
    //         photo: Tetiana,
    //         aboutMusic: t("aboutMusic2"),
    //         teaching: t("teaching2"),
    //     },
    //     {
    //         name: t("name3"),
    //         area: t("area3"),
    //         experience: t("experience3"),
    //         photo: Sofiia,
    //         aboutMusic: t("aboutMusic3"),
    //         teaching: t("teaching3"),
    //     },
    //     {
    //         name: t("name4"),
    //         area: t("area4"),
    //         experience: t("experience4"),
    //         photo: Oksana,
    //         aboutMusic: t("aboutMusic4"),
    //         teaching: t("teaching4"),
    //     },
    //     {
    //         name: t("name5"),
    //         area: t("area5"),
    //         experience: t("experience5"),
    //         photo: Viktoriia,
    //         aboutMusic: t("aboutMusic5"),
    //         teaching: t("teaching5"),
    //     },
    //     {
    //         name: t("name7"),
    //         area: t("area7"),
    //         experience: t("experience7"),
    //         photo: Rita,
    //         aboutMusic: t("aboutMusic7"),
    //         teaching: t("teaching7"),
    //     },
    //     {
    //         name: t("name8"),
    //         area: t("area8"),
    //         experience: t("experience8"),
    //         photo: Oksana2,
    //         aboutMusic: t("aboutMusic8"),
    //         teaching: t("teaching8"),
    //     },
    //     {
    //         name: t("name9"),
    //         area: t("area9"),
    //         experience: t("experience9"),
    //         photo: Polina,
    //         aboutMusic: t("aboutMusic9"),
    //         teaching: t("teaching9"),
    //     },
    //     {
    //         name: t("name10"),
    //         area: t("area10"),
    //         experience: t("experience10"),
    //         photo: Nadiia,
    //         aboutMusic: t("aboutMusic10"),
    //         teaching: t("teaching10"),
    //     },
    // ];

    return (
        <section id="teachers">
            <div></div>
            <Slider header={t("title")}>
                {teachers.map((teacher) => (
                    <TeacherCard
                        key={teacher.id}
                        name={teacher.Name}
                        photo={teacher.Photo[0].url}
                        area={teacher.area}
                        exp={teacher.exp}
                        aboutMusic={teacher.music}
                        teaching={teacher.teaching}
                    />
                ))}
            </Slider>
        </section>
    );
};
