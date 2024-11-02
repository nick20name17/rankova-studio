"use client";

import { Nunito } from "next/font/google";
import { useState } from "react";
import "./QA.css";

const nunito = Nunito({
    subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext"],
    weight: ["800", "400"],
});

interface IQuestion {
    title: string;
    listTitle1: string;
    listTitle2: string;
    listTitle3: string;
    listTitle4: string;
    listTitle5: string;
    listTitle6: string;
    listTitle7: string;
    listTitle8: string;
    listTitle9: string;
    listTitle10: string;
    listDesc1: string;
    listDesc2: string;
    listDesc3: string;
    listDesc4: string;
    listDesc5: string;
    listDesc6: string;
    listDesc7: string;
    listDesc8: string;
    listDesc9: string;
    listDesc10: string;
}

export const QA = (props: IQuestion) => {
    const qaCollection = [
        {
            id: 1,
            question: props.listTitle1,
            answer: props.listDesc1,
        },
        {
            id: 2,
            question: props.listTitle2,
            answer: props.listDesc2,
        },
        {
            id: 3,
            question: props.listTitle3,
            answer: props.listDesc3,
        },
        {
            id: 4,
            question: props.listTitle4,
            answer: props.listDesc4,
        },
        {
            id: 5,
            question: props.listTitle5,
            answer: props.listDesc5,
        },
        {
            id: 6,
            question: props.listTitle6,
            answer: props.listDesc6,
        },
        {
            id: 7,
            question: props.listTitle7,
            answer: props.listDesc7,
        },
        {
            id: 8,
            question: props.listTitle8,
            answer: props.listDesc8,
        },
        {
            id: 9,
            question: props.listTitle9,
            answer: props.listDesc9,
        },
        {
            id: 10,
            question: props.listTitle10,
            answer: props.listDesc10,
        },
    ];

    const [openQuestion, setOpenQuestion] = useState<undefined | number>(
        undefined
    );

    const handleQuestionClick = (id: number) => {
        if (id === openQuestion) {
            setOpenQuestion(undefined);
        } else {
            setOpenQuestion(id);
        }
    };

    return (
        <section className="qa" id="qa">
            <h2>{props.title}</h2>
            {qaCollection.map((record, i) => (
                <div key={i} className="qa-block">
                    <div
                        className="question-container"
                        onClick={() => handleQuestionClick(record.id)}>
                        {record.question}
                        <svg
                            style={{
                                flexShrink: 0,
                            }}
                            width="36"
                            height="36"
                            viewBox="0 0 44 44"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11 16.5L22 27.5L33 16.5"
                                stroke="#838181"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                    <div
                        className={`${nunito.className} answer ${
                            openQuestion === record.id ? "open-answer" : ""
                        }`}>
                        {record.answer}
                    </div>
                </div>
            ))}
        </section>
    );
};
