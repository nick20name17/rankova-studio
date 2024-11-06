"use client";

import Image from "next/image";
import { useState } from "react";
import "./OurStory.css";

import story from "@/app/img/story.png";

interface IStoryData {
    title: string;
    caption: string;
    text: string;
    btn: string;
    open: string;
    text1: string;
    text2: string;
    text3: string;
    name1: string;
    name2: string;
    name3: string;
}
export const OurStory = ({
    title,
    caption,
    text,
    btn,
    open,
    text1,
    text2,
    text3,
    name1,
    name2,
    name3,
}: IStoryData) => {
    const [contentOpen, setContentOpen] = useState(false);

    const handleClick = () => {
        setContentOpen(!contentOpen);
    };

    return (
        <section className="our-story" id="about-us">
            <div className="story-img-container">
                <Image className="story-img" src={story} alt="Founders" />
                <span className="teacher-name name1">{name1}</span>
                <div className="teacher-name name2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="132"
                        height="86"
                        viewBox="0 0 132 86"
                        fill="none">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M127.756 74.2743C118.875 85.0963 91.8196 72.7186 73.4769 74.2484C55.9349 75.7114 43.5899 91.7045 26.0075 82.76C8.40496 73.8051 14.0512 56.3459 10.4657 42.1931C6.85852 27.9547 -7.68433 9.22547 5.6016 2.21372C18.827 -4.76608 40.8309 11.1146 59.8395 16.1358C77.4336 20.7833 96.8259 18.5331 109.967 29.7819C125.516 43.0925 137.082 62.9093 127.756 74.2743Z"
                            fill="#FFDF18"
                        />
                    </svg>
                    <span>{name2}</span>
                </div>
                <div className="teacher-name name3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="111"
                        height="68"
                        viewBox="0 0 111 68"
                        fill="none">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.59884 21.5253C8.43302 11.5059 31.2185 18.1196 45.5699 14.4782C59.2948 10.9957 67.2999 -3.70972 82.2069 1.32596C97.1309 6.36742 94.5906 21.4012 98.993 32.5249C103.422 43.7159 117.004 57.1607 107.262 64.6332C97.5635 72.0716 78.3899 61.9313 62.7874 60.2945C48.346 58.7795 33.2434 63.1476 21.5979 55.6464C7.81798 46.7703 -3.52802 32.0472 2.59884 21.5253Z"
                            fill="#FFDF18"
                        />
                    </svg>
                    <span>{name3}</span>
                </div>
            </div>
            <div className="story-content">
                <h2 className="story-header">{title}</h2>
                <h3 className="story-caption">{caption}</h3>
                <p className="story-part1">{text}</p>

                <p className={`story-part2 ${contentOpen ? "open" : ""}`}>
                    {text1}
                    <br />
                    <br />
                    {text2} <br />
                    <br />
                    {text3}
                </p>

                <button className="toggle-story-btn" onClick={handleClick}>
                    {contentOpen ? open : btn}
                </button>
            </div>
        </section>
    );
};
