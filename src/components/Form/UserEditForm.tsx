import React, { ChangeEvent, useEffect, useState } from "react";
import {
  FlexContainer,
  FormWrapper,
  SectionTitle,
  SectionWrapper,
  StyledCheckbox,
  StyledFormControlLabel,
  StyledFormGroup,
  StyledInput,
  StyledSelect,
  SubmitButton,
} from "./adminForm";
import { toast } from "react-toastify";
import {
  isAtLeastFourYearsOld,
  isValidCPF,
  validateDate,
} from "../../common/utils/validade";
import { formatDate } from "../../common/functions/formatDate";
import { useTranslation } from "react-i18next";
import "../../i18next/ProfileList";
import { UserFormProps } from "../../types/UserForm";
import { FormControl } from "@mui/material";
import InputMask from "react-input-mask";

const UserEditForm: React.FC<UserFormProps> = ({
  handleSubmit,
  profiles,
  initialValues,
  onClose,
  specialties,
}) => {
  const { t } = useTranslation();
  const [showSpecialties, setShowSpecialties] = useState(false);
  const [rgError, setRgError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    user_name: initialValues?.user_name || "",
    user_email: initialValues?.user_email || "",
    user_profile_id: initialValues?.user_profile_id || 0,
    user_date_of_birth: initialValues?.user_date_of_birth
      ? formatDate(initialValues.user_date_of_birth)
      : "",
    user_phone: initialValues?.user_phone || "",
    user_rg: initialValues?.user_rg || "",
    user_cpf: initialValues?.user_cpf || "",
    user_crp: initialValues?.user_crp || "",
    user_genre: initialValues?.user_genre || "",
    specialtys: initialValues?.specialtys || [],
  });

  const PSYCHOLOGIST_PROFILE_ID = 3;

  useEffect(() => {
    if (formData.user_profile_id === PSYCHOLOGIST_PROFILE_ID) {
      setShowSpecialties(true);
    } else {
      setShowSpecialties(false);
    }
  }, [formData.user_profile_id]);

  const handleSpecialtyChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, checked } = event.target;
    if (checked) {
      setFormData((prevData) => ({
        ...prevData,
        specialtys: [
          ...prevData.specialtys,
          { specialty_id: name, specialty_name: "" },
        ],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        specialtys: prevData.specialtys.filter(
          (specialty) => specialty.specialty_id !== name
        ),
      }));
    }
  };

  const localHandleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
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
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const localHandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      formData.user_date_of_birth &&
      !validateDate(formData.user_date_of_birth)
    ) {
      toast.info(
        "Por favor, insira sua data de nascimento no formato correto: DD/MM/YYYY."
      );
      return;
    }

    const result = handleSubmit(formData);

    if (result !== undefined && result !== false) {
      if (onClose) {
        onClose();
      }
    }
  };

  return (
    <FormWrapper onSubmit={localHandleSubmit}>
      <SectionWrapper>
        <SectionTitle>Informações Pessoais</SectionTitle>
        <FlexContainer>
          <StyledInput
            name="user_name"
            value={formData.user_name}
            onChange={localHandleInputChange}
            label="Nome completo"
          />
          <InputMask
            mask="99/99/9999"
            value={formData.user_date_of_birth}
            onChange={localHandleInputChange}
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
            name="user_genre"
            value={formData.user_genre}
            onChange={localHandleInputChange}
          >
            <option value="FEMALE">Feminino</option>
            <option value="MALE">Masculino</option>
            <option value="NON_BINARY">Não-Binário </option>
            <option value="OTHER">Outro</option>
          </StyledSelect>
        </FlexContainer>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>Documentação</SectionTitle>
        <FlexContainer>
          <StyledInput
            name="user_rg"
            value={formData.user_rg}
            onChange={localHandleInputChange}
            label="RG"
            error={!!rgError}
            helperText={rgError}
          />
          <InputMask
            mask="999.999.999-99"
            value={formData.user_cpf}
            onChange={localHandleInputChange}
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
          <InputMask
            mask="99999/9-9"
            value={formData.user_crp}
            onChange={localHandleInputChange}
          >
            {(inputProps: any) => (
              <StyledInput {...inputProps} label="CRP" name="user_crp" />
            )}
          </InputMask>
        </FlexContainer>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>Contato</SectionTitle>
        <FlexContainer>
          <StyledInput
            name="user_email"
            value={formData.user_email}
            onChange={localHandleInputChange}
            label="Email"
          />
          <StyledInput
            name="user_phone"
            value={formData.user_phone}
            onChange={localHandleInputChange}
            label="Telefone"
            error={!!phoneError}
            helperText={phoneError}
          />
        </FlexContainer>
      </SectionWrapper>
      <SectionWrapper>
        <SectionTitle>Detalhes Profissionais</SectionTitle>

        <StyledSelect
          name="user_profile_id"
          value={formData.user_profile_id}
          onChange={localHandleInputChange}
        >
          {profiles.map((profile) => (
            <option key={profile.profile_id} value={profile.profile_id}>
              {t(profile.profile_name)}
            </option>
          ))}
        </StyledSelect>

        {showSpecialties && (
          <FormControl component="fieldset">
            <StyledFormGroup>
              {specialties.map((specialty) => (
                <StyledFormControlLabel
                  control={
                    <StyledCheckbox
                      checked={formData.specialtys.some(
                        (s) => s.specialty_id === specialty.specialty_id
                      )}
                      onChange={handleSpecialtyChange}
                      name={specialty.specialty_id}
                    />
                  }
                  label={specialty.specialty_name}
                />
              ))}
            </StyledFormGroup>
          </FormControl>
        )}
      </SectionWrapper>

      <SubmitButton type="submit">Confirmar</SubmitButton>
    </FormWrapper>
  );
};

export default UserEditForm;
