import React, { useState } from "react";
import { FormWrapper, StyledInput, StyledSelect, SubmitButton } from "./styled";
import { toast } from "react-toastify";
import { validateDate } from "../../common/utils/validade";
import { UserFormProps } from "../../interface/user.form.interface";
import { formatDate } from "../../common/functions/formatString";
import { useTranslation } from "react-i18next";
import "../../i18next/ProfileList";

const UserEditForm: React.FC<UserFormProps> = ({
  handleSubmit,
  profiles,
  initialValues,
  onClose,
}) => {
  const { t } = useTranslation();

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
  });

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
      <StyledInput
        name="user_name"
        value={formData.user_name}
        onChange={localHandleInputChange}
        placeholder="Nome do Usuário"
      />
      <StyledInput
        name="user_email"
        value={formData.user_email}
        onChange={localHandleInputChange}
        placeholder="Email"
      />
      <StyledInput
        name="user_date_of_birth"
        value={formData.user_date_of_birth}
        onChange={localHandleInputChange}
        placeholder="Nascimento (DD/MM/YYYY)"
      />
      <StyledInput
        name="user_phone"
        value={formData.user_phone}
        onChange={localHandleInputChange}
        placeholder="Telefone"
      />
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
      <SubmitButton type="submit">Confirmar</SubmitButton>
    </FormWrapper>
  );
};

export default UserEditForm;
