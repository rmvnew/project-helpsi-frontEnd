import { Address } from "./address.interface";
import { Psychologist } from "./psychologist.interface";
import { Specialty } from "./specialty.interface";


export interface User {
  address: Address;
  basicPsychologist: Psychologist;
  create_at: string;
  google_picture: string | null;
  user_profile_id?: number;
  update_at: string;
  user_cpf: string;
  user_crp: string | null;
  user_date_of_birth: string;
  user_email: string;
  user_enrollment: string;
  user_genre: string;
  user_id: string;
  user_name: string;
  user_phone: string;
  user_rg: string;
  user_status: boolean;
  specialtys: Specialty[];
}