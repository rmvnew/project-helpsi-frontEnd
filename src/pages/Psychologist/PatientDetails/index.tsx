import { InputLabel, MenuItem, Select, TextField } from "@mui/material";
import Header from "../../../components/Layout/Header/psy";
import { Body } from "../../../components/Layout/Container/style";
import usePsychologistById from "../../../hooks/usePsychologistData";
import { StyledForm, StyledSubmitButton, StyledTitle } from "./styled";
import { useCurrentUser } from "../../../hooks/useCurrentUser";
import { usePatientDetails } from "../../../hooks/usePatientDetails";

export const PatientDetails = () => {
    const initialFormData = {
      consultation_reason: "",
      therapy_type: "",
      last_session_date: new Date(),
      diagnosis: "",
      session_frequency: "",
      current_status: "",
      patient_id: "",
    };
  
    const currentUser = useCurrentUser();
    const psychologistId = currentUser?.user_id || "";
  
    const { formData, handleTextFieldChange, handleSelectChange, handleSubmit } =
      usePatientDetails(initialFormData);
  
    const { psychologistData } = usePsychologistById(psychologistId);
  

  return (
    <Body>
      <Header />
      <StyledForm onSubmit={handleSubmit}>
        <StyledTitle>Relatório de Atendimento</StyledTitle>
        <TextField
          label="Motivo da Consulta"
          variant="outlined"
          name="consultation_reason"
          fullWidth
          margin="normal"
          onChange={handleTextFieldChange}
          value={formData.consultation_reason}
        />
        <TextField
          label="Diagnóstico"
          variant="outlined"
          name="diagnosis"
          fullWidth
          margin="normal"
          onChange={handleTextFieldChange}
          value={formData.diagnosis}
        />
        <TextField
          label="Frequência das Sessões"
          variant="outlined"
          name="session_frequency"
          fullWidth
          margin="normal"
          onChange={handleTextFieldChange}
          value={formData.session_frequency}
        />
        <TextField
          label="Status Atual"
          variant="outlined"
          name="current_status"
          fullWidth
          margin="normal"
          onChange={handleTextFieldChange}
          value={formData.current_status}
        />

        <InputLabel>Paciente</InputLabel>
        <Select
          value={formData.patient_id}
          onChange={(event) => handleSelectChange(event as React.ChangeEvent<{ name?: string; value: unknown }>)}
          label="Paciente"
          name="patient_id"
        >
          {psychologistData && psychologistData.patients ? (
            psychologistData.patients.map((patient) => (
              <MenuItem key={patient.user_id} value={patient.user_id}>
                {patient.user_name}
              </MenuItem>
            ))
          ) : (
            <MenuItem value="" disabled>
              Nenhum paciente disponível
            </MenuItem>
          )}
        </Select>

        <StyledSubmitButton type="submit">Salvar</StyledSubmitButton>
      </StyledForm>
    </Body>
  );
};
