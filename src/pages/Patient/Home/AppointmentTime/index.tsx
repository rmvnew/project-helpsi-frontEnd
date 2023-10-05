import React from "react";
import Avatar from "react-avatar";
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
import { Link } from "react-router-dom";
import { Empty, Button } from "antd";

export const AppointmentTime: React.FC<{ date?: string }> = ({ date }) => {
  const currentUser = useCurrentUser();
  const { appointments, error } = useAppointments(
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
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="Nenhuma consulta marcada no momento"
        />
        <Link to="/scheduling">
          <Button
            type="primary"
            style={{ marginTop: "1rem", backgroundColor: "#9fdfae" }}
          >
            Agendar
          </Button>
        </Link>
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
