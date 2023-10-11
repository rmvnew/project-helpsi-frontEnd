import { useEffect, useState } from "react";
import { useSchedulingData } from "../../../hooks/useSchedulingData";
import {
  Button,
  Column,
  Input,
  Label,
  SchedulingContainer,
  SchedulingForm,
} from "./styled";
import { getFormattedName } from "../../../common/functions/formatString";

import {
  Checkbox,
  FormControlLabel,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { Body } from "../../../components/Layout/Container/style";
import Header from "../../../components/Layout/Header/patient";
import { Container } from "../../../components/Layout/Container/ContainerHome/styled";
import SchedulingSkeleton from "../../../components/Layout/Loader/Skeleton/SchedulingSkeleton";

export const Scheduling = () => {
  const {
    formData,
    psychologists,
    unavailableSlots,
    handleChange,
    handleSubmit,
    loading,
  } = useSchedulingData();

  const [step, setStep] = useState(1);
  const [timeOfDay, setTimeOfDay] = useState<"morning" | "afternoon" | null>(
    null
  );
  const [showSkeleton, setShowSkeleton] = useState(true);

  const getTimeSlots = () => {
    if (timeOfDay === "morning") {
      return Array.from(
        { length: 5 },
        (_, i) => `${(8 + i).toString().padStart(2, "0")}:00`
      );
    } else if (timeOfDay === "afternoon") {
      return Array.from(
        { length: 5 },
        (_, i) => `${(13 + i).toString().padStart(2, "0")}:00`
      );
    } else {
      return [];
    }
  };

  const timeSlots = getTimeSlots();

  const isTimeUnavailable = (time: string) => {
    const combinedDateTimeCheck = `${formData.select_date}T${time}:00.000Z`;
    const slot = unavailableSlots.find(
      (slot) => slot.time === combinedDateTimeCheck
    );
    return slot?.isBooked || false;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading || showSkeleton) {
    return <SchedulingSkeleton />;
  }

  return (
    <Body>
      <Header />
      <Container>
        <SchedulingContainer>
          <Column>
            <SchedulingForm onSubmit={handleSubmit}>
              {step === 1 && (
                <>
                  <Label>Determine o tipo de psicólogo que atende suas necessidades:</Label>
                  {psychologists.map((psych) => (
                    <div key={psych.user_id}>
                      <FormControlLabel
                        control={
                          <Checkbox checked={psych.user_id === formData.psychologist_id} 
                          onChange={handleChange} 
                          name="psychologist_id"
                          value={psych.user_id}
                          />
                        }
                        label={`${getFormattedName( psych.user_name )} - ${psych.specialtys 
                          .map((specialty) => getFormattedName(specialty.specialty_name))
                          .join(", ")}`}
                      />
                    </div>
                  ))}
                  <Button type="button" onClick={() => setStep(2)}>
                    Próximo
                  </Button>
                </>
              )}

              {step === 2 && (
                <>
                  <Label>Para qual dia você quer agendar?</Label>
                  <Input
                    type="date"
                    name="select_date"
                    value={formData.select_date}
                    onChange={handleChange}
                  />
                  <div>
                    <Button type="button" onClick={() => setStep(1)}>
                      Voltar
                    </Button>
                    <Button
                      style={{ marginLeft: "10px" }}
                      type="button"
                      onClick={() => setStep(3)}
                    >
                      Próximo
                    </Button>
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <Label>Qual período do dia prefere?</Label>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={timeOfDay === "morning"}
                        onChange={() => setTimeOfDay("morning")}
                        name="timeOfDay"
                        value="morning"
                      />
                    }
                    label="Manhã"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={timeOfDay === "afternoon"}
                        onChange={() => setTimeOfDay("afternoon")}
                        name="timeOfDay"
                        value="afternoon"
                      />
                    }
                    label="Tarde"
                  />
                  <div>
                    <Button type="button" onClick={() => setStep(2)}>
                      Voltar
                    </Button>
                    <Button
                      style={{ marginLeft: "10px" }}
                      type="button"
                      onClick={() => setStep(4)}
                    >
                      Próximo
                    </Button>
                  </div>
                </>
              )}

              {step === 4 && (
                <>
                  <Label>Horários disponíveis para a data selecionada:</Label>
                  <List>
                    {timeSlots
                      .filter((time) => !isTimeUnavailable(time))
                      .map(renderTimeSlot)}
                  </List>
                  <div>
                    <Button type="button" onClick={() => setStep(3)}>
                      Voltar
                    </Button>
                    <Button style={{ marginLeft: "10px" }} type="submit">
                      Confirmar Agendamento
                    </Button>
                  </div>
                </>
              )}
            </SchedulingForm>
          </Column>
        </SchedulingContainer>
      </Container>
    </Body>
  );

  function renderTimeSlot(time: string) {
    return (
      <ListItem key={time}>
        <ListItemButton>
          <Checkbox
            edge="start"
            checked={formData.select_time === time}
            tabIndex={-1}
            disableRipple
            onChange={() => {
              const mockEvent = {
                target: {
                  name: "select_time",
                  value: time,
                } as any,
              } as React.ChangeEvent<HTMLInputElement>;
              handleChange(mockEvent);
            }}
          />
          <ListItemText primary={time} />
        </ListItemButton>
      </ListItem>
    );
  }
};
