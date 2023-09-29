export type AppointmentData = {
  scheduling_id: string;
  start_time: string;
  end_time: string;
  registrant_name: string;
  create_at: string;
  update_at: string;
  isCancelled: boolean;
  psychologistId?: string;
};
