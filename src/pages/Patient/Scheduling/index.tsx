import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import {
  Container,
  Main,
} from "../../../components/Layout/Container/ContainerHome/styled";
import { Body } from "../../../components/Layout/Container/style";
import Header from "../../../components/Layout/Header/patient";
import { toast } from "react-toastify";
import {
  Button,
  Column,
  Input,
  Label,
  PsychologistInfo,
  SchedulingContainer,
  SchedulingForm,
  Select,
} from "./styled";
import { useScheduling } from "../../../hooks/useScheduling";
import { useCurrentUser } from "../../../hooks/useCurrentUser";
import { useAllPsychologists } from "../../../hooks/useAllPsychologists";
import { AxiosError } from "axios";
import { getFormattedName } from "../../../common/functions/formatString";
import { Loader } from "../../../components/Layout/Loader";

export const Scheduling = () => {
  const { scheduleAppointment } = useScheduling();
  const currentUser = useCurrentUser();
  const psychologists = useAllPsychologists();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    duration: 1,
    select_date_time: "",
    patient_id: "",
    psychologist_id: "",
    registrant_name: "",
  });

  const selectedPsychologist = psychologists.find(
    (psych) => psych.user_id === formData.psychologist_id
  );

  useEffect(() => {
    if (currentUser) {
      setFormData((prevState) => ({
        ...prevState,
        patient_id: currentUser.user_id,
        registrant_name: currentUser.user_name,
        psychologist_id: psychologists?.[0]?.user_id || "",
      }));
    }
  }, [currentUser, psychologists]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await scheduleAppointment(formData);
      const message = response.data.message;
      toast.success(message);
    } catch (error) {
      const axiosError = error as AxiosError<{ message?: string }>;
      const errorMessage =
        axiosError.response?.data.message ?? "Erro ao realizar agendamento.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Body>
        <Header />
        <Container>
          <Main>
            {loading ? (
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
                  {selectedPsychologist && (
                    <PsychologistInfo>
                      <h3>Informações do Psicólogo</h3>
                      <span>
                        Nome:{" "}
                        <p>
                          {getFormattedName(selectedPsychologist.user_name)}
                        </p>
                      </span>

                      <span>
                        Especialidade:{" "}
                        {selectedPsychologist.specialtys.map((specialty) => (
                          <p key={specialty.specialty_id}>
                            {getFormattedName(specialty.specialty_name)}
                          </p>
                        ))}{" "}
                      </span>
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
