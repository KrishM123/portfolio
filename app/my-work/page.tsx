"use client";
import CaseStudyCard from "@/components/Card";
import NavBar from "@/components/NavBar";
import { useState } from "react";
import { caseStudies } from "../../data/caseStudies";

export default function Home() {
    const [searchTerm, setSearchTerm] = useState('');

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
                    className="p-3 px-8 border w-72 sm:w-96 max-w[80%] rounded-full shadow-lg"
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
