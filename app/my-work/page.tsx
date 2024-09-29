"use client";
import CaseStudyCard from "@/components/Card";
import NavBar from "@/components/NavBar";
import { useState } from "react";

export default function Home() {
    const [searchTerm, setSearchTerm] = useState('');

    const caseStudies = [
        {
            title: "No To Photo: Photo Blocking Pendant",
            description: "Developed a wearable device that detects camera flashes and emits a counter-flash to obscure unwanted photos.",
            link: "https://drive.google.com/file/d/14rQa1GPFtaPWgxOX7aG2ZTQNZ_Qt98tj/view?usp=sharing",
            tags: ["Research", "Physics"]
        },
        {
            title: "Point of Care Prothrombin Time Test",
            description: "Created a portable device for quick and accurate blood coagulation testing, improving accessibility to critical medical diagnostics.",
            link: "https://drive.google.com/file/d/1-bddRs1d3afIfAdnOOv7y7xKHSWJ5ktX/view?usp=drive_link",
            tags: ["Research", "Biotech"]
        },
        {
            title: "Pee Xylophone: A Novel Non-Invasive Bladder Pressure Measurement System",
            description: "Developed an innovative medical device that measures bladder pressure non-invasively, potentially revolutionizing urological diagnostics.",
            link: "https://projectboard.world/isef/project/enbm051-non-invasive-bladder-pressure-measurement-system",
            tags: ["Research", "Mathematical Model", "Biotech"]
        },
        {
            title: "Self-Driving Delivery Car",
            description: "Focused on developing autonomous delivery vehicles to improve efficiency in last-mile logistics.",
            link: "https://github.com/rajansagarwal/self-driving-tank",
            tags: ["ML", "Hardware"]
        },
        {
            title: "DriveSense: Accurate Driver Rating",
            description: "Created an innovative app that uses machine vision to accurately rate driver performance and promote safer driving habits.",
            link: "https://devpost.com/software/drive-sense",
            tags: ["Hackathon", "ML", "Mathematical Model", "Full-Stack"]
        },
        {
            title: "CogniCare: Alzheimer's Prevention and Detection",
            description: "Designed a platform to assist in early detection and prevention of Alzheimer's disease through cognitive assessments and personalized care plans.",
            link: "https://github.com/ishaan1013/cognicare",
            tags: ["Hackathon", "ML", "Biotech", "Full-Stack"]
        },
        {
            title: "MAAPA: Smart CTRL+F",
            description: "Developed an advanced search tool that enhances the traditional CTRL+F functionality with intelligent context-aware searching capabilities.",
            link: "https://github.com/KrishM123/maapa",
            tags: ["Full-Stack", "ML"]
        },
        {
            title: "Mean Reversion",
            description: "Created a stock prediction algorithm based on the mean reversion principle, designed to outperform standard market indices.",
            link: "https://github.com/KrishM123/Mean-Reversion",
            tags: ["Quant", "Finance", "ML", "Mathematical Model"]
        }
    ];

    const availableTags = Array.from(new Set(caseStudies.flatMap(study => study.tags)));

    const handleTagClick = (tag: string) => {
        setSearchTerm(tag === "All" ? '' : tag);
    };

    const filteredCaseStudies = caseStudies.filter(study => 
        study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        study.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        study.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div>
            <div className="flex flex-col items-center justify-items-center min-h-screen p-8 gap-8 sm:p-0">
                <NavBar />

                <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="p-2 border w-96 max-w[80%] rounded-full shadow-lg"
                />

                <div className="hidden md:flex justify-items-center gap-2">
                    <button
                        onClick={() => handleTagClick("All")}
                        className="p-2 border rounded-full px-4 bg-gray-200 hover:bg-gray-300"
                    >
                        All
                    </button>
                    {availableTags.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => handleTagClick(tag)}
                            className="p-2 border rounded-full px-4 bg-gray-200 hover:bg-gray-300"
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                <main>
                    {filteredCaseStudies.map((study, index) => (
                        <CaseStudyCard
                            key={index}
                            title={study.title}
                            description={study.description}
                            link={study.link}
                            tags={study.tags}
                        />
                    ))}
                </main>
            </div>
        </div>
    );
}
