import { useCallback } from "react";
import { toast } from "react-toastify";
import { SignUpInterface } from "../interface/signup.interface";
import { validateDate } from "../common/utils/validade";

export const useFormValidation = (
  formData: SignUpInterface,
  setIsSubmitting: (value: boolean) => void
) => {
  const displayError = useCallback(
    (message: string) => {
      toast.error(message);
      setIsSubmitting(false);
    },
    [setIsSubmitting]
  );

  const validateForm = useCallback(() => {
    const arePasswordsEqual = () =>
      formData.user_password === formData.user_password_confirmation;

    if (!arePasswordsEqual()) {
      displayError("Senhas não são iguais!");
      return false;
    }

    if (
      !formData.user_date_of_birth ||
      !validateDate(formData.user_date_of_birth)
    ) {
      displayError(
        "Por favor, insira sua data de nascimento no formato correto: DD/MM/YYYY."
      );
      return false;
    }

    return true;
  }, [
    formData.user_date_of_birth,
    formData.user_password,
    formData.user_password_confirmation,
    displayError,
  ]);

  return {
    validateForm,
    displayError,
  };
};
