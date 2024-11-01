import Image from "next/image";
import { Slider } from "../../elements/slider/Slider";
import "./Reviews.css";
import { reviews } from "./ReviewsData";

export const Reviews = () => {
    return (
        <section className="reviews" id="reviews">
            <Slider header="Відгуки">
                {reviews.map((photo, i) => (
                    <div key={i} className="review-photo-container">
                        <Image
                            className="review"
                            src={photo.src}
                            width={454}
                            height={100}
                            alt="review"
                        />
                    </div>
                ))}
            </Slider>
        </section>
    );
};
