import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import {
  HomeContainer,
  ContentContainer,
  IntroText,
  Description,
  ButtonWrapper,
  ProjectsButton,
} from "./styles/Home.styles";

// Utility function for smooth scrolling
const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Home = ({ greeting, description, buttonText }) => {
  return (
    <HomeContainer id="home">
      <ContentContainer>
        {/* Greeting */}
        <IntroText>{greeting}</IntroText>

        {/* Description */}
        <Description>{description}</Description>

        {/* Button */}
        <ButtonWrapper>
          <ProjectsButton onClick={() => scrollToSection("projects")}>
            {buttonText}
            <span className="arrow-icon">
              <HiArrowNarrowRight />
            </span>
          </ProjectsButton>
        </ButtonWrapper>
      </ContentContainer>
    </HomeContainer>
  );
};

export default Home;
