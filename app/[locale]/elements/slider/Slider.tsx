"use client";
import React, { useRef } from "react";
import "./Slider.css";

type Props = {
    children: React.ReactNode;
    header: string;
};

export const Slider = ({ children, header }: Props) => {
    const slidesContainerRef = useRef<HTMLDivElement>(null);

    const handleNext = () => {
        if (slidesContainerRef.current) {
            const container = slidesContainerRef.current;
            const slideWidth = container.clientWidth / 3;
            container.scrollBy({ left: slideWidth, behavior: "smooth" });
        }
    };

    const handlePrevious = () => {
        if (slidesContainerRef.current) {
            const container = slidesContainerRef.current;
            const slideWidth = container.clientWidth / 3;
            container.scrollBy({ left: -slideWidth, behavior: "smooth" });
        }
    };

    return (
        <div className="slider">
            <div className="slider-header-container">
                <h2>{header}</h2>
                <div className="btns-container">
                    <button className="btn-previous" onClick={handlePrevious}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="48"
                            viewBox="0 0 64 64"
                            fill="none">
                            <path
                                d="M35.3333 41.3334L26 32.0001L35.3333 22.6667"
                                stroke="#838181"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <circle
                                cx="32"
                                cy="32"
                                r="24"
                                stroke="#838181"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                    <button className="btn-next" onClick={handleNext}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="48"
                            viewBox="0 0 64 64"
                            fill="none">
                            <path
                                d="M28.6667 22.6666L38 31.9999L28.6667 41.3333"
                                stroke="#838181"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <circle
                                cx="32"
                                cy="32"
                                r="24"
                                transform="rotate(180 32 32)"
                                stroke="#838181"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="slides-container" ref={slidesContainerRef}>
                {children}
            </div>
        </div>
    );
};
