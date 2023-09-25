import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const scaleUp = keyframes`
  from {
    transform: scale(0.95);
  }
  to {
    transform: scale(1);
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${fadeIn} 0.1s ease-out forwards;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  width: 400px;
  max-width: 90%;
  animation: ${scaleUp} 0.3s ease-out forwards;

  h2 {
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--bg-dark);
  }

  button {
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    background-color: var(--bg-dark);
    color: white;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: var(--bg-hover-button);
    }
  }

  @media (max-width: 480px) {
    padding: 20px;
    width: 100%;
  }
`;
