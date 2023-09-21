import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { SignUpInterface } from "../interface/signup.interface";


export const useSignUpLogic = () => {
  const navigate = useNavigate();
  const api = process.env.REACT_APP_API_BASE_URL;

  const [formData, setFormData] = useState<SignUpInterface>({
    user_name: "",
    user_email: "",
    user_password: "",
    user_password_confirmation: "",
    user_date_of_birth: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const signUpUser = useCallback(() => {
    axios
      .post(`${api}/user/patient/public`, formData)
      .then((response) => {
        const message =
          response.data.message ?? "Cadastro realizado com sucesso";
        toast.success(message);
        navigate("/signin");
      })
      .catch((error) => {
        const message = error.response.data.message ?? "Erro ao cadastrar";
        toast.error(message);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }, [api, formData, navigate]);

  useEffect(() => {
    if (!isSubmitting) return;
    signUpUser();
  }, [isSubmitting, signUpUser]);

  return {
    formData,
    setFormData,
    isSubmitting,
    setIsSubmitting
  };
};
