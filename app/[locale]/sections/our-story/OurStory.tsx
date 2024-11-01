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
}: IStoryData) => {
    const [contentOpen, setContentOpen] = useState(false);

    const handleClick = () => {
        setContentOpen(!contentOpen);
    };

    return (
        <section className="our-story" id="about-us">
            <Image className="story-img" src={story} alt="Founders" />
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
