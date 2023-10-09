import React from "react";
import { Body } from "../../../components/Layout/Container/style";
import Header from "../../../components/Layout/Header/psy";
import {
  HeaderText,
  DateText,
  ScheduleWrapper,
  Container,
  TimeText,
  Legend,
  LegendItem,
  LegendCircle,
  TimeSlot,
  PatientName,
  Dot,
} from "./styled";
import { useCurrentUser } from "../../../hooks/useCurrentUser";
import { toast } from "react-toastify";
import {
  DateParms,
  getCurrentFormattedDate,
  getNextDay,
} from "../../../common/functions/formatString";
import { formatTimeString } from "../../../common/functions/formatTime";
import useSchedule from "../../../hooks/useSchedule";

export const Schedule: React.FC<{ date?: string }> = ({ date }) => {
  const currentUser = useCurrentUser();
  const { appointments, error } = useSchedule(
    currentUser?.user_id || "",
    date || DateParms,
    getNextDay(date || DateParms)
  );

  if (error) {
    toast.error(`Error: ${error}`);
    return null;
  }

  function generateTimeSlots() {
    const timeSlots = [];
    for (let hour = 8; hour <= 17; hour++) {
      const time = `${hour}:00`;
      timeSlots.push(time);
    }
    return timeSlots;
  }

  const timeSlots = generateTimeSlots();

  return (
    <Body>
      <Header />
      <Container>
        <HeaderText>Minha Agenda</HeaderText>
        <ScheduleWrapper>
          <DateText>{getCurrentFormattedDate()}</DateText>

          {timeSlots.map((timeSlot) => {
            const appointment = appointments.find(
              (app) => formatTimeString(app.start_time) === timeSlot
            );

            return (
              <TimeSlot key={timeSlot}>
                <TimeText>{timeSlot}</TimeText>

                {appointment &&
                appointment.currentPatient &&
                appointment.currentPatient.user_name ? (
                  <PatientName hasName={!!appointment.currentPatient}>
                    {appointment.currentPatient.user_name && (
                      <Dot color="#00ff00" />
                    )}
                    {appointment.currentPatient.user_name}
                  </PatientName>
                ) : (
                  <span></span>
                )}
              </TimeSlot>
            );
          })}
        </ScheduleWrapper>
        <Legend>
          <LegendItem>
            <LegendCircle color="#ff0000" />
            Cancelado
          </LegendItem>
          <LegendItem>
            <LegendCircle color="#ffff00" />
            Pendente
          </LegendItem>
          <LegendItem>
            <LegendCircle color="#00ff00" />
            Confirmado
          </LegendItem>
        </Legend>
      </Container>
    </Body>
  );
};
