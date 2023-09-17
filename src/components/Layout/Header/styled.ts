import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  padding: 20px 0;
  background-color: var(--bg-secundary);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: stretch;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  span {
    padding: 0 50px;
    flex-grow: 1;
    display: flex;
    justify-content: end;
    color: var(--bg-dark);
  }
`;
