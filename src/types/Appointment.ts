export type AppointmentData = {
  userId: string | undefined;
  time: string;
  isBooked: boolean;
  appointmentDetails: {
    start_time: string;
    end_time: string;
    registrant_name: string;
  };
  psychologistId: string;
};
