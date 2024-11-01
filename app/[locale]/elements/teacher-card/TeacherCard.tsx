import Image from "next/image";
import { EnrollBtn } from "../enroll-btn/EnrollBtn";
import "./TeacherCard.css";

type Props = {
    name: string;
    photo: string;
    area: string;
    exp: string;
    aboutMusic: string;
    teaching: string;
};

export const TeacherCard = (props: Props) => {
    return (
        <div className="teacher-card">
            <div className="profile-container">
                <div className="teacher-photo-container">
                    <Image
                        className="teacher-photo"
                        src={props.photo}
                        alt={props.name}
                        width={296}
                        height={357}
                    />
                    <span className="teacher-card-name">{props.name}</span>
                    <svg
                        className="teacher-name-spot"
                        xmlns="http://www.w3.org/2000/svg"
                        width="125"
                        height="47"
                        viewBox="0 0 125 47"
                        fill="none">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M124.11 23.62C119.805 31.1834 93.91 29.069 79.1498 33.1394C65.034 37.0322 59.317 48.0728 42.2349 46.199C25.1331 44.3231 24.8892 33.6458 17.9313 26.4243C10.9314 19.1591 -6.39083 11.3234 2.63649 5.10004C11.6227 -1.09498 34.3213 3.84999 51.479 3.29673C67.36 2.78464 82.7863 -1.8698 96.8393 2.06241C113.468 6.71536 128.632 15.6772 124.11 23.62Z"
                            fill="#FFDF18"
                        />
                    </svg>
                    <EnrollBtn onCard />
                </div>
                <p>{props.area}</p>
                <p>досвід: {props.exp}</p>
            </div>
            <div className="teacher-qa-container">
                <h4>Що для Вас музика?</h4>
                <p>{props.aboutMusic}</p>
                <h4>Що важливе у викладанні:</h4>
                <p>{props.teaching}</p>
            </div>
        </div>
    );
};
