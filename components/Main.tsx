import Image from "next/image";
import SocialIcon from "@/components/SocialIcon";

export default function Main() {
    return (
        <div>
            <div className="">
                <Image
                    src="/images/Headshot.png"
                    width={300}
                    height={300}
                    alt="Headshot"
                    className="rounded-full shadow-3xl w-48 h-48 sm:w-80 sm:h-80 mx-auto"
                />
            </div>
            <div className="text-3xl sm:text-5xl font-bold text-center pt-10 pb-4">Krish Modi</div>
            <div className="text-base sm:text-lg text-center space-y-2">
                <p>I am currently a second year studying Software Engineering @ The University of Waterloo</p>
                <p>Seeking Winter 2025 Internships</p>
                <p>I'm interested in coming up with new solutions to complex technical problems</p>
            </div>

            <div className="my-7 justify-center flex flex-wrap gap-6">
                <SocialIcon image="/images/Linkedin.png" link="https://www.linkedin.com/in/krish-modi/" />
                <SocialIcon image="/images/Github.png" link="https://github.com/KrishM123" />
                <SocialIcon image="/images/Twitter.png" link="https://twitter.com/therealkmodi" />
                <div className="hidden sm:block">
                    <SocialIcon image="/images/Devpost.webp" link="https://devpost.com/kahnscatterkrish" />
                </div>
                <div className="hidden sm:block">
                    <SocialIcon image="/images/Email.png" link="mailto:krish.modi@uwaterloo.ca" />
                </div>
                <div className="hidden sm:block">
                    <SocialIcon image="/images/Webring.png" link="https://se-webring.xyz/" />
                </div>
            </div>

            <div className="text-base sm:text-lg max-w-5xl">
                <p>In the past, I've...</p>
                <ul className="list-disc mx-5 space-y-2">
                    <li>Invented a patent-pending <a href="https://projectboard.world/isef/project/enbm051-non-invasive-bladder-pressure-measurement-system" className="underline">medical device</a>, winning a gold medal at CWSF and a spot on <a href="https://youthscience.ca/team-canada-isef-2023/" className="underline">Team Canada</a> for ISEF</li>
                    <li>Founded and sold my first startup <i>Medschart</i> at 18 to Shoppers Drug Mart</li>
                    <li>Optimized BERT for corpus-specific question-answering before ChatGPT @ <a href="https://github.com/KrishM123/maapa" className="underline">MAAPA</a></li>
                    <li>Created a paper-pending stock-prediction algorithm that beat the S&P 500 @ <a href="https://watstreet.netlify.app/" className="underline">Wat Street</a></li>
                    <li>Won Hack the North with an innovative machine-vision based <a href="https://devpost.com/software/drive-sense" className="underline">dashcam app</a></li>
                </ul>
            </div>
        </div>
    );
}
