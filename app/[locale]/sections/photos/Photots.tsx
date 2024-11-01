import { Slider } from "@/app/[locale]/elements/slider/Slider";
import Image from "next/image";
import "./Photos.css";
import { photos } from "./PhotosCollection";

export const Photots = () => {
    return (
        <section className="photos">
            <Slider header="">
                {photos.map((photo, i) => (
                    <div key={i} className="photo-container">
                        <Image
                            className="photo"
                            key={i}
                            src={photo}
                            alt="Ranok Studio"
                        />
                    </div>
                ))}
            </Slider>
        </section>
    );
};
