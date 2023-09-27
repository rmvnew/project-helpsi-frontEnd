import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import {
  Container,
  Main,
} from "../../../components/Layout/Container/ContainerHome/styled";
import { Body } from "../../../components/Layout/Container/style";
import Header from "../../../components/Layout/Header/patient";
import { toast } from "react-toastify";
import {
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledSelect,
} from "./styled";
import { useScheduling } from "../../../hooks/useScheduling";
import { useCurrentUser } from "../../../hooks/useCurrentUser";
import { useAllPsychologists } from "../../../hooks/useAllPsychologists";
import { AxiosError } from "axios";

export const Scheduling = () => {
  const { scheduleAppointment } = useScheduling();
  const currentUser = useCurrentUser();
  const psychologists = useAllPsychologists();

  const [formData, setFormData] = useState({
    duration: 1,
    select_date_time: "",
    patient_id: "",
    psychologist_id: "",
    registrant_name: "",
  });

  useEffect(() => {
    if (currentUser) {
      setFormData((prevState) => ({
        ...prevState,
        patient_id: currentUser.user_id,
        registrant_name: currentUser.user_name,
      }));
    }
  }, [currentUser]);

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

    try {
      const response = await scheduleAppointment(formData);
      const message = response.data.message;
      toast.success(message);
    } catch (error) {
      const axiosError = error as AxiosError<{ message?: string }>;
      const errorMessage =
        axiosError.response?.data.message ?? "Erro ao realizar agendamento.";
      toast.error(errorMessage);
    }
  };

  return (
    <>
      <Body>
        <Header />
        <Container>
          <Main>
            <StyledForm onSubmit={handleSubmit}>
              <StyledLabel>
                Selecione o Psicólogo:
                <StyledSelect
                  name="psychologist_id"
                  value={formData.psychologist_id}
                  onChange={handleChange}
                >
                  {psychologists.map((psych) => (
                    <option key={psych.user_id} value={psych.user_id}>
                      {psych.user_name}
                    </option>
                  ))}
                </StyledSelect>
              </StyledLabel>

              <StyledLabel>
                Escolha a Data e Hora:
                <StyledInput
                  type="datetime-local"
                  name="select_date_time"
                  value={formData.select_date_time}
                  onChange={handleChange}
                />
              </StyledLabel>

              <StyledButton type="submit">Confirmar Agendamento</StyledButton>
            </StyledForm>
          </Main>
        </Container>
      </Body>
    </>
  );
};
