import { Dialog, DialogContent, TextField } from "@mui/material";
import { User } from "../../../interface/user.interface";
import { StyledSubmitButton } from "../../Patient/DiaryList/styled";
import { useState } from "react";
import { api } from "../../../hooks/useApi";
import { toast } from "react-toastify";
import { TitleEdit } from "./styled";
import { getFormattedName } from "../../../common/functions/formatString";

interface EditModalProps { open: boolean; onClose: () => void; patient: User | null }

export const EditModal: React.FC<EditModalProps> = ({ open, onClose, patient }) => {

  const [formData, setFormData] = useState({

    consultation_reason: "",
    previousDiagnosis: "string",
    diagnosis: "",
    therapyType: "string",
    session_frequency: "",
    lastSessionDate: "string",
    current_status: "",

  });


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const isFormValid = () => {
    
    return Object.values(formData).every(value => value.trim() !== '');
  };

  const handleSave = async () => {

    try {

        if (patient?.patientDetail?.patient_details_id && isFormValid()) {

        await api.put(`/patient-details/${patient.patientDetail.patient_details_id}`, formData);
        
        window.location.reload();

      } else {
        toast.error("Preencha todos os campos antes de salvar.");
      }
    } catch (error) {
      toast.error("Erro ao editar relatório!");
      console.error("Erro ao editar relatório:", error);
    }
  };

  return (

    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <TitleEdit>Editando diagnóstico de {getFormattedName(patient?.user_name)  } </TitleEdit>

        <TextField
          label="Motivo da consulta"
          variant="outlined"
          fullWidth
          margin="normal"
          name="consultation_reason"
          value={formData.consultation_reason}
          onChange={handleInputChange}
        />

        <TextField
          label="Diagnóstico"
          variant="outlined"
          fullWidth
          margin="normal"
          name="diagnosis"
          value={formData.diagnosis}
          onChange={handleInputChange}
        />

        <TextField
          label="Frequência das sessões"
          variant="outlined"
          fullWidth
          margin="normal"
          name="session_frequency"
          value={formData.session_frequency}
          onChange={handleInputChange}
        />

        <TextField
          label="Status atual"
          variant="outlined"
          fullWidth
          margin="normal"
          name="current_status"
          value={formData.current_status}
          onChange={handleInputChange}
        />

        <StyledSubmitButton type="submit" onClick={handleSave} style={{ marginTop: "10px" }}>
          Salvar
        </StyledSubmitButton>
      </DialogContent>
    </Dialog>
  );
};
