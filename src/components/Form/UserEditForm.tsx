import React, { useState } from "react";
import { FormWrapper, StyledInput, StyledSelect, SubmitButton } from "./styled";
import { toast } from "react-toastify";
import { validateDate } from "../../common/utils/validade";
import { UserFormProps } from "../../interface/user.form.interface";
import { formatDate } from "../../common/functions/formatString";

const UserEditForm: React.FC<UserFormProps> = ({
  handleSubmit,
  profiles,
  initialValues,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    user_name: initialValues?.user_name || "",
    user_email: initialValues?.user_email || "",
    user_profile_id: initialValues?.user_profile_id || 0,
    user_date_of_birth: initialValues?.user_date_of_birth
      ? formatDate(initialValues.user_date_of_birth)
      : "",
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
      <StyledSelect
        name="user_profile_id"
        value={formData.user_profile_id}
        onChange={localHandleInputChange}
      >
        {profiles.map((profile) => (
          <option key={profile.profile_id} value={profile.profile_id}>
            {profile.profile_name}
          </option>
        ))}
      </StyledSelect>
      <SubmitButton type="submit">Confirmar</SubmitButton>
    </FormWrapper>
  );
};

export default UserEditForm;
