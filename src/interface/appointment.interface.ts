
import { User } from "./user.interface";

export interface AppointmentData {
    scheduling_id: string;
    start_time: string;
    end_time: string;
    registrant_name: string;
    create_at: string;
    update_at: string;
    isCancelled: boolean;
    currentPsychologist: User;
    currentPatient: User;
  }