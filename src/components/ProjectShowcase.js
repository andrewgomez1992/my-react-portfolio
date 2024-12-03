import React from "react";
import laptopImage from "../assets/laptop.png";
import {
  CaseStudyButton,
  DetailsContainer,
  ImageContainer,
  ShowcaseContainer,
  ScreenOverlay,
} from "./styles/ProjectShowcase.styles";

const ProjectShowcase = ({
  projectTitle,
  projectDescription,
  buttonText,
  buttonLink,
  screenContent, // New prop for the content over the laptop screen
}) => {
  return (
    <ShowcaseContainer>
      <ImageContainer>
        <img src={laptopImage} alt="Laptop showcasing project" />
        <ScreenOverlay>
          {screenContent} {/* Render content on the laptop screen */}
        </ScreenOverlay>
      </ImageContainer>
      <DetailsContainer>
        <h3>{projectTitle}</h3>
        <p>{projectDescription}</p>
        <a href={buttonLink} target="_blank" rel="noopener noreferrer">
          <CaseStudyButton>{buttonText}</CaseStudyButton>
        </a>
      </DetailsContainer>
    </ShowcaseContainer>
  );
};

export default ProjectShowcase;
