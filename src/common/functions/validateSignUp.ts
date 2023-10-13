import { toast } from "react-toastify";

type FormData = {
  user_name?: string;
  user_email?: string;
  user_password?: string;
  user_password_confirmation?: string;
  user_date_of_birth?: string;
  user_genre?: string;
  user_phone?: string;
  user_rg?: string;
  user_cpf?: string;
  address?: {
    address_zipcode?: string;
    address_state?: string;
    address_city?: string;
    address_district?: string;
    address_street?: string;
    address_home_number?: string;
  };
  psychologist_id?: string;
};

export const allFieldsFilled = (formData: FormData, step: number): boolean => {
  switch (step) {
    case 1:
      if (
        !formData.user_name ||
        !formData.user_email ||
        !formData.user_password ||
        !formData.user_password_confirmation
      ) {
        toast.error("Preencha todos os campos antes de prosseguir.");
        return false;
      }
      break;

    case 2:
      if (
        !formData.user_date_of_birth ||
        !formData.user_genre ||
        !formData.user_phone ||
        !formData.user_rg ||
        !formData.user_cpf
      ) {
        toast.error("Preencha todos os campos antes de prosseguir.");
        return false;
      }
      break;

    case 3:
      if (
        !formData.address?.address_zipcode ||
        !formData.address?.address_state ||
        !formData.address?.address_city ||
        !formData.address?.address_district ||
        !formData.address?.address_street ||
        !formData.address?.address_home_number
      ) {
        toast.error("Preencha todos os campos antes de prosseguir.");
        return false;
      }
      break;

    case 4:
      if (!formData.psychologist_id) {
        toast.error("Selecione um psicólogo antes de prosseguir.");
        return false;
      }
      break;

    default:
      break;
  }

  return true;
};
