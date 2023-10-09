import React from "react";
import { Body } from "../../../components/Layout/Container/style";
import Header from "../../../components/Layout/Header/patient";
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


export const Schedule: React.FC = () => {
  const timeSlots = [
    { time: "08:00", patient: "", status: "" },
    { time: "09:00", patient: "", status: "" },
    { time: "10:00", patient: "", status: "" },
    { time: "11:00", patient: "", status: "" },
    { time: "11:00", patient: "Ronald Ferreira", status: "green" },
    { time: "12:00", patient: "", status: "" },
    { time: "13:00", patient: "", status: "" },
    { time: "14:00", patient: "Darlene Pereira", status: "green" },
    { time: "15:00", patient: "", status: "" },
    { time: "16:00", patient: "Carlos Pereira", status: "red" },
    { time: "17:00", patient: "", status: "" },
  ];
  return (
    <Body>
      <Header />
      <Container>
        <HeaderText>Minha Agenda</HeaderText>

        <ScheduleWrapper>
          <DateText>Sexta-feira, 29 de setembro</DateText>
          {timeSlots.map((slot, index) => (
            <TimeSlot key={index}>
              <TimeText>{slot.time}</TimeText>

              <PatientName  hasName={!!slot.patient}>
                {slot.patient && <Dot color={slot.status} />} {slot.patient}
              </PatientName>
            </TimeSlot>
          ))}
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
