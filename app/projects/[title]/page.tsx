// src/app/projects/[title]/page.tsx
import { caseStudies } from '@/data/caseStudies';
import { notFound } from 'next/navigation';
import fs from 'fs/promises';
import path from 'path';
import { marked } from 'marked';
import NavBar from "@/components/NavBar";
import Link from 'next/link'; // Import Link

interface ProjectPageProps {
  params: {
    title: string;
  };
}

async function getProjectContent(fileName: string) {
  const filePath = path.join(process.cwd(), 'data', fileName);
  const content = await fs.readFile(filePath, 'utf-8');
  return content;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = caseStudies.find((p) => p.link.endsWith(params.title));

  if (!project) {
    return notFound();
  }

  const markdownContent = await getProjectContent(project.file);

  return (
    <div className="flex flex-col items-center min-h-screen p-8 gap-8 sm:p-0">
      <NavBar />
      
      <main className="w-full max-w-3xl px-4 py-8">
        <Link href="/my-work" className="text-darkest mb-4 inline-flex items-center">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H3m0 0l6-6m-6 6l6 6" />
          </svg>
          Back to Projects
        </Link>
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="mb-6">
          <strong className="text-gray-700">Tags:</strong>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tags.map((tag, index) => (
              <span key={index} className="px-3 py-1 bg-gray-200 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div 
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: marked(markdownContent) }} 
        />
      </main>
    </div>
  );
}