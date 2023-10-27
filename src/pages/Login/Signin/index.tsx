import { useState } from "react";
import { Link } from "react-router-dom";
import { InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { isValidEmail } from "../../../common/utils/validade";
import { Form, Span, TextContainer } from "./styled";

import {
  FormGroup,
  Image,
  LoginContainer,
} from "../../../common/utils/imports/signin";

import { LoginBackground } from "../../../components/Layout/Container/ContainerLogin/background";

import { useLogin } from "../../../hooks/useLogin";

import Logo from "../../../assets/img/logo.svg";
import Bonecos from "../../../assets/img/Psychologist.svg";
import { StyledButton, StyledIconButton, StyledInput } from "../../../components/Form/styledForm";

export const SignIn = () => {
  const { form, isLoggingIn, handleInputChange, handleFormSubmit } = useLogin();

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <LoginBackground>
      <LoginContainer>
        <FormGroup>
          <img src={Logo} alt="Logo Helpsi" />
          <TextContainer>
            <h2>Que bom te ver por aqui!</h2>
            <p>Acesse sua conta agora mesmo</p>
          </TextContainer>
          <Form onSubmit={handleFormSubmit}>
            <StyledInput
              label="Email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleInputChange}
              error={!isValidEmail(form.email) && form.email !== ""}
              helperText={
                !isValidEmail(form.email) && form.email !== ""
                  ? "Por favor, insira um email válido"
                  : ""
              }
            />
            <StyledInput
              label="Senha"
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleInputChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <StyledIconButton  onClick={handleTogglePassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </StyledIconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Link to="/login/recover-pass">Esqueceu sua senha?</Link>

            <StyledButton type="submit">
              {isLoggingIn ? "Entrando..." : "Entrar"}
            </StyledButton>
          </Form>

          <Span>
            Não tem uma conta?
            <Link to="/signup">
              {" "}
              <strong>Registre-se aqui</strong>
            </Link>
          </Span>
        </FormGroup>
        <Image>
          <img src={Bonecos} alt="Psychologist" />
        </Image>
      </LoginContainer>
    </LoginBackground>
  );
};
