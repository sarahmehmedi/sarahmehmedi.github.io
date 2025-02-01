import React from "react";
import styled from "styled-components";

const AboutSection: React.FC = () => {
    return (
        <AboutSectionContainer>
            <AboutContent>
                <AboutTitle>About Me</AboutTitle>
                <AboutText>
                    Hi, I'm Sarah. I'm a passionate web and mobile developer with
                    experience in creating dynamic and responsive applications. I love
                    working with modern web technologies and continuously learning new
                    things to improve my skills. I have vast knowledge in React and React
                    Native that I have used to build many high traffic applications. When
                    I am not working, I enjoy spending time with my family and friends,
                    traveling, and exploring new places.
                </AboutText>
            </AboutContent>
        </AboutSectionContainer>
    );
};

export default AboutSection;

const AboutSectionContainer = styled.section`
  display: flex;
  height: 100vh;
  background-color: #f0f0f0;
`;

const AboutContent = styled.div`
  text-align: center;
  padding: 20px;
`;

const AboutTitle = styled.h1`
  font-size: 2.5rem;
  color: #666666;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  color: #666666;
  line-height: 1.6;
`;