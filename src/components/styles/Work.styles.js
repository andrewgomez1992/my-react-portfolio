import styled from "styled-components";

export const WorkContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  color: #bdbdbd;
  scroll-margin-top: 80px;
`;

export const WorkWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  /* margin-top: 50px; */
  background-color: #fff;
`;

export const SectionTitle = styled.div`
  padding-bottom: 2rem;

  p {
    font-size: 2rem;
    font-weight: bold;
    border-bottom: 4px solid #29ab87;
    display: inline-block;
  }

  .subTitle {
    padding-top: 1.5rem;
    font-weight: 600;
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ProjectCard = styled.div`
  background-size: cover;
  background-position: center;
  height: 250px;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 15px rgba(41, 171, 135, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;

  &:hover .ProjectHoverEffect {
    opacity: 1;
  }
`;

export const ProjectHoverEffect = styled.div`
  opacity: 0;
  transition: opacity 0.3s ease;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;

  span {
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
  }

  div {
    margin-top: 2rem;
    text-align: center;
  }

  button {
    background-color: white;
    color: #333;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    margin: 0.5rem;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #29ab87;
      color: white;
    }
  }
`;
