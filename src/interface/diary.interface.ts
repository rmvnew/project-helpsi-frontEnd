import { PatientDetailsInterface } from "./patientDetails.interface";

export interface DiaryEntry {
  is_active: boolean;
  create_at: string;
  update_at: string;
  diary_entry_id: string;
  register_date: string;
  text: string;
  patient_details: PatientDetailsInterface;
}
