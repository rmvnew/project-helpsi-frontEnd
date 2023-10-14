import { Address } from "./address.interface";

export interface SignUpInterface {
  user_name: string;
  user_email: string;
  user_password: string;
  user_password_confirmation: string;
  user_date_of_birth: string;
  user_phone: string;
  psychologist_id: string;
  user_genre: "MALE" | "FEMALE" | "";
  user_rg: string;
  user_cpf: string;
  address: Address;
}
