import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import LockIcon from "@mui/icons-material/Lock";

import {
  FormGroup,
  Image,
  LoginBackground,
  LoginContainer,
  Span,
  TextContainer,
} from "../../../../components/Layout/Container/ContainerLogin/styled";
import { Form } from "./styled";
import Logo from "../../../../assets/img/logo.svg";
import Bonecos from "../../../../assets/img/Psychologist.svg";
import "react-toastify/dist/ReactToastify.css";

import { FormData } from "../../../../interface/signup.interface";
import { validateDate } from "../../../../common/utils/validade";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    user_name: "",
    user_email: "",
    user_password: "",
    user_password_confirmation: "",
    user_date_of_birth: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const api = process.env.REACT_APP_API_BASE_URL;

  const {
    user_name,
    user_email,
    user_password,
    user_password_confirmation,
    user_date_of_birth,
  } = formData;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const arePasswordsEqual = () => user_password === user_password_confirmation;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!arePasswordsEqual()) {
      displayError("Senhas não são iguais!");
      return;
    }

    if (!user_date_of_birth || !validateDate(user_date_of_birth)) {
      displayError(
        "Por favor, insira sua data de nascimento no formato correto: DD/MM/YYYY."
      );
      return;
    }

    try {
      const response = await axios.post(`${api}/user/patient/public`, {
        user_name,
        user_email,
        user_password,
        user_date_of_birth,
      });

      if (response.data) {
        toast.success("Registro realizado com sucesso!");
        navigate("/signin/patient");
      }
    } catch {
      displayError("Erro ao registrar");
    } finally {
      setIsSubmitting(false);
    }
  };

  const displayError = (message: string) => {
    toast.error(message);
    setIsSubmitting(false);
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
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Digite seu email"
              required
              name="user_email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Crie uma senha"
              required
              name="user_password"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Confirme a senha"
              required
              name="user_password_confirmation"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Nascimento (DD/MM/YYYY)"
              required
              name="user_date_of_birth"
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
