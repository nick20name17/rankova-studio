"use client";

import { useEffect, useState } from "react";
import "./ScrollToTop.css";
export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={handleScrollToTop}
            className={`scroll-to-top-btn ${isVisible ? "visible" : ""}`}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="66"
                height="66"
                viewBox="0 0 66 66"
                fill="none">
                <rect
                    width="64"
                    height="64"
                    rx="32"
                    transform="matrix(1 0 0 -1 1 65)"
                    fill="#FCFCFC"
                />
                <rect
                    width="64"
                    height="64"
                    rx="32"
                    transform="matrix(1 0 0 -1 1 65)"
                    stroke="#231F20"
                />
                <path
                    d="M33 53L33 13M33 13L17 28M33 13L49 28"
                    stroke="#231F20"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </button>
    );
};
