{/* <div className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold flex flex-grow justify-center text-center text-darkest pt-10">
            <a id="research">Research</a>
          </div>
          <div className="px-4 sm:px-6 lg:px-8 max-w grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 m-8">
            <ProjectBox image={"/images/No To Photo.png"} link={"https://drive.google.com/file/d/14rQa1GPFtaPWgxOX7aG2ZTQNZ_Qt98tj/view?usp=sharing"} title={"No To Photo: Photo Blocking Pendant"} description={"Gold Medal + Best Junior Physics Project @ CWSF 2019"}/>
            <ProjectBox image={"/images/POC PT Test.png"} link={"https://drive.google.com/file/d/1-bddRs1d3afIfAdnOOv7y7xKHSWJ5ktX/view?usp=drive_link"} title={"Point of Care Prothrombin Time Test"} description={"Silver Medal @ CWSF 2021"}/>
            <ProjectBox image={"/images/Pee Xylophone.png"} link={"https://projectboard.world/isef/project/enbm051-non-invasive-bladder-pressure-measurement-system"} title={"Pee Xylophone: A Novel Non-Invasive Bladder Pressure Measurement System"} description={"Gold Medal + Youth Can Innovate Plus @ CWSF 2022; Team Canada ISEF 2023"}/>
          </div>
          <div className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold flex flex-grow justify-center text-center text-darkest pt-10">
            <a id="projects">Projects</a>
          </div>
          <div className="px-4 sm:px-6 lg:px-8 max-w grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 m-8">
            <ProjectBox image={"/images/Car.jpeg"} link={"https://github.com/rajansagarwal/self-driving-tank"} title={"Self-Driving Delivery Car"}/>
            <ProjectBox image={"/images/Drivesense.png"} link={"https://devpost.com/software/drive-sense"} title={"DriveSense: Accurate Driver Rating"} description={"Hack the North 2023 Winner"}/>
            <ProjectBox image={"/images/Cognicare.png"} link={"https://github.com/ishaan1013/cognicare"} title={"CogniCare: Alzhemeirs Prevention and Detection"} description={"MHacks 2023 Winner"}/>
            <ProjectBox image={"/images/Maapa.png"} link={"https://github.com/KrishM123/maapa"} title={"MAAPA: Smart CTRL+F"}/>
            <ProjectBox image={"/images/Mean Reversion.png"} link={"https://github.com/KrishM123/Mean-Reversion"} title={"Mean Reversion"}/>
          </div> */}

export const caseStudies = [
    {
        title: "Red Handed: A Slap To Keep You Awake",
        description: "Machine vision model on a Raspberry Pi, controlling a slapper arm. Winner of Flow and 2nd for Qualcomm at MakeUofT 2024",
        link: "/projects/sage",
        file: "sage.md",
        tags: ["ML", "Hardware"],
        date: "2024-02-26",
    },
    {
        title: "Sage: Optimal Emissions With Policy Matching",
        description: "A novel mathematical model to determine optimial emissions, and AI agents to reccommend the policy required.",
        link: "/projects/sage",
        file: "sage.md",
        tags: ["ML", "Mathematical Model"],
        date: "2024-06-23",
    },
    {
        title: "Medschart: A Diabetes Patient Management System",
        description: "An administrative tool to make pharmacists' lives easier. Acquired by Shoppers Drug Mart.",
        link: "/projects/medschart",
        file: "medschart.md",
        tags: ["Full-Stack"],
        date: "2024-07-01",
    },
    {
        title: "One Sheet A Day: Math Drills",
        description: "A math practice book and website. Creation fully automated.",
        link: "/projects/math-drills",
        file: "math-drills.md",
        tags: ["Full-Stack"],
        date: "2020-09-15",
    },
    {
        title: "Runk: Accurate Product Review Ranking",
        description: "Ranked product reviews based on profile similarities. A novel autoencoder architecutre for updating your profile based on the reviews you leave.",
        link: "/projects/runk",
        file: "runk.md",
        tags: ["ML", "Full-Stack"],
        date: "2024-09-15",
    },
    {
        title: "No To Photo: Photo Blocking Pendant",
        description: "Developed a wearable device that detects camera flashes and emits a counter-flash to obscure unwanted photos.",
        link: "/projects/no-to-photo-photo-blocking-pendant",
        file: "no-to-photo-photo-blocking-pendant.md",
        tags: ["Research", "Mathematical Model"],
        date: "2019-05-01",
    },
    {
        title: "Point of Care Prothrombin Time Test",
        description: "Created a portable device for quick and accurate blood coagulation testing, improving accessibility to critical medical diagnostics.",
        link: "/projects/point-of-care-prothrombin-time-test",
        file: "point-of-care-prothrombin-time-test.md",
        tags: ["Research", "Biotech"],
        date: "2021-04-01",
    },
    {
        title: "Pee Xylophone: A Novel Non-Invasive Bladder Pressure Measurement System",
        description: "Developed an innovative medical device that measures bladder pressure non-invasively, potentially revolutionizing urological diagnostics.",
        link: "/projects/pee-xylophone-novel-non-invasive-bladder-pressure-measurement-system",
        file: "pee-xylophone-novel-non-invasive-bladder-pressure-measurement-system.md",
        tags: ["Research", "Mathematical Model", "Biotech"],
        date: "2023-04-05",
    },
    {
        title: "Self-Driving Delivery Car",
        description: "Focused on developing autonomous delivery vehicles to improve efficiency in last-mile logistics.",
        link: "/projects/self-driving-delivery-car",
        file: "self-driving-delivery-car.md",
        tags: ["ML", "Hardware"],
        date: "2023-12-04",
    },
    {
        title: "DriveSense: Accurate Driver Rating",
        description: "Created an innovative app that uses machine vision to accurately rate driver performance and promote safer driving habits.",
        link: "/projects/drivesense-accurate-driver-rating",
        file: "drivesense-accurate-driver-rating.md",
        tags: ["ML", "Mathematical Model", "Full-Stack"],
        date: "2023-09-17",
    },
    {
        title: "CogniCare: Alzheimer's Prevention and Detection",
        description: "Designed a platform to assist in early detection and prevention of Alzheimer's disease through cognitive assessments and personalized care plans.",
        link: "/projects/cognicare-alzheimers-prevention-and-detection",
        file: "cognicare-alzheimers-prevention-and-detection.md",
        tags: ["ML", "Biotech", "Full-Stack"],
        date: "2023-11-23",
    },
    {
        title: "MAAPA: Smart CTRL+F",
        description: "Developed an advanced search tool that enhances the traditional CTRL+F functionality with intelligent context-aware searching capabilities.",
        link: "/projects/maapa-smart-ctrl-f",
        file: "maapa-smart-ctrl-f.md",
        tags: ["Full-Stack", "ML"],
        date: "2021-09-25",
    },
    {
        title: "Mid-Term Trading Algorithm",
        description: "Created a stock prediction algorithm based on the mean reversion principle, designed to outperform standard market indices.",
        link: "/projects/mean-reversion",
        file: "mean-reversion.md",
        tags: ["Quant", "ML", "Mathematical Model"],
        date: "2024-09-29",
    }
];
