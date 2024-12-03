import React from "react";
import {
  AboutContainer,
  InnerContainer,
  HeaderContainer,
  Title,
  ContentGrid,
  IntroText,
  SkillsContainer,
  SkillsList,
} from "./styles/About.styles";
import { ProjectsButton } from "./styles/Home.styles";
import { HiArrowNarrowRight } from "react-icons/hi";
import { scrollToSection } from "../util/scrollToSection";

const About = ({ aboutHeader, aboutDescription, intro, skills }) => {
  return (
    <AboutContainer id="about">
      <InnerContainer>
        {/* Header Section */}
        <HeaderContainer>
          <Title>
            <p>{aboutHeader}</p>
          </Title>
          <div>{aboutDescription}</div>
        </HeaderContainer>

        <ContentGrid>
          {/* Intro Section */}
          <IntroText>
            <h2>{intro.title}</h2>
            {intro.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <ProjectsButton
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
            >
              CONTACT
              <span className="arrow-icon">
                <HiArrowNarrowRight />
              </span>
            </ProjectsButton>
          </IntroText>

          {/* Skills Section */}
          <SkillsContainer>
            <h3>{skills.title}</h3>
            <SkillsList>
              {skills.list.map((skill, index) => (
                <span key={index}>{skill}</span>
              ))}
            </SkillsList>
          </SkillsContainer>
        </ContentGrid>
      </InnerContainer>
    </AboutContainer>
  );
};

export default About;
