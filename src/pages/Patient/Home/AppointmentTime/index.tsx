import React from "react";
import { toast } from "react-toastify";
import useAppointments from "../../../../hooks/useAppointments";
import { useCurrentUser } from "../../../../hooks/useCurrentUser";
import { formatTimeString } from "../../../../common/functions/formatTime";
import { DateParms } from "../../../../common/functions/formatDate";
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

import { Empty } from "antd";
import {
  SkeletonCircle,
  SkeletonColumn,
  SkeletonColumnEnd,
  SkeletonContainer,
  SkeletonDate,
  SkeletonPhone,
  SkeletonTextLong,
  SkeletonTextShort,
} from "../../../../components/Layout/Loader/Skeleton/AppointmentTime";
import { getFormattedName } from "../../../../common/functions/formatString";

export const AppointmentTime: React.FC<{ date?: string }> = ({ date }) => {
  const currentUser = useCurrentUser();
  const { appointments, error, isLoading } = useAppointments(
    currentUser?.user_id || "",
    date || DateParms
  );

  if (isLoading) {
    return (
      <SkeletonContainer>
        <SkeletonColumn>
          <SkeletonDate variant="text" />
          <SkeletonTextShort variant="text" />
          <SkeletonTextLong variant="text" />
        </SkeletonColumn>
        <SkeletonColumnEnd>
          <SkeletonTextLong variant="text" />
          <SkeletonCircle variant="rectangular" />
          <SkeletonPhone variant="text" />
        </SkeletonColumnEnd>
      </SkeletonContainer>
    );
  }

  if (error) {
    toast.error(`Error: ${error}`);
    return null;
  }

  if (appointments.length === 0 && currentUser?.user_id) {
    return (
      <NoAppointmentsContainer>
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="Nenhuma consulta marcada no momento"
        />
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
                {`${formatTimeString(start_time)} até ${formatTimeString(
                  end_time
                )}`}
              </TimeSlot>
            </Hours>
            <Psy>
              <DetailsPsy>
                <span>Psicólogo</span>
                <PsyName>
                  {getFormattedName(currentPsychologist.user_name)}
                </PsyName>
                <PsyPhone>{currentPsychologist.user_phone}</PsyPhone>
              </DetailsPsy>
            </Psy>
          </Container>
        )
      )}
    </>
  );
};
