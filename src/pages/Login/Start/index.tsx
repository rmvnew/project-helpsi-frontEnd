import { Link } from "react-router-dom";
import {
  Btn,
  FormGroup,
  Image,
  LoginBackground,
  LoginContainer,
} from "../../../components/Layout/ContainerLogin/styled";
import logo from "../../../assets/img/logo.svg";
import bonecos from "../../../assets/img/Psychologist.svg";
import LockIcon from "@mui/icons-material/Lock";
import { Span } from "./styled";
export const StartLogin = () => {
  return (
    <>
      <LoginBackground>
        <LoginContainer>
          <FormGroup>
            <img src={logo} alt="logo da empresa" />
            <span>Você procura por atendimento?</span>
            <Btn>
              <Link to="/signin">Sim</Link>
              <Link to="/signin-psy">Sou psicólogo e quero atender</Link>
            </Btn>
            <Span>
              <LockIcon />
              Dados protegidos
            </Span>
          </FormGroup>
          <Image>
            <img src={bonecos} alt="" />
          </Image>
        </LoginContainer>
      </LoginBackground>
    </>
  );
};