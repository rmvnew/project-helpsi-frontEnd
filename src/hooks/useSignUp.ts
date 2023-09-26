import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { SignUpInterface } from "../interface/signup.interface";
import { api } from "./useApi";

export const useSignUpLogic = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<SignUpInterface>({
    user_name: "",
    user_email: "",
    user_password: "",
    user_password_confirmation: "",
    user_date_of_birth: "",
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
