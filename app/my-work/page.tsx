"use client";
import CaseStudyCard from "@/components/Card";
import NavBar from "@/components/NavBar";
import { useState, useMemo } from "react";
import { caseStudies } from "../../data/caseStudies";
import { ArrowUpDown } from "lucide-react";

export default function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

    const availableTags = Array.from(new Set(caseStudies.flatMap(study => study.tags)));

    const handleTagClick = (tag: string) => {
        setSearchTerm(tag === "All" ? '' : tag);
    };

    const filteredAndSortedCaseStudies = useMemo(() => {
        return caseStudies
            .filter(study => 
                study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                study.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                study.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
            )
            .sort((a, b) => {
                const dateA = new Date(a.date).getTime();
                const dateB = new Date(b.date).getTime();
                return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
            });
    }, [searchTerm, sortOrder]);

    const toggleSortOrder = () => {
        setSortOrder(prevOrder => prevOrder === 'asc' ? 'desc' : 'asc');
    };

    return (
        <div>
            <div className="flex flex-col items-center justify-items-center min-h-screen p-8 gap-8 sm:p-0">
                <NavBar />

                <div className="flex items-center gap-4">
                    <input
                        type="text"
                        placeholder="Search projects..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="p-3 px-8 border w-72 sm:w-96 max-w[80%] rounded-full shadow-lg"
                    />
                    <button
                        onClick={toggleSortOrder}
                        className="p-3 border rounded-full flex items-center gap-2 bg-gray-200 hover:bg-gray-300"
                        title={`Sort by date (${sortOrder === 'asc' ? 'Ascending' : 'Descending'})`}
                    >
                        <ArrowUpDown size={20} />
                        {sortOrder === 'asc' ? 'Oldest' : 'Newest'}
                    </button>
                </div>

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
                    {filteredAndSortedCaseStudies.map((study, index) => (
                        <div>
                            <CaseStudyCard
                                key={index}
                                title={study.title}
                                description={study.description}
                                link={study.link}
                                tags={study.tags}
                            />
                        </div>
                    ))}
                </main>
            </div>
        </div>
    );
}