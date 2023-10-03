export type AppointmentData = {
  scheduling_id: string;
  start_time: string;
  end_time: string;
  registrant_name: string;
  create_at: string;
  update_at: string;
  isCancelled: boolean;

  currentPsychologist: {
    user_id: string;
    user_name: string;
    user_email: string;
    google_picture: null | string;
    user_phone: null | string;
    user_crp: null | string;
  };

  currentPatient: {
    user_id: string;
    user_name: string;
    user_email: string;
    user_genre: null | string;
    user_phone: null | string;
    create_at: string;
    update_at: string;
  };
};
