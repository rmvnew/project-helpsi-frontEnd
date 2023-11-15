import { useState } from "react";
import { toast } from "react-toastify";
import { api } from "./useApi";
import { PatientDetailsInterface } from "../interface/patientDetails.interface";


interface UsePatientDetails {
    
    formData: PatientDetailsInterface;
    handleTextFieldChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSelectChange: ( event: React.ChangeEvent<{ name?: string; value: unknown }>) => void;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  }
  

export const usePatientDetails = (initialFormData: PatientDetailsInterface): UsePatientDetails => {
  const [formData, setFormData] = useState<PatientDetailsInterface>(initialFormData);
  

  const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSelectChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    setFormData({
      ...formData,
      [event.target.name as string]: event.target.value as string,
    });
  };

  const handleSubmit = async ( event: React.FormEvent<HTMLFormElement> ): Promise<void> => {

    event.preventDefault();

    try {
      await api.post("/patient-details", formData);

      toast.success("Relatório salvo com sucesso!");

      setFormData(initialFormData);

    } catch (error) {

      console.error("Erro ao enviar dados para a API:", error);

      toast.error("Erro ao salvar o relatório. Tente novamente.");
    }
  };


  return { formData, handleTextFieldChange, handleSelectChange, handleSubmit };
};
