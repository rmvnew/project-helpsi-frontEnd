import React from "react";
import { TimeLabel, UnavailableItem, UnavailableList } from "../../pages/Patient/Scheduling/styled";
import { formatTime } from "../../common/functions/formatTime";


type UnavailableSlot = {
  time: string;
  isBooked: boolean;
  appointmentDetails: {
    start_time: string;
    end_time: string;
    scheduling_id: string;
  };
  psychologistId?: string;
};

type Props = {
  slots: UnavailableSlot[];
  selectedDateTime: string;
};

const UnavailableTimeList: React.FC<Props> = ({ slots, selectedDateTime }) => {
  const selectedDateTimeLocal = new Date(selectedDateTime).toLocaleDateString();

  return (
    <UnavailableList>
      {slots.map((slot) => {
        if (slot.isBooked && slot.appointmentDetails) {
          const startTime = new Date(slot.appointmentDetails.start_time);
          const endTime = new Date(slot.appointmentDetails.end_time);

          if (startTime.toLocaleDateString() === selectedDateTimeLocal) {
            return (
              <UnavailableItem key={slot.appointmentDetails.scheduling_id}>
                <TimeLabel>
                  {formatTime(startTime)} - {formatTime(endTime)}
                </TimeLabel>
              </UnavailableItem>
            );
          }
        }
        return null;
      })}
    </UnavailableList>
  );
};

export default UnavailableTimeList;
