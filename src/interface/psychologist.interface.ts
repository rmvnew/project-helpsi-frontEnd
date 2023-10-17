import { Specialty } from "./specialty.interface";
import { User } from "./user.interface";

export interface Psychologist {
  user_id: string;
  user_name: string;
  user_email: string;
  user_status: boolean;
  user_date_of_birth: string; 
  user_phone: string;
  user_enrollment: string;
  user_profile_id: number;
  user_crp: string | null;
  create_at: string; 
  update_at: string; 
  patients: User[];
  specialtys: Specialty[];
}
