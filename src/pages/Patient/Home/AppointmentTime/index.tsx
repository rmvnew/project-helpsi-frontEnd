import React from "react";
import Avatar from "react-avatar";
import EventNoteIcon from "@mui/icons-material/EventNote";
import { toast } from "react-toastify";
import useAppointments from "../../../../hooks/useAppointments";
import { useCurrentUser } from "../../../../hooks/useCurrentUser";
import { formatTimeString } from "../../../../common/functions/formatTime";
import { DateParms } from "../../../../common/functions/formatString";
import {
  Container,
  DateDisplay,
  DetailsPsy,
  Hours,
  NoAppointmentsContainer,
  Psy,
  PsyName,
  PsyPhone,
  TimeLabel,
  TimeSlot,
} from "./styled";

export const AppointmentTime: React.FC<{ date?: string }> = ({ date }) => {
  const currentUser = useCurrentUser();
  const { appointments, isLoading, error } = useAppointments(
    currentUser?.user_id || "",
    date || DateParms
  );

  if (error) {
    toast.error(`Error: ${error}`);
    return null;
  }

  if (appointments.length === 0 || !currentUser?.user_id) {
    return (
      <NoAppointmentsContainer>
        <EventNoteIcon style={{ fontSize: 30, marginBottom: "1rem" }} />
        <p>Nenhuma consulta marcada no momento</p>
      </NoAppointmentsContainer>
    );
  }

  return (
    <>
      {appointments.map(
        ({ scheduling_id, start_time, end_time, currentPsychologist }) => (
          <Container key={scheduling_id}>
            <Hours>
              <DateDisplay>
                {new Date(start_time).toLocaleDateString()}
              </DateDisplay>
              <TimeLabel>Horário da consulta</TimeLabel>
              <TimeSlot>
                {`${formatTimeString(start_time)} - ${formatTimeString(
                  end_time
                )}`}
              </TimeSlot>
            </Hours>
            <Psy>
              <DetailsPsy>
                <PsyName>{currentPsychologist.user_name}</PsyName>
                <PsyPhone>{currentPsychologist.user_phone}</PsyPhone>
              </DetailsPsy>
              <Avatar
                size="40"
                round
                alt="Foto de perfil"
                name={currentPsychologist.user_name}
              />
            </Psy>
          </Container>
        )
      )}
    </>
  );
};
