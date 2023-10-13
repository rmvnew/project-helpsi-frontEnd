import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { SignUpInterface } from "../interface/signup.interface";
import { api } from "./useApi";

export const useSignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<SignUpInterface>({
    user_name: "",
    user_email: "",
    user_password: "",
    user_password_confirmation: "",
    user_date_of_birth: "",
    user_phone: "",
    psychologist_id: '',
    user_genre: "",
    user_rg: "",
    user_cpf: "",
    address: {
      address_zipcode: "",
      address_state: "",
      address_city: "",
      address_district: "",
      address_street: "",
      address_home_number: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const signUpUser = useCallback(() => {
    api
      .post(`/user/patient/public`, formData)
      .then((response) => {
        const message =
          response.data.message ?? "Cadastro realizado com sucesso";
        toast.success(message);
        navigate("/");
      })
      .catch((error) => {
        const message = error.response.data.message ?? "Erro ao cadastrar";
        toast.error(message);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }, [formData, navigate]);

  useEffect(() => {
    if (!isSubmitting) return;
    signUpUser();
  }, [isSubmitting, signUpUser]);

  return {
    formData,
    setFormData,
    isSubmitting,
    setIsSubmitting,
  };
};
