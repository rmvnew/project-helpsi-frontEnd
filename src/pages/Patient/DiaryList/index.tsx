import { useState } from "react";
import { Body } from "../../../components/Layout/Container/style";
import { format } from "date-fns";
import { api } from "../../../hooks/useApi";
import { Dialog, DialogTitle, DialogContent, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import ptBR from "date-fns/locale/pt-BR";
import { getFirstNameFormatted, truncateString } from "../../../common/functions/formatString";
import "../../Psychologist/PatientDiary/style.css";
import { StyledTextarea } from "../../Psychologist/Graphic/styled";
import { DiaryListInterface } from "../../../interface/diaryList.interface";
import { toast } from "react-toastify";
import Header from "../../../components/Layout/Header/patient";
import { useDiaryEntries } from "../../../hooks/useDiaryEntries";
import useOnePatient from "../../../hooks/useOnePatient";
import { Loader } from "../../../components/Layout/Loader";
import { NoAppointmentsContainer } from "../Home/AppointmentTime/styled";
import { Empty } from "antd";
import { ButtonContainer, DeleteButton, StyledSubmitButton } from "./styled";
import {  Delete } from "@material-ui/icons";

export const DiaryList = () => {
 
  const { diaryEntries, loading, paginationMeta,  setLimit, setPage, limit, getDiaryEntries, currentUser } = useDiaryEntries();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [selectedEntry, setSelectedEntry] = useState<DiaryListInterface | null>(null);

  const [editedText, setEditedText] = useState<string>("");
  const patientDetailsId = useOnePatient(editedText);

  const handleEdit = async () => {

    try {
      
      if (selectedEntry) {

        await api.put(`/diary-entry/${selectedEntry.diary_entry_id}`, {

          text: editedText,
          patient_details_id: patientDetailsId,
        });

        toast.success("Diário editado com sucesso");
        handleCloseEditModal();
        getDiaryEntries();
      }
      
      } catch (error) {
        console.error("Erro ao editar:", error);
        toast.error("Erro ao editar");
      }
  };

  const handleDelete = async () => {

    try {

      if (selectedEntry) {
        await api.delete(`/diary-entry/${selectedEntry.diary_entry_id}`);

        toast.success("Diário excluído com sucesso!!");
        handleCloseEditModal();
        getDiaryEntries();
      }

      } catch (error) {
        console.error("Error deleting diary:", error);
        toast.error("Error deleting diary");
      }
  };

  const handleView = (entry: DiaryListInterface) => {
    setSelectedEntry(entry);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenEditModal = (entry: DiaryListInterface) => {
    setEditedText(entry.text);
    setSelectedEntry(entry);
    setIsEditModalOpen(true);
  };
  const handleCloseEditModal = () => {
    setEditedText("");
    setIsEditModalOpen(false);
  };

  const handleChangePage = ( _event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleChangeLimit = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLimit(event.target.value as number);
    setPage(1);
  };

  if (diaryEntries.length === 0 && currentUser?.user_id ) {
    return (

    <Body>
        <Header />
        
        <div className="diary-container">
          <div className="content-container">
            <Loader/>
          </div>
        </div>
    </Body>
    );
  }


  return (
    <>
      <Body>
        <Header />
        <div className="diary-container">
            <h2 className="diary-title">Meus diários</h2>

          {loading ? (
           <div className="diary-container">
            <div className="content-container">
              <NoAppointmentsContainer>
                <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description="Nenhum diário escrito no momento"
                />
              </NoAppointmentsContainer>
           </div>
         </div>
          ) : (

          <div className="content-container grid-container">

            {diaryEntries.map((entry) => (
              
              <div key={entry.diary_entry_id} className="diary-patient">
                <p style={{fontFamily: "sans-serif", textAlign: "center"}}>
                 {  truncateString(entry.text, 300) }
                </p>

                <div className="container-button">
                  <button className="view-button" onClick={() => handleView(entry)} >
                    Visualizar
                  </button>
                  <button className="view-button" onClick={() => handleOpenEditModal(entry)} >
                    Editar
                  </button>
                  
                </div>
              </div>
            ))}

          </div>

          )}

          <div className="page">
            <Pagination
              count={paginationMeta.totalPages}
              page={paginationMeta.currentPage}
              onChange={handleChangePage}
              variant="outlined"
              shape="rounded"
              style={{ marginTop: "20px" }}
              
            />
            <div className="items" style={{ marginTop: "20px" }}>
              <label>Itens por página:</label>
              <select value={limit} onChange={handleChangeLimit}>
                <option value={5}>5</option>
                <option value={8}>8</option>
                <option value={10}>10</option>
              </select>
            </div>
          </div>
        </div>

        {/* View Modal */}

        <Dialog open={isModalOpen} onClose={handleCloseModal}>
          {selectedEntry && (
            <>
              <DialogContent className="modal-content">
                <DialogTitle className="modal-title">
                  <span>
                    Diário de{" "}
                    {getFirstNameFormatted(
                      selectedEntry.patient_details.user.user_name
                    )}
                  </span>
                </DialogTitle>
                <Typography className="modal-text">
                  {selectedEntry.text}
                </Typography>
                <Typography className="modal-date">
                  <span>
                    {format(
                      new Date(selectedEntry.register_date),
                      "EEEE, d 'de' MMMM 'de' yyyy",
                      { locale: ptBR }
                    )}
                  </span>
                </Typography>
              </DialogContent>
            </>
          )}
        </Dialog>

        {/* Edit Modal */}
        <Dialog open={isEditModalOpen} onClose={handleCloseEditModal}>
          <>
            <DialogContent className="modal-content">
              <StyledTextarea
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
                placeholder="Digite o texto do diário aqui..."
              />

              <ButtonContainer>
                <StyledSubmitButton onClick={() => handleEdit()}>
                  Salvar
                </StyledSubmitButton>
                <DeleteButton  onClick={() => handleDelete()} >
                <Delete />
                </DeleteButton>
              </ButtonContainer>
            </DialogContent>
          </>
        </Dialog>
      </Body>
    </>
  );
};
