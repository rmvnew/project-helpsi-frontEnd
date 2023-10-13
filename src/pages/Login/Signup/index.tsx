import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useSignUp } from "../../../hooks/useSignUp";
import {
  ButtonContainer,
  Form,
  PsychologistContainer,
  StepTitle,
} from "./styled";

import Logo from "../../../assets/img/logo.svg";
import Bonecos from "../../../assets/img/Psychologist.svg";

import {
  FormGroup,
  Image,
  LoginContainer,
  TextContainer,
} from "../../../components/Layout/Container/ContainerLogin/styled";
import { LoginBackground } from "../../../components/Layout/Container/ContainerLogin/background";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useAllPsychologists } from "../../../hooks/useAllPsychologists";
import { Psychologist } from "../../../types/Psychologist";
import { getFormattedName } from "../../../common/functions/formatString";
import { allFieldsFilled } from "../../../common/functions/validateSignUp";

export const SignUp = () => {
  const { formData, setFormData, setIsSubmitting } = useSignUp();
  const psychologists: Psychologist[] = useAllPsychologists();

  const [step, setStep] = useState(1);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const keys = name.split(".");
      if (keys.length > 1) {
        return {
          ...prev,
          [keys[0]]: {
            ...(prev as any)[keys[0]],
            [keys[1]]: value,
          },
        };
      } else {
        return {
          ...prev,
          [name]: value,
        };
      }
    });
  };

  const handleCheckboxChange = (
    e: ChangeEvent<HTMLInputElement>,
    psychologistId: string
  ) => {
    if (e.target.checked) {
      setFormData((prev) => ({
        ...prev,
        psychologist_id: psychologistId,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        psychologist_id: "",
      }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (allFieldsFilled(formData, step)) {
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
            {step === 1 && (
              <>
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
                <button
                  type="button"
                  onClick={() => {
                    if (allFieldsFilled(formData, step)) {
                      setStep(2);
                    }
                  }}
                >
                  Próximo
                </button>
              </>
            )}
            {step === 2 && (
              <>
                <input
                  type="text"
                  placeholder="Nascimento (DD/MM/YYYY)"
                  required
                  name="user_date_of_birth"
                  value={formData.user_date_of_birth}
                  onChange={handleChange}
                />

                <select
                  name="user_genre"
                  value={formData.user_genre}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Selecione seu gênero
                  </option>
                  <option value="MALE">Masculino</option>
                  <option value="FEMALE">Feminino</option>
                </select>

                <input
                  type="tel"
                  placeholder="Número de telefone"
                  required
                  name="user_phone"
                  value={formData.user_phone}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  placeholder="RG"
                  required
                  name="user_rg"
                  value={formData.user_rg}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  placeholder="CPF"
                  required
                  name="user_cpf"
                  value={formData.user_cpf}
                  onChange={handleChange}
                />

                <ButtonContainer>
                  <button type="button" onClick={() => setStep(1)}>
                    Voltar
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (allFieldsFilled(formData, step)) {
                        setStep(3);
                      }
                    }}
                  >
                    Próximo
                  </button>
                </ButtonContainer>
              </>
            )}

            {step === 3 && (
              <>
                <input
                  type="text"
                  placeholder="CEP"
                  required
                  name="address.address_zipcode"
                  value={formData.address.address_zipcode}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  placeholder="Estado"
                  required
                  name="address.address_state"
                  value={formData.address.address_state}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  placeholder="Cidade"
                  required
                  name="address.address_city"
                  value={formData.address.address_city}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  placeholder="Bairro"
                  required
                  name="address.address_district"
                  value={formData.address.address_district}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  placeholder="Rua"
                  required
                  name="address.address_street"
                  value={formData.address.address_street}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  placeholder="Número da casa"
                  required
                  name="address.address_home_number"
                  value={formData.address.address_home_number}
                  onChange={handleChange}
                />

                <ButtonContainer>
                  <button type="button" onClick={() => setStep(2)}>
                    Voltar
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (allFieldsFilled(formData, step)) {
                        setStep(4);
                      }
                    }}
                  >
                    Próximo
                  </button>
                </ButtonContainer>
              </>
            )}

            {step === 4 && (
              <>
                <StepTitle>
                  Determine o tipo de psicólogo que atende suas necessidades:
                </StepTitle>
                {psychologists.map((psych) => (
                  <PsychologistContainer key={psych.user_id}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="psychologist_id"
                          value={psych.user_id}
                          checked={formData.psychologist_id === psych.user_id}
                          onChange={(e) =>
                            handleCheckboxChange(e, psych.user_id)
                          }
                        />
                      }
                      label={`${getFormattedName(
                        psych.user_name
                      )} - ${psych.specialtys
                        .map((specialty) =>
                          getFormattedName(specialty.specialty_name)
                        )
                        .join(", ")}`}
                    />
                  </PsychologistContainer>
                ))}
                <ButtonContainer>
                  <button type="button" onClick={() => setStep(3)}>
                    Voltar
                  </button>
                  <button type="submit">Finalizar cadastro</button>
                </ButtonContainer>
              </>
            )}
          </Form>

          <Link to="/">
            Já tem uma conta? <strong>Faça login</strong>
          </Link>
        </FormGroup>
        <Image>
          <img src={Bonecos} alt="bonecos" />
        </Image>
      </LoginContainer>
    </LoginBackground>
  );
};
