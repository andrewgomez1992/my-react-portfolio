import React from "react";
import { WorkContainer, WorkWrapper } from "./styles/Work.styles";
import { HeaderContainer, Title } from "./styles/About.styles";
import ProjectShowcase from "./ProjectShowcase";

const Work = ({ header, description, projects }) => {
  return (
    <WorkContainer id="projects">
      <WorkWrapper>
        {/* Header */}
        <HeaderContainer>
          <Title>
            <p>{header}</p>
          </Title>
          <div>{description}</div>
        </HeaderContainer>

        {/* Projects */}
        <div>
          {projects.map((project, index) => (
            <ProjectShowcase
              key={index}
              projectTitle={project.title}
              projectDescription={project.description}
              buttonText={project.buttonText}
              buttonLink={project.buttonLink}
              screenContent={project.screenContent}
              mobileImage={project.mobileImage}
            />
          ))}
        </div>
      </WorkWrapper>
    </WorkContainer>
  );
};

export default Work;
