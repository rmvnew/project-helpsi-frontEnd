import {
  Container,
  Main,
} from "../../../components/Layout/Container/ContainerHome/styled";
import { Body } from "../../../components/Layout/Container/style";
import Header from "../../../components/Layout/Header/patient";
import {
  Button,
  CalendarContainer,
  CalendarWrapper,
  Column,
  DateLabel,
  InfoContainer,
  InfoSection,
  InfoTitle,
  InfoValue,
  Input,
  Label,
  PsychologistInfo,
  UnavailableItem,
  SchedulingContainer,
  SchedulingForm,
  Select,
  TimeLabel,
  UnavailableList,
} from "./styled";
import { getFormattedName } from "../../../common/functions/formatString";
import { Loader } from "../../../components/Layout/Loader";
import { DayWeek, formatTime } from "../../../common/functions/formatTime";
import { useSchedulingData } from "../../../hooks/useScheduling";
import { useEffect, useState } from "react";

type UnavailableSlot = {
  appointmentDetails?: {
    start_time: string;
    end_time: string;
    scheduling_id: string;
  };
};

export const Scheduling = () => {
  const {
    loading,
    formData,
    psychologists,
    unavailableSlots,
    handleChange,
    handleSubmit,
  } = useSchedulingData();

  const selectedPsy = psychologists.find(
    (psych) => psych.user_id === formData.psychologist_id
  );

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Body>
        <Header />
        <Container>
          <Main>
            {!showContent ? (
              <Loader />
            ) : loading ? (
              <Loader />
            ) : (
              <SchedulingContainer>
                <Column>
                  <SchedulingForm onSubmit={handleSubmit}>
                    <Label>
                      Selecione o Psicólogo:
                      <Select
                        name="psychologist_id"
                        value={formData.psychologist_id}
                        onChange={handleChange}
                      >
                        {psychologists.map((psych) => (
                          <option key={psych.user_id} value={psych.user_id}>
                            {psych.user_name}
                          </option>
                        ))}
                      </Select>
                    </Label>

                    <Label>
                      Escolha a Data e Hora:
                      <Input
                        type="datetime-local"
                        name="select_date_time"
                        value={formData.select_date_time}
                        onChange={handleChange}
                      />
                    </Label>

                    <Button type="submit">Confirmar Agendamento</Button>
                  </SchedulingForm>
                </Column>

                <Column>
                  {selectedPsy && (
                    <PsychologistInfo>
                      <h3>Informações do Psicólogo</h3>

                      <InfoContainer>
                        <InfoSection>
                          <InfoTitle>Nome:</InfoTitle>
                          <InfoValue>
                            {getFormattedName(selectedPsy.user_name)}
                          </InfoValue>
                        </InfoSection>

                        <InfoSection>
                          <InfoTitle>Especialidade:</InfoTitle>
                          {selectedPsy.specialtys.map((specialty) => (
                            <InfoValue key={specialty.specialty_id}>
                              {getFormattedName(specialty.specialty_name)}
                            </InfoValue>
                          ))}
                        </InfoSection>
                      </InfoContainer>

                      <CalendarContainer>
                        <h3>Horários Indisponíveis:</h3>

                        <DateLabel>
                          {DayWeek(formData.select_date_time)}
                        </DateLabel>

                        <CalendarWrapper>
                          <UnavailableList>
                            {unavailableSlots.map((slot: UnavailableSlot) => {
                              if (slot.appointmentDetails) {
                                const startTime = new Date(
                                  slot.appointmentDetails.start_time
                                );
                                const endTime = new Date(
                                  slot.appointmentDetails.end_time
                                );

                                if (
                                  startTime.toISOString().split("T")[0] ===
                                  formData.select_date_time.split("T")[0]
                                ) {
                                  return (
                                    <UnavailableItem
                                      key={
                                        slot.appointmentDetails.scheduling_id
                                      }
                                    >
                                      <TimeLabel>
                                        {formatTime(startTime)} -{" "}
                                        {formatTime(endTime)}
                                      </TimeLabel>
                                    </UnavailableItem>
                                  );
                                }
                              }
                              return null;
                            })}
                          </UnavailableList>
                        </CalendarWrapper>
                      </CalendarContainer>
                    </PsychologistInfo>
                  )}
                </Column>
              </SchedulingContainer>
            )}
          </Main>
        </Container>
      </Body>
    </>
  );
};
