import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { SignUpInterface } from "../interface/signup.interface";
import { api } from "./useApi";
import { AxiosError } from "axios";
import { ErrorResponse } from "../interface/error.interface";

export const useSignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<SignUpInterface>({
    user_name: "",
    user_email: "",
    user_password: "",
    user_password_confirmation: "",
    user_date_of_birth: "",
    user_phone: "",
    psychologist_id: "",
    user_genre: "MALE",
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

  const signUpUser = useCallback(async () => {
    setIsSubmitting(true);
    try {
      const response = await api.post(`/user/patient/public`, formData);
      const message = response.data.message ?? "Cadastro realizado com sucesso";
      toast.success(message);
      navigate("/");
    } catch (error) {
      handleError(error);
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, navigate]);

  const handleError = (error: unknown) => {
    const axiosErr = error as AxiosError<ErrorResponse>;

    let errorMessage = "Erro ao cadastrar";
    if (
      axiosErr?.response?.data?.message &&
      Array.isArray(axiosErr.response.data.message)
    ) {
      errorMessage = axiosErr.response.data.message.join("\n");
    } else if (typeof axiosErr?.response?.data?.message === "string") {
      errorMessage = axiosErr.response.data.message;
    }

    console.error("Detalhes do erro:", axiosErr.response || error);
    toast.error(errorMessage);
  };

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
