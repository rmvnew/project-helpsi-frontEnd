import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  LoginForm,
  WelcomeText,
  LoginButton,
  GoogleButton,
} from "../registry/style";
import {
  Container,
  LeftContainer,
  Logo,
  MainContainer,
} from "../../layout/loginContainer";
import logo from "../../../img/helpsi_logo_1.png";
import google from "../../../img/google.png";

function Registry() {
  const API_URL = "http://localhost:3000/api/v1/user";
  const PROFILE_API_URL = "http://localhost:3000/api/v1/profile";

  const [userData, setUserData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    user_date_of_birth: "",
    user_profile_id: "",
    user_password: "",
    user_password_confirm: "",
  });
  const [profileOptions, setProfileOptions] = useState([]);

  useEffect(() => {
    axios
      .get(PROFILE_API_URL)
      .then((response) => {
        const options = response.data.map((profile) => ({
          label: profile.profile_name,
          value: profile.profile_id,
        }));

        setProfileOptions(options);
      })
      .catch((error) => {
        const message =
          error.response.data.message ??
          'Não foi possível buscar "Tipos de Problemas"';

        toast.error(message);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const sendUserToAPI = () => {
    // Verifica se a senha e a confirmação da senha correspondem
    if (userData.user_password !== userData.user_password_confirm) {
      toast.error("As senhas não coincidem.");
      return;
    }

    axios
      .post(API_URL, userData)
      .then((response) => {
        console.log("API response:", response.data);
        toast.success("Cadastro realizado com sucesso!");
        // Limpa os campos do formulário definindo o estado userData para valores vazios
        setUserData({
          user_name: "",
          user_email: "",
          user_phone: "",
          user_date_of_birth: "",
          user_profile_id: "",
          user_password: "",
          user_password_confirm: "",
        });
      })
      .catch((error) => {
        const message =
          error.response.data.message ??
          "Ocorreu um erro ao cadastrar. Certifique-se de selecionar um perfil.";

        toast.error(message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendUserToAPI();
  };

  return (
    <>
      <Container>
        <LeftContainer>
          <Logo>
            <img src={logo} alt="Logo da Empresa" />
          </Logo>

          <WelcomeText>
            <h2>Informações de acesso</h2>
          </WelcomeText>

          <LoginForm onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nome completo"
              name="user_name"
              value={userData.user_name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="user_email"
              value={userData.user_email}
              onChange={handleInputChange}
            />
            <input
              type="number"
              placeholder="Telefone (WhatsApp)"
              name="user_phone"
              value={userData.user_phone}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Data de nascimento"
              name="user_date_of_birth"
              value={userData.user_date_of_birth}
              onChange={handleInputChange}
            />
            <input
              type="password"
              placeholder="Senha"
              name="user_password"
              value={userData.user_password}
              onChange={handleInputChange}
            />
            <input
              type="password"
              placeholder="Confirmar senha"
              name="user_password_confirm"
              value={userData.user_password_confirm}
              onChange={handleInputChange}
            />
            <select
              name="user_profile_id"
              value={userData.user_profile_id}
              onChange={handleInputChange}
            >
              <option value="">Selecione seu perfil</option>
              {profileOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <p>
              Ao clicar em continuar, você estará concordando com o nosso
              <strong> termo de uso.</strong>
            </p>
            <LoginButton type="button" onClick={sendUserToAPI}>
              Aceitar e continuar
            </LoginButton>
            <GoogleButton href="https://www.google.com">
              <img src={google} alt="Google Icon" />
              Registre-se usando o google
            </GoogleButton>
          </LoginForm>
        </LeftContainer>

        <MainContainer></MainContainer>
      </Container>
      <ToastContainer />
    </>
  );
}

export default Registry;
