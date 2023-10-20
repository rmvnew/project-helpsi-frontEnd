import React, { useEffect, useState } from "react";
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
} from "./styled";
import { toast } from "react-toastify";
import { validateDate } from "../../common/utils/validade";
import { formatDate } from "../../common/functions/formatDate";
import { useTranslation } from "react-i18next";
import "../../i18next/ProfileList";
import { UserFormProps } from "../../types/UserForm";
import { FormControl } from "@mui/material";

const UserEditForm: React.FC<UserFormProps> = ({
  handleSubmit,
  profiles,
  initialValues,
  onClose,
  specialties,
}) => {
  const { t } = useTranslation();
  const [showSpecialties, setShowSpecialties] = useState(false);

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
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
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
            placeholder="Usuário"
          />
          <StyledInput
            name="user_date_of_birth"
            value={formData.user_date_of_birth}
            onChange={localHandleInputChange}
            placeholder="Nascimento"
          />
          <StyledSelect
            name="user_genre"
            value={formData.user_genre}
            onChange={localHandleInputChange}
          >
            <option value="FEMALE">Feminino</option>
            <option value="MALE">Masculino</option>
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
            placeholder="RG"
          />
          <StyledInput
            name="user_cpf"
            value={formData.user_cpf}
            onChange={localHandleInputChange}
            placeholder="CPF"
          />
          <StyledInput
            name="user_crp"
            value={formData.user_crp}
            onChange={localHandleInputChange}
            placeholder="CRP"
          />
        </FlexContainer>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>Contato</SectionTitle>
        <FlexContainer>
          <StyledInput
            name="user_email"
            value={formData.user_email}
            onChange={localHandleInputChange}
            placeholder="Email"
          />
          <StyledInput
            name="user_phone"
            value={formData.user_phone}
            onChange={localHandleInputChange}
            placeholder="Telefone"
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
