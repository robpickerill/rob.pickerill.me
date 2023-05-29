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
            date: "May 2021 - Present",
            title: "Senior Principal Engineer",
            description: "Leading the technical growth of Reliability Engineering within Disney Streaming.",
            report: "SVP of Software Engineering",
            bulletPoints: [
                "Serving as a distinguished technical advisor and revered mentor, empowering the Reliability Engineering organization.",
                "Lead the development of an organisation wide, cross cutting, project that ensures the reliability of the Disney+ global platform for high traffic events (content drops, live events).",
                "Engineered highly efficient APIs in Go and Rust, contributing to improved performance.",
                "Created multiple tools and command-line interfaces (CLIs) in Go and Rust, streamlining processes, and enhancing productivity, and reducing toil.",
                "Support service teams in the development of their services, providing guidance on best practices, and ensuring that services are reliable, scalable, secure, and observable.",
                "Lead organisation wide cost optimization efforts, saving the business millions of dollars.",
                "Acted as a guest lecturer at University Academy '92, delivering lectures on computer science and the technology industry",
                "Led a team of engineers in mentoring students at University Academy '92",
            ],
        },
        {
            company: "Disney Streaming Services",
            date: "April 2020 - May 2021",
            title: "Principal Engineer",
            description: "Leading the reliability of the Disney+ platform, as the business is in hyperscale subscriber growth",
            report: "VP of Software Engineering",
            bulletPoints: [
                "Developed a patent pending observability platform, that provides a single pane of glass for all observability metrics from all playback devices globally.",
                "Developed an AWS service quota monitoring and alerting, ensuring that AWS service quotas do not cause issues in the large Disney Streaming multi tenant AWS accounts.",
                "Wrote and taught a course on AWS for Technical Project Managers, teaching them how to use AWS services to build scalable, reliable, and secure applications.",
            ],
        },
        {
            company: "Disney Streaming Services",
            date: "April 2018 - April 2020",
            title: "Technical Lead",
            description: "Guided a team of reliability engineers in preparation for the highly anticipated launch of Disney+.",
            report: "VP of Software Engineering",
            bulletPoints: [
                "Led and mentored a team of five accomplished engineers, fostering collaboration and excellence.",
                "Ensured the launch of Disney+ across multiple continents, working with the global commerce systems, focus was on performance and reliability for the unprecendented scale of traffic during the Disney+ launch.",
            ],
        },
        {
            company: "HM Revenue and Customs",
            date: "June 2017 - April 2018",
            title: "Senior DevOps Engineer",
            description: "Developed monitoring and observability systems for the HMRC Digital Platform.",
            report: "Engineering Manager",
            bulletPoints: [
                "Developed a central monitoring service for the HMRC cloud systems. The monitoring system covered multiple data centres and was responsible for the observability of all HMRC fraud management systems, including application level monitoring and user journeys.",
            ],
        },
        {
            company: "UKFast",
            date: "June 2016 - June 2018",
            title: "Senior DevOps Engineer",
            description: "Developed a monitoring system spanning five data centres and several thousand systems.",
            report: "Head of DevOps",
            bulletPoints: [
                "The Monitoring covered all OSI 7 layers, from network monitoring to application metrics and user journeys.",
                "The Monitoring system was used for internal and customer systems, and became the foundation for a tiered monitoring service sold by the company.",
            ],
        },
        {
            company: "UKFast",
            date: "June 2016 - June 2018",
            title: "Senior Enterprise Linux Engineer",
            report: "Engineering Manager",
            description: "Responsible for architecting, building and supporting enterprise customers running large scale linux ecommerce systems.",
            bulletPoints: [],
        },
        {
            company: "Navaho Technologies",
            date: "December 2013 - January 2015",
            title: "Technical Project Manager",
            description: "",
            report: "CEO",
            bulletPoints: [],
        },
        {
            company: "Navaho Technologies",
            date: "May 2005 - December 2013",
            title: "Systems and Network Engineer",
            description: "",
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