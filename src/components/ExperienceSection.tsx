import React from "react";
import styled from "styled-components";

interface Experience {
    company: string;
    role: string;
    duration: string;
    description: string[];
}

const experiences: Experience[] = [
    {
        company: "Discover Financial Services",
        role: "Lead Full Stack Engineer (Web + Mobile)",
        duration: "Feb 2024 - Present",
        description: [
            "Architected a Micro Frontend (MFE) using React that will be utilized by both new and legacy frameworks to ensure a seemless user experience",
            "Implemented testing standards to ensure MFE would be stable and reliable for all consumers, used Vitest, React Testing Library, Playwright, Certification Testing",
            "Usage of OpenShift using AWS to do regular deploy and releases into production using blue/green deployment",
            "Developed mobile (React Native) user journeys to consolidate them into a unified experience, ensuring consistency across different lines of business - used Jest, RNTL and Appium",
            "Collaborated with designers, product managers, and architects to ensure all requirements are met with no impact to the user experience for new features",
            "Worked closely with product owners to break down complex technical features into smaller tasks and estimating completion timelines",
            "Handled on-call duties including swiftly responding to incidents and code reds and used monitoring tools like Datadog, Kibana to monitor metrics and create dashboards",
            "Provided guidance and direction in the implementation processes for both web and mobile",
        ],
    },
    {
        company: "Discover Financial Services",
        role: "Senior Full Stack Engineer (Web + Mobile)",
        duration: "Aug 2022 - Feb 2024",
        description: [
            "Created a responsive SPA using React that took on high traffic daily and implemented a backend using Spring Boot using back-end for front-end (BFF) architecture",
            "Modified and onboarded applications to OpenShift using AWS to do regular deploy and releases into production using blue/green deployment",
            "Implemented a complete redesign of some major flows in mobile app using React Native with emphasis on end to end testing - used Jest, RNTL and Appium",
            "Handled on-call duties including swiftly responding to incidents and code reds and used monitoring tools like Instana, AppDynamics, Kibana to monitor metrics and create dashboards",
            "Collaborated with product owners to break down complex technical features into smaller tasks and estimating completion timelines",
            "Provided guidance and direction in the implementation processes for both web/mobile",
            "Communicated effectively to ensure stakeholders understand scope of work and impact of changes",
        ],
    },
    {
        company: "Discover Financial Services",
        role: "Full Stack Engineer (Web + Mobile)",
        duration: "March 2022 - Aug 2022",
        description: [
            "Developed numerous screens and flows prioritizing speed and ensuring user-friendly interactions using React Native",
            "Focused on ensuring newly developed code has end to end testing coverage using RNTL for UI components and Appium for user testing using Cucumber",
            "Consulted on technical details for upcoming features and ensuring impact and scope of work is addressed, also worked on breaking these bigger complex items into smaller more manageable tasks",
            "Worked to rewrite a responsive SPA using React with a Spring boot backend",
            "Communicated effectively to ensure features are built out for others to begin work on",
        ],
    },
    {
        company: "Discover Financial Services",
        role: "React Native Engineer",
        duration: "July 2017 - March 2020",
        description: [
            "Developed numerous features for mobile app using React Native",
            "Communicated with teammates daily for clarification and improvements",
            "Improved functionality and enhance existing features in terms of testing coverage and readability",
        ],
    },
];


const ExperienceSection: React.FC = () => {
    return (
        <Section>
            <Title>Work Experience</Title>
            {experiences.map((experience, index) => (
                <ExperienceContainer key={index}>
                    <ExperienceHeaderContainer>
                        <Company>{experience.company}</Company>
                        <Duration>{experience.duration}</Duration>
                    </ExperienceHeaderContainer>
                    <Role>{experience.role}</Role>
                    <DescriptionList>
                        {experience.description.map((desc, i) => (
                            <DescriptionItem key={i}>{desc}</DescriptionItem>
                        ))}
                    </DescriptionList>
                </ExperienceContainer>
            ))}
        </Section>
    );
};

export default ExperienceSection;

const Section = styled.section`
    padding: 2rem;
    background-color: #f9f9f9;
`;

const Title = styled.h2`
    align-self: center;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: #333;
`;

const ExperienceContainer = styled.div`
    margin-bottom: 2rem;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #fff;
`;

const Company = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: #0073e6;
`;

const Role = styled.p`
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: #555;
`;

const Duration = styled.p`
    font-size: 1rem;
    margin-bottom: 1rem;
    color: #777;
`;

const DescriptionList = styled.ul`
    list-style-type: disc;
    padding-left: 1.5rem;
`;

const DescriptionItem = styled.li`
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: #333;
`;

const ExperienceHeaderContainer = styled.div`
     display: 'flex';
     justifyContent: 'space-between';
     alignItems: 'center';
`;