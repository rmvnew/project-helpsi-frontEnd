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
import SchedulingSkeleton from "../../../components/Layout/Loader/Skeleton/SchedulingSkeleton";

export const Scheduling = () => {
  const { formData, unavailableSlots, handleChange, handleSubmit, loading } =
    useSchedulingData();

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

      <SchedulingContainer>
        <Column>
          <SchedulingForm onSubmit={handleSubmit}>
            {step === 1 && (
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
                    onClick={() => setStep(2)}
                  >
                    Próximo
                  </Button>
                </div>
              </>
            )}

            {step === 2 && (
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
                <Label>Horários disponíveis para a data selecionada:</Label>
                <List>
                  {timeSlots
                    .filter((time) => !isTimeUnavailable(time))
                    .map(renderTimeSlot)}
                </List>
                <div>
                  <Button type="button" onClick={() => setStep(2)}>
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
