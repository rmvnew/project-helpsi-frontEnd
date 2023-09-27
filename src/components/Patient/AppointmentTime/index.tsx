import React, { useState, useEffect } from "react";
import Avatar from "react-avatar";
import { api } from "../../../hooks/useApi";
import { useAllPsychologists } from "../../../hooks/useAllPsychologists";
import { Container, DetailsPsy, Hours, Psy } from "./styled";
import { AppointmentData } from "../../../types/Appointment";
import { formatTime } from "../../../common/functions/formatTime";

export const AppointmentTime: React.FC<{ date?: string }> = ({ date }) => {
  const [appointments, setAppointments] = useState<AppointmentData[]>([]);
  const psychologists = useAllPsychologists();
  const currentDate = date || new Date().toISOString().split("T")[0];

  useEffect(() => {
    const getSchedule = async () => {
      try {
        const { data } = await api.get(
          `/scheduling/availability?date=${currentDate}`
        );
        setAppointments(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getSchedule();
  }, [currentDate]);

  const getPsychologistNameById = (id: string): string => {
    const found = psychologists.find((p) => p.user_id === id);
    return found ? found.user_name : "Desconhecido";
  };

  if (appointments.length === 0) {
    return <div>Nenhuma consulta marcada no momento</div>;
  }

  return (
    <>
      {appointments.map((appointmentData) => {
        if (!appointmentData.appointmentDetails) return null;

        const { start_time, end_time } = appointmentData.appointmentDetails;
        const appointmentId = `${start_time}-${end_time}`;

        return (
          <Container key={appointmentId}>
            <Hours>
              <h3>{new Date(start_time).toLocaleDateString()}</h3>
              <span>Horário da consulta</span>
              <span style={{ fontFamily: "sans-serif" }}>{`${formatTime(
                start_time
              )} á ${formatTime(end_time)}`}</span>
            </Hours>
            <Psy>
              <DetailsPsy>
                <span>
                  {getPsychologistNameById(appointmentData.psychologistId)}
                </span>
                <span style={{ fontFamily: "sans-serif", textAlign: "end" }}>
                  Psicólogo
                </span>
              </DetailsPsy>
              <Avatar
                size="40"
                round
                alt="Foto de perfil"
                name={getPsychologistNameById(appointmentData.psychologistId)}
              />
            </Psy>
          </Container>
        );
      })}
    </>
  );
};
