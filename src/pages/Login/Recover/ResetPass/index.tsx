import Logo from "../../../../assets/img/logo.svg";
import Bonecos from "../../../../assets/img/Psychologist.svg";
import { LoginBackground } from "../../../../components/Layout/Container/ContainerLogin/background";
import {
  FormGroup,
  Image,
  LoginContainer,
  TextContainer,
} from "../../../../components/Layout/Container/ContainerLogin/styled";
import useResetPassword from "../../../../hooks/useResetPass";
import { Form } from "../RecoverPass/styled";
import { Resend } from "./styled";

import { InputAdornment, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import {
  StyledIconButton,
  StyledInput,
} from "../../../../components/Form/styledForm";

export const ResetPass = () => {
  const {
    form,
    confirmPassword,
    setConfirmPassword,
    isResetting,
    handleChange,
    sendCode,
    sendRecoveryCode,
    passwordError,
  } = useResetPassword();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const passwordsMatch = form.password === confirmPassword;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendCode();
  };

  return (
    <LoginBackground>
      <LoginContainer>
        <FormGroup>
          <img src={Logo} alt="Logo Helpsi" />
          <TextContainer>
            <h2>Altere sua senha</h2>
            <p>
              Digite o código de verificação que acabamos de enviar em seu
              endereço de e-mail.
            </p>
          </TextContainer>
          <Form onSubmit={handleSubmit}>
            <StyledInput
              type="text"
              label="Digite o código"
              value={form.code}
              onChange={handleChange}
              name="code"
            />
            <StyledInput
              label="Digite sua nova senha"
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={handleChange}
              name="password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <StyledIconButton onClick={handleTogglePassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </StyledIconButton>
                  </InputAdornment>
                ),
              }}
              error={!!passwordError}
              helperText={passwordError}
            />

            <StyledInput
              label="Corfirme a senha"
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <StyledIconButton
                      onClick={handleToggleConfirmPassword}
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </StyledIconButton>
                  </InputAdornment>
                ),
              }}
              error={!passwordsMatch}
              helperText={!passwordsMatch && "Senhas não coincidem"}
            />
            <button type="submit">
              {isResetting ? "Redefinindo..." : "Redefinir senha"}
            </button>
          </Form>
          <Resend onClick={sendRecoveryCode}>
            Não recebeu o código? <strong> Reenviar</strong>
          </Resend>
        </FormGroup>
        <Image>
          <img src={Bonecos} alt="Psychologist" />
        </Image>
      </LoginContainer>
    </LoginBackground>
  );
};
