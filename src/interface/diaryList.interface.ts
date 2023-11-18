export interface DiaryListInterface {
  is_active: boolean;
  create_at: string;
  update_at: string;
  diary_entry_id: string;
  register_date: string;
  text: string;
  patient_details: {
    patient_details_id: string;
    start_date: string;
    consultation_reason: string;
    previous_diagnosis: string | null;
    diagnosis: string;
    session_frequency: string;
    last_session_date: string | null;
    current_status: string;
    user: {
      user_id: string;
      user_name: string;
    };
  };
}
