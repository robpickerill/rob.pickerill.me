import { SectionWrapper } from "./shared/sectionwraper";

export const Skills = () => {
    const skills = [
        "Rust",
        "Golang",
        "Python",
        "AWS",
        "Terraform",
        "Kubernetes",
        "Docker",
        "Linux",
        "Git",
        "CI/CD",
        "Observability",
        "Reliability Engineering",
    ];

    return (
        <SectionWrapper title="Skills" >
            <p className="inline-block">
                <span className="mx-1"> {skills.join(" • ")} </span>
            </p>
        </SectionWrapper >
    );
};