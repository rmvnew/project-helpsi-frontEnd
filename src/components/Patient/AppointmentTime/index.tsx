import { useState, useEffect } from "react";
import { api } from "../../../hooks/useApi";
import { AppointmentData } from "../../../types/Appointment";
import { formatTime } from "../../../common/functions/formatTime";
import { useCurrentUser } from "../../../hooks/useCurrentUser";

import Avatar from "react-avatar";
import EventNoteIcon from "@mui/icons-material/EventNote";

import {
  Container,
  DetailsPsy,
  Hours,
  NoAppointmentsContainer,
  Psy,
} from "./styled";
import { Loader } from "../../Layout/Loader";

export const AppointmentTime: React.FC<{ date?: string }> = ({ date }) => {
  const [appointments, setAppointments] = useState<AppointmentData[]>([]);
  const [hasFetchedData, setHasFetchedData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const currentUser = useCurrentUser();
  const currentDate = date || new Date().toISOString();

  useEffect(() => {
    const getSchedule = async () => {
      setIsLoading(true);

      try {
        if (currentUser && !hasFetchedData) {
          const { data } = await api.get(`/scheduling`, {
            params: {
              patient_id: currentUser.user_id,
              start_time: currentDate,
            },
          });
          setAppointments(data.items || []);
          setHasFetchedData(true);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getSchedule();
  }, [currentDate, currentUser, hasFetchedData]);

  if (isLoading) {
    return <Loader />;
  }

  if (appointments.length === 0) {
    return (
      <NoAppointmentsContainer>
        <EventNoteIcon style={{ fontSize: 50, marginBottom: "1rem" }} />
        <p>Nenhuma consulta marcada no momento</p>
      </NoAppointmentsContainer>
    );
  }

  return (
    <>
      {appointments.map((appointmentData) => {
        const { start_time, end_time } = appointmentData;

        return (
          <Container>
            <Hours>
              <h3>{new Date(start_time).toLocaleDateString()}</h3>
              <span>Horário da consulta</span>
              <span style={{ fontFamily: "sans-serif" }}>{`${formatTime(
                start_time
              )} á ${formatTime(end_time)}`}</span>
            </Hours>
            <Psy>
              <DetailsPsy>
                <span>{"Nome do psicologo"}</span>
                <span style={{ fontFamily: "sans-serif", textAlign: "end" }}>
                  {"Especialidade"}
                </span>
              </DetailsPsy>
              <Avatar size="40" round alt="Foto de perfil" name={"Psicologo"} />
            </Psy>
          </Container>
        );
      })}
    </>
  );
};
