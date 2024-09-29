import React from 'react';
import Link from 'next/link';

interface CaseStudyCardProps {
	title: string;
	description: string;
	link: string;
	tags: string[];
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ title, description, link, tags }) => {
	return (
		<div className="w-full max-w-3xl">
			<Link href={link}>
				<div className="bg-white mb-5 p-6 rounded-3xl shadow-lg hover:shadow-3xl transition-shadow duration-300 ease-in-out">
					<h3 className="text-xl font-semibold text-gray-800 transition-colors duration-200">
						{title}
					</h3>
					<p className="text-gray-600 mt-4 break-words">
						{description}
					</p>
					<div className="flex flex-wrap gap-2 mt-4">
						{tags.map((tag, index) => (
							<span
								key={index}
								className="text-sm bg-gray-200 text-gray-800 px-3 py-1 rounded-full"
							>
								{tag}
							</span>
						))}
					</div>
				</div>
			</Link>
		</div>
	);
};

export default CaseStudyCard;
