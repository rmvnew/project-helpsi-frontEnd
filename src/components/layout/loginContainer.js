import styled from "styled-components";
import casal from "../../img/casal.svg";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  min-height: 100vh;
  background-color: #f0f0f0;
  background-image: url(${casal});
  background-size: cover;

  @media (min-width: 769px) {
    grid-template-columns: 400px 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const LeftContainer = styled.div`
  width: 400px;
  padding: 20px;
  background-color: var(--bg-primary);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 769px) {
    width: 400px;
    padding: 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
    text-align: center;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 10%;

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    margin-top: 10%;

    img {
      width: 300px;
    }
  }
`;

export const MainContainer = styled.div`
  padding: 20px;
  background-color: var(--bg-primary);
  background-image: url(${casal});
  background-size: cover;
  background-position: center center;

  @media (max-width: 768px) {
    display: none;
  }
`;