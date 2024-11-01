import { Slider } from "@/app/[locale]/elements/slider/Slider";
import { TeacherCard } from "@/app/[locale]/elements/teacher-card/TeacherCard";
import { teachers } from "./teachersMock";

// type Props = {};

export const Teachers = () => {
    return (
        <section id="teachers">
            <Slider header="Наші викладачі">
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
