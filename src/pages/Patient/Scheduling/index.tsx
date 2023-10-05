import { Container } from "../../../components/Layout/Container/ContainerHome/styled";
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
  SchedulingContainer,
  SchedulingForm,
  Select,
} from "./styled";
import { getFormattedName } from "../../../common/functions/formatString";
import { Loader } from "../../../components/Layout/Loader";
import { DayWeek } from "../../../common/functions/formatTime";

import { useEffect, useState } from "react";
import { useSchedulingData } from "../../../hooks/useSchedulingData";
import UnavailableTimeList from "../../../components/Patient/UnavailableList";

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
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Body>
        <Header />
        <Container>
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
                        <UnavailableTimeList
                          slots={unavailableSlots}
                          selectedDateTime={formData.select_date_time}
                        />
                      </CalendarWrapper>
                    </CalendarContainer>
                  </PsychologistInfo>
                )}
              </Column>
            </SchedulingContainer>
          )}
        </Container>
      </Body>
    </>
  );
};
