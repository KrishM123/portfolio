import React from 'react';

interface CaseStudyCardProps {
  title: string;
  description: string;
  link: string;
  tags: string[];
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ title, description, link, tags }) => {
  return (
    <div className="bg-white mb-5 p-6 rounded-3xl shadow-lg hover:shadow-3xl transition-shadow duration-300 ease-in-out">
      <a href={link}>
        <h3 className="text-xl font-semibold text-gray-800 hover:text-dark transition-colors duration-200">
          {title}
        </h3>
      </a>
      <p className="text-gray-600 mt-4">{description}</p>
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
  );
};

export default CaseStudyCard;
