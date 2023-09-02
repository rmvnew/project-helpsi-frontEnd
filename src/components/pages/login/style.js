import styled from "styled-components";
import casal from "../../../img/bg_natureza.png";

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
  background-color: #9de0ad;
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
  margin-top: -32px;

  img {
    max-width: 90%;
    height: auto;
  }

  @media (max-width: 768px) {
    img {
      max-width: 9rem;
    }
  }
`;

export const WelcomeText = styled.div`
  font-size: 1.6rem;
  font-weight: bolder;
  line-height: 2.4rem;
  margin-bottom: 24.3px;
  color: #594f4f;

  @media (max-width: 768px) {
    h2 {
      font-size: 14px;
      margin-top: 10px;
    }
  }
`;

export const MainContainer = styled.div`
  padding: 20px;
  background-color: #9de0ad;
  background-image: url(${casal});
  background-size: cover;
  background-position: center center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LoginForm = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

export const PasswordReset = styled.div`
  position: relative;
  top: -4px;
  margin-left: 9rem;
  font-size: 12px;

  a {
    color: #594f4f;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    text-align: right;
  }
`;

export const LoginButton = styled.button`
  background-color: #594f4f;
  color: #ffffff;
  border: none;
  padding: 10px 43%;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 10px;

  :hover {
    background-color: #45ada8;
  }
`

export const LoginOptions = styled.div`
  margin-top: 20px;
  text-align: center;
  color: #594f4f;

  a {
    color: #594f4f;
    text-decoration: none;
  }

  p {
    margin-top: 70px;
    color: #666;
  }
`;

export const GoogleButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: #333;
  border: 1px solid #ddd;
  padding: 10px 15px;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;
  margin-top: 10px;

  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`;
