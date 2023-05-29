import { SectionWrapper } from './shared/sectionwraper';

export const Certifications = () => {
    type CertificationProps = {
        certification: string;
        date: string;
    };

    const certifications: CertificationProps[] = [
        {
            certification: "AWS Certified DevOps Engineer - Professional",
            date: "2021",
        },
        {
            certification: "AWS Certified Security - Specialty",
            date: "2021",
        },
        {
            certification: "AWS Certified Solutions Architect - Professional",
            date: "2020",
        },
        {
            certification: "AWS Certified Solutions Architect - Associate",
            date: "2020",
        },
        {
            certification: "AWS Certified SysOps Administrator - Associate",
            date: "2020",
        },
        {
            certification: "AWS Well-Architected Partner Bootcamp",
            date: "2020",
        },
        {
            certification: "Red Hat Certified Engineer",
            date: "2017",
        },
        {
            certification: "Red Hat Certified System Administrator",
            date: "2017",
        },
        {
            certification: "Suse Certified Linux Administrator",
            date: "2016",
        },
        {
            certification: "Nginx Fundamentals",
            date: "2016",
        },
        {
            certification: "Linux Professional Institute Certification - LPIC1",
            date: "2015",
        },
        {
            certification: "CompTIA Linux+",
            date: "2015",
        },

    ];

    return (
        <SectionWrapper title="Certifications" >
            <ul className="ml-2">
                {certifications.map((certificate, i) => (
                    <li key={certificate.certification} className="mt-1">
                        <div className="flex">
                            <span className="h5">{certificate.certification}</span>, <span className="ml-auto text-muted">{certificate.date}</span>

                        </div>
                    </li>
                ))}
            </ul>
        </SectionWrapper >
    );
};