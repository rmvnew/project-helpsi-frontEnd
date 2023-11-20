export interface PatientDetailsInterface {
  patient_details_id: string;
  start_date: string;
  consultation_reason: string | null;
  previous_diagnosis: string | null;
  diagnosis: string | null;
  session_frequency: string;
  current_status: string;
  patient_id: string;
}
