import { SectionWrapper } from './shared/sectionwraper';

export const Education = () => {
    type EducationProps = {
        school: string;
        course: string;
        date: string;
    };

    const education: EducationProps[] = [
        {
            school: "University of Keele",
            course: "MSc Computer Science",
            date: "2023 - Present",
        },
        {
            school: "Staffordshire University",
            course: "Higher National Diploma Computer Science",
            date: "2004 - 2007",
        },
        {
            school: "Newcastle College",
            course: "BTEC National Diploma for IT Practitioners",
            date: "2002 - 2004",
        },
        {
            school: "Clayton Hall Business and Enterprise College",
            course: "GCSEs",
            date: "1995 - 2000",
        }
    ];

    return (
        <SectionWrapper title="Education" >
            <ul className="ml-2">
                {education.map((education, i) => (
                    <li key={education.school} className="mt-1">
                        <div className="flex">
                            <span className="h3 mt-3">{education.course}, </span>
                            <span className="h3 mt-3 ml-2">{education.school}</span>
                        </div>
                        <span className="ml-auto text-muted">{education.date}</span>

                    </li>
                ))}
            </ul>
        </SectionWrapper >
    );
};