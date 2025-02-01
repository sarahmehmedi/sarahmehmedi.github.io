import React, { useState } from "react";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import styled from "styled-components";
import { FaEnvelope, FaFileDownload, FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Tabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState("about");

    const renderContent = () => {
        switch (activeTab) {
            case "about":
                return <AboutSection />;
            case "experience":
                return <ExperienceSection />;
            case "projects":
                return <div>Projects Content</div>;
            default:
                return null;
        }
    };
    return (
        <div>
            <HeaderContainer>
                <HeaderText>Sarah Mehmedi</HeaderText>
                <ContactContainer>
                    <ContactText><FaGithub /> sarahmehmedi</ContactText>
                    <ContactText><FaEnvelope /> sarahmehmedi@gmail.com</ContactText>
                    <ContactText><FaFileDownload /> add pdf here</ContactText>
                    <ContactText><FaLocationDot /> Illinois</ContactText>
                </ContactContainer>
            </HeaderContainer>
            <TabButtons>
                <TabButton
                    onClick={() => setActiveTab("about")}
                    className={activeTab === "about" ? "active" : ""}
                >
                    About
                </TabButton>
                <TabButton
                    onClick={() => setActiveTab("experience")}
                    className={activeTab === "experience" ? "active" : ""}
                >
                    Experience
                </TabButton>
                <TabButton
                    onClick={() => setActiveTab("projects")}
                    className={activeTab === "projects" ? "active" : ""}
                >
                    Projects
                </TabButton>
            </TabButtons>
            <div className="tab-content">{renderContent()}</div>
        </div >
    );
};

export default Tabs;

const TabButtons = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 20px 0;
`;

const TabButton = styled.button`
    padding: 12px 24px;
    font-size: 1rem;
    font-weight: 600;
    background-color: #457b9d; /* teal */
    border: none;
    border-radius: 8px;
    color: #f1faee; /* light color */
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
    &:hover {
        background-color: #1d3557; /* dark blue */
        transform: translateY(-2px);
    }
    &.active {
        background-color: #1d3557; /* dark blue */
        color: #fff;
        transform: translateY(-2px);
    }
`;

const HeaderContainer = styled.div`
    display: flex;
    padding: 20px;
`;

const HeaderText = styled.h1`
    align-self: center;
    color:rgb(89, 125, 147);
`;

const ContactContainer = styled.p`
    font-size: 1.2rem;
    color: #666666;
    margin-left: 10px;
    flex-direction: column;
    margin-left: auto;
`;

const ContactText = styled.p`
    font-size: 1.2rem;
    color: #666666;
    margin-left: 10px;
`;