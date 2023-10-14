import { Specialty } from "./specialty.interface";

export interface Psychologist {
  user_id: string;
  user_name: string;
  specialtys: Specialty[];
}
