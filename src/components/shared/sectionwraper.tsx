import { PropsWithChildren } from 'react';

interface SectionWrapperProps extends PropsWithChildren {
    title: string;
}

export const SectionWrapper = ({ children, title }: SectionWrapperProps) => (
    <>
        <h2 className="d-flex flex-column flex-md-row justify-content-between mb-0">{title}</h2>
        <hr className="border-solid mt-1" />

        <div className="text-start">{children}</div>
    </>
);