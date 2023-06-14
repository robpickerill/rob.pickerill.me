import { SectionWrapper } from "./shared/sectionwraper";

export const WorkExperience = () => {

    type WorkExperienceProps = {
        company: string;
        date: string;
        title: string;
        description: string;
        report: string;
        bulletPoints: string[];
    };

    const workExperience: WorkExperienceProps[] = [
        {
            company: "Disney Streaming Services",
            date: "Dec 2021 - Present",
            title: "Senior Principal Engineer",
            description: "Driving the exponential growth of Reliability Engineering at Disney Streaming through transformative technical leadership.",
            report: "VP of Software Engineering",
            bulletPoints: [
                "Serving as an esteemed technical advisor and revered mentor, empowering the Reliability Engineering organization towards exponential growth.",
                "Lead the development of an organization-wide, cross-cutting project to fortify the reliability of the Disney+ global platform during high-traffic events such as content drops like The Mandalorian, and live events such as The SuperBowl.",
                "Engineered highly efficient concurrent APIs in Go and Rust, significantly enhancing performance and scalability.",
                "Developed multiple cutting-edge tools and command-line interfaces (CLIs) in Go and Rust, leveraging advanced concurrency paradigms to streamline processes, increase productivity, and eliminate operational overhead.",
                "Providing expert guidance and support to service teams, ensuring adherence to best practices and enabling the delivery of reliable, scalable, secure, and observable services.",
                "Led an organization-wide cloud cost optimization initiative, delivering multimillion-dollar savings.",
                "Delivered informative guest lectures on computer science and the technology industry at University Academy '92, inspiring the next generation of talent.",
                "Led and mentored a team of engineers in empowering and mentoring students at University Academy '92, fostering innovation and knowledge sharing.",
            ],
        },
        {
            company: "Disney Streaming Services",
            date: "April 2020 - Dec 2021",
            title: "Principal Engineer",
            description: "Fortifying the reliability of the Disney+ platform amidst unprecedented subscriber growth, driving exceptional user experiences.",
            report: "VP of Software Engineering",
            bulletPoints: [
                "Designed and engineered a patent-pending observability platform, revolutionizing visibility by providing a unified view of observability metrics from playback devices across the globe.",
                "Architected and built an advanced AWS service quota monitoring and alerting system, proactively safeguarding large multi-tenant AWS accounts from potential issues and ensuring uninterrupted operations.",
                "Authored and delivered an influential course on leveraging AWS services to build scalable, reliable, and secure applications, empowering non-technical staff with invaluable knowledge and skills.",
            ],
        },
        {
            company: "Disney Streaming Services",
            date: "April 2018 - April 2020",
            title: "Site Reliability Engineer / Technical Lead (Consultant)",
            description: "Lead a team of reliability engineers, orchestrating their efforts to prepare for the highly anticipated launch of Disney+.",
            report: "VP of Software Engineering",
            bulletPoints: [
                "Provided guidance and mentorship to a team of five accomplished engineers, fostering a culture of collaboration and excellence.",
                "Ensured the successful launch of Disney+ across multiple continents and markets, collaborating closely with global commerce systems to optimize performance and guarantee reliability in the face of unprecedented scale of user traffic.",
            ],
        },
        {
            company: "HM Revenue and Customs",
            date: "June 2017 - April 2018",
            title: "Senior DevOps Engineer (Consultant)",
            description: "Developed monitoring and observability systems for the HMRC Digital Platform.",
            report: "Engineering Manager",
            bulletPoints: [
                "Developed a centralized monitoring service for HMRC cloud systems, covering multiple data centers and providing comprehensive observability for all HMRC fraud management systems, including application-level monitoring and user journey analysis.",
                "Received heartfelt appreciation from Pete Schofield for contributions and efforts: https://drive.google.com/uc?id=1s6uW9VA5VzWqNlfJFRZmFPB7Xq9E222z",
            ],
        },
        {
            company: "LinuxAdept",
            date: "June 2017 - April 2020",
            title: "Owner",
            description: "Provided consultancy services to multiple clients, including HMRC, Disney Streaming Services.",
            report: "N/A",
            bulletPoints: [
                "Provided strategic consultancy services to multiple clients, including HMRC and Disney Streaming Services, delivering valuable contributions, and driving positive change in the consultative engagements",
            ],
        },
        {
            company: "UKFast",
            date: "January 2016 - June 2017",
            title: "Senior DevOps Engineer",
            description: "Developed and implemented an advanced monitoring system spanning five data centers and thousands of systems, ensuring seamless operations.",
            report: "Head of DevOps",
            bulletPoints: [
                "Designed and implemented a comprehensive monitoring solution covering all OSI 7 layers, from network monitoring to application metrics and user journey analysis.",
                "Utilized the monitoring system for both internal and customer systems, laying the foundation for a tiered monitoring service successfully offered by the company.",
            ],
        },
        {
            company: "UKFast",
            date: "January 2015 - January 2016",
            title: "Senior Enterprise Linux Engineer",
            report: "Engineering Manager",
            description: "Architected, built, and supported large-scale Linux e-commerce systems for enterprise customers, ensuring optimal performance and reliability.",
            bulletPoints: [
                "Recognized with the prestigious UKFast award for Most Supportive Team Member in both 2016 and 2017, demonstrating dedication and excellence in supporting the team.",
            ],
        },
        {
            company: "Navaho Technologies",
            date: "December 2013 - January 2015",
            title: "Technical Project Manager",
            description: "Successfully managed technical projects at Navaho Technologies, driving effective execution and delivery.",
            report: "CEO",
            bulletPoints: [],
        },
        {
            company: "Navaho Technologies",
            date: "May 2005 - December 2013",
            title: "Systems and Network Engineer",
            description: "Played a critical role in designing, implementing, and maintaining robust distributed systems and global network infrastructure.",
            report: "Engineering Manager",
            bulletPoints: [],
        },
    ]

    return (
        <SectionWrapper title="Work Experience">
            <ul className="mb-5">
                {workExperience.map((workExperience, i) => (
                    <li key={workExperience.company} className="mt-1">
                        <div className="flex">
                            <span className="h3 mt-3">{workExperience.title}, {workExperience.company}</span>
                        </div>
                        <span className="text-muted mt-0 ml-2">Reporting to {workExperience.report} | {workExperience.date}</span>
                        <p className="mt-2 mb-1">{workExperience.description}</p>
                        <ul className="mt-0 ml-5 mb-4">
                            {workExperience.bulletPoints.map((bulletPoint) => (
                                <li key={bulletPoint}>{bulletPoint}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </SectionWrapper >
    );
};