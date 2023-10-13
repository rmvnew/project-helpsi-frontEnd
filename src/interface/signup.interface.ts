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

interface Address {
  address_zipcode: string;
  address_state: string;
  address_city: string;
  address_district: string;
  address_street: string;
  address_home_number: string;
}
