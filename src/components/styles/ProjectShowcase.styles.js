import styled from "styled-components";

export const ShowcaseContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 40px 0;
  max-width: 1000px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  position: relative; /* Make this container relative so the overlay can be positioned within it */

  img {
    width: 100%;
    max-width: 500px;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const ScreenOverlay = styled.div`
  position: absolute;
  top: 17%;
  left: 15.3%;
  width: 69.2%;
  height: 67%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    /* object-fit: cover; */
  }
`;

export const DetailsContainer = styled.div`
  flex: 1;
  padding-left: 20px;

  h3 {
    color: #333;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
  }

  p {
    font-size: 1rem;
    color: #5a5a5a;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

export const CaseStudyButton = styled.button`
  background-color: #0a7969;
  color: white;
  font-size: 1rem;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0a7969;
  }
`;
