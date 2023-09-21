import { ChangeEvent, FormEvent } from "react";
import { ToastContainer } from "react-toastify";
import { useSignUpLogic } from "../../../hooks/useSignUp";
import { useFormValidation } from "../../../hooks/useFormValidation";
import { Form } from "./styled";

import LockIcon from "@mui/icons-material/Lock";
import Logo from "../../../assets/img/logo.svg";
import Bonecos from "../../../assets/img/Psychologist.svg";
import "react-toastify/dist/ReactToastify.css";

import {
  FormGroup,
  Image,
  LoginBackground,
  LoginContainer,
  Span,
  TextContainer,
} from "../../../components/Layout/Container/ContainerLogin/styled";

export const SignUp = () => {
  const { formData, setFormData, isSubmitting, setIsSubmitting } =
    useSignUpLogic();

  const { validateForm } = useFormValidation(formData, setIsSubmitting);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
    }
  };

  return (
    <LoginBackground>
      <LoginContainer>
        <FormGroup>
          <img src={Logo} alt="Logo Helpsi" />
          <TextContainer>
            <h2>Informações de acesso</h2>
          </TextContainer>

          <Form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nome completo"
              required
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Digite seu email"
              required
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Crie uma senha"
              required
              name="user_password"
              value={formData.user_password}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Confirme a senha"
              required
              name="user_password_confirmation"
              value={formData.user_password_confirmation}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Nascimento (DD/MM/YYYY)"
              required
              name="user_date_of_birth"
              value={formData.user_date_of_birth}
              onChange={handleChange}
            />
            <p>
              Ao clicar em continuar, você estará concordando com o nosso{" "}
              <strong>termo de uso.</strong>
            </p>
            <button type="submit">
              {isSubmitting ? "Cadastrando..." : "Aceitar e continuar"}
            </button>
          </Form>
          <Span>
            <LockIcon />
            Dados protegidos
          </Span>
        </FormGroup>
        <Image>
          <img src={Bonecos} alt="bonecos" />
        </Image>
      </LoginContainer>
      <ToastContainer />
    </LoginBackground>
  );
};
