import { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import InputMask from "react-input-mask";
import {
  MenuItem,
  Checkbox,
  FormControlLabel,
  Typography,
  SelectChangeEvent,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import {
  ButtonContainer,
  Form,
  PsychologistContainer,
  StepTitle,
  StyledButton,
  StyledIconButton,
  StyledInput,
  StyledSelect,
} from "../../../components/Form/styledForm";

import Logo from "../../../assets/img/logo.svg";
import Bonecos from "../../../assets/img/Psychologist.svg";
import {
  FormGroup,
  Image,
  LoginContainer,
  TextContainer,
} from "../../../components/Layout/Container/ContainerLogin/styled";
import { LoginBackground } from "../../../components/Layout/Container/ContainerLogin/background";
import { useSignUp } from "../../../hooks/useSignUp";
import { useAllPsychologists } from "../../../hooks/useAllPsychologists";
import { Psychologist } from "../../../interface/psychologist.interface";
import { allFieldsFilled } from "../../../common/functions/validateSignUp";
import {
  isAtLeastFourYearsOld,
  isValidCPF,
  isValidEmail,
} from "../../../common/utils/validade";
import { getFormattedName } from "../../../common/functions/formatString";

const SignUp = () => {
  const { formData, setFormData, setIsSubmitting, isSubmitting } = useSignUp();
  const psychologists: Psychologist[] = useAllPsychologists();
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [rgError, setRgError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [step, setStep] = useState(1);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "user_password") {
      if (value.length < 5 || value.length > 15) {
        setPasswordError("A senha deve ter entre 5 e 15 caracteres.");
      } else {
        setPasswordError(null);
      }
    }

    if (name === "user_rg") {
      if (value.length < 5 || value.length > 11) {
        setRgError("O RG deve ter entre 5 e 11 caracteres.");
      } else {
        setRgError(null);
      }
    }
    if (name === "user_phone") {
      const isValid = /^(?!([0-9])\1+$)[1-9]{2}9?[0-9]{8}$/.test(value);
      if (!isValid) {
        setPhoneError("Número de telefone inválido!");
      } else {
        setPhoneError(null);
      }
    }

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

  const handleChangeForSelect = (e: SelectChangeEvent<unknown>) => {
    const name = e.target.name ?? "";
    const value = e.target.value;

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

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleTogglePasswordConfirmation = () => {
    setShowPasswordConfirmation(!showPasswordConfirmation);
  };

  const passwordsMatch = () => {
    return formData.user_password === formData.user_password_confirmation;
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
                <Typography variant="h6">
                  Preencha seus dados de acesso:
                </Typography>
                <StyledInput
                  label="Nome completo"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                />
                <StyledInput
                  label="Email"
                  type="email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  error={
                    !isValidEmail(formData.user_email) &&
                    formData.user_email !== ""
                  }
                  helperText={
                    !isValidEmail(formData.user_email) &&
                    formData.user_email !== ""
                      ? "Por favor, insira um email válido"
                      : ""
                  }
                />
                <StyledInput
                  label="Senha"
                  type={showPassword ? "text" : "password"}
                  name="user_password"
                  value={formData.user_password}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <StyledIconButton
                          onClick={handleTogglePassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </StyledIconButton>
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  error={!!passwordError}
                  helperText={passwordError}
                />

                <StyledInput
                  label="Confirme a senha"
                  type={showPasswordConfirmation ? "text" : "password"}
                  name="user_password_confirmation"
                  value={formData.user_password_confirmation}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <StyledIconButton
                          onClick={handleTogglePasswordConfirmation}
                          edge="end"
                        >
                          {showPasswordConfirmation ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </StyledIconButton>
                      </InputAdornment>
                    ),
                  }}
                  error={!passwordsMatch()}
                  helperText={!passwordsMatch() && "Senhas não coincidem"}
                  variant="outlined"
                />

                <StyledButton
                  style={{ marginTop: "1rem" }}
                  onClick={() => {
                    if (allFieldsFilled(formData, step)) {
                      setStep(2);
                    }
                  }}
                >
                  Próximo
                </StyledButton>
              </>
            )}
            {step === 2 && (
              <>
                <Typography variant="h6">
                  Preencha seus dados pessoais:
                </Typography>
                <InputMask
                  mask="99/99/9999"
                  value={formData.user_date_of_birth}
                  onChange={handleChange}
                >
                  {(inputProps: any) => (
                    <StyledInput
                      {...inputProps}
                      label="Nascimento"
                      name="user_date_of_birth"
                      error={
                        !isAtLeastFourYearsOld(formData.user_date_of_birth) &&
                        formData.user_date_of_birth !== ""
                      }
                      helperText={
                        !isAtLeastFourYearsOld(formData.user_date_of_birth) &&
                        formData.user_date_of_birth !== ""
                          ? "Por favor, insira uma data válida. A idade deve estar entre 4 e 100 anos."
                          : ""
                      }
                    />
                  )}
                </InputMask>
                <StyledSelect
                  label="Gênero"
                  name="user_genre"
                  value={formData.user_genre}
                  onChange={handleChangeForSelect}
                >
                  <MenuItem value="MALE">Masculino</MenuItem>
                  <MenuItem value="FEMALE">Feminino</MenuItem>
                </StyledSelect>
                <StyledInput
                  label="Número de telefone"
                  type="tel"
                  name="user_phone"
                  value={formData.user_phone}
                  onChange={handleChange}
                  error={!!phoneError}
                  helperText={phoneError}
                />

                <StyledInput
                  label="RG"
                  name="user_rg"
                  value={formData.user_rg}
                  onChange={handleChange}
                  error={!!rgError}
                  helperText={rgError}
                />
                <InputMask
                  mask="999.999.999-99"
                  value={formData.user_cpf}
                  onChange={handleChange}
                >
                  {(inputProps: any) => (
                    <StyledInput
                      {...inputProps}
                      label="CPF"
                      name="user_cpf"
                      error={!isValidCPF(formData.user_cpf)}
                      helperText={
                        !isValidCPF(formData.user_cpf) ? "CPF inválido" : ""
                      }
                    />
                  )}
                </InputMask>
                <ButtonContainer>
                  <StyledButton onClick={() => setStep(1)}>Voltar</StyledButton>
                  <StyledButton
                    onClick={() => {
                      if (allFieldsFilled(formData, step)) {
                        setStep(3);
                      }
                    }}
                  >
                    Próximo
                  </StyledButton>
                </ButtonContainer>
              </>
            )}

            {step === 3 && (
              <>
                <Typography variant="h6">Preencha seu endereço:</Typography>

                <InputMask
                  mask="99999-999"
                  value={formData.address.address_zipcode}
                  onChange={handleChange}
                >
                  {(inputProps: any) => (
                    <StyledInput
                      {...inputProps}
                      label="CEP"
                      name="address.address_zipcode"
                    />
                  )}
                </InputMask>

                <StyledInput
                  label="Estado"
                  name="address.address_state"
                  value={formData.address.address_state}
                  onChange={handleChange}
                />

                <StyledInput
                  label="Cidade"
                  name="address.address_city"
                  value={formData.address.address_city}
                  onChange={handleChange}
                />

                <StyledInput
                  label="Bairro"
                  name="address.address_district"
                  value={formData.address.address_district}
                  onChange={handleChange}
                />

                <StyledInput
                  label="Rua"
                  name="address.address_street"
                  value={formData.address.address_street}
                  onChange={handleChange}
                />

                <StyledInput
                  label="Número da casa"
                  name="address.address_home_number"
                  value={formData.address.address_home_number}
                  onChange={handleChange}
                />

                <ButtonContainer>
                  <StyledButton onClick={() => setStep(2)}>Voltar</StyledButton>

                  <StyledButton
                    onClick={() => {
                      if (allFieldsFilled(formData, step)) {
                        setStep(4);
                      }
                    }}
                  >
                    Próximo
                  </StyledButton>
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
                  <StyledButton onClick={() => setStep(3)}>Voltar</StyledButton>

                  <StyledButton type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Cadastrando..." : "Finalizar cadastro"}
                  </StyledButton>
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

export default SignUp;
