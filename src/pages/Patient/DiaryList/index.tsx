import { useState, useEffect, useCallback } from "react";
import { Body } from "../../../components/Layout/Container/style";
import { format } from "date-fns";
import { api } from "../../../hooks/useApi";
import { Dialog, DialogTitle, DialogContent, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import ptBR from "date-fns/locale/pt-BR";
import { getFirstNameFormatted, truncateString } from "../../../common/functions/formatString";
import "../../Psychologist/PatientDiary/style.css";
import { useCurrentUser } from "../../../hooks/useCurrentUser";
import { StyledSubmitButton } from "../../Psychologist/PatientDetails/styled";
import { StyledTextarea } from "../../Psychologist/Graphic/styled";
import { DiaryListInterface } from "../../../interface/diaryList.interface";
import { toast } from "react-toastify";
import Header from "../../../components/Layout/Header/patient";
import { useDiaryEntries } from "../../../hooks/useDiaryEntries";
import useFetchPatientDetailsId from "../../../hooks/useFetchPatientDetailsId";
import { Loader } from "../../../components/Layout/Loader";

export const DiaryList = () => {
  const currentUser = useCurrentUser();
  const { diaryEntries, loading, fetchDiaryEntries, paginationMeta } = useDiaryEntries();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [selectedEntry, setSelectedEntry] = useState<DiaryListInterface | null>(null);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  const [editedText, setEditedText] = useState<string>("");
  const patientDetailsId = useFetchPatientDetailsId(editedText);

  const fetchDiaryEntriesMemoized = useCallback(
    () => {
      fetchDiaryEntries(page, limit, currentUser?.user_id);
    },
    [page, limit, currentUser?.user_id]
  );
  
  useEffect(() => {
    fetchDiaryEntriesMemoized();
  }, [fetchDiaryEntriesMemoized]);

  const handleEdit = async () => {

    try {
      if (selectedEntry) {

        await api.put(`/diary-entry/${selectedEntry.diary_entry_id}`, {

          text: editedText,
          patient_details_id: patientDetailsId,
        });

        fetchDiaryEntries(page, limit, currentUser?.user_id);

        toast.success("Diário editado com sucesso");

        handleCloseEditModal();
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

        fetchDiaryEntries(page, limit, currentUser?.user_id);

        toast.success("Diário excluído com sucesso");
        handleCloseModal();

      }

      } catch (error) {
        console.error("Error deleting diary:", error);
        toast.error("Error deleting diary");
      }
  };

  const handleViewClick = (entry: DiaryListInterface) => {
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

  return (
    <>
      <Body>
        <Header />
        <div className="diary-container">
          <div className="align">
            <h2 className="diary-title">Meus diários</h2>
          </div>

          {loading ? (
            <Loader />
          ) : (

          <div className="content-container grid-container">

            {diaryEntries.map((entry) => (
              
              <div key={entry.diary_entry_id} className="diary-patient">
                <p style={{fontFamily: "sans-serif", textAlign: "center"}}>
                 {  truncateString(entry.text, 300) }
                </p>

                <div className="container-button">
                  <button className="view-button" onClick={() => handleViewClick(entry)} >
                    Visualizar
                  </button>
                  <button className="view-button" onClick={() => handleOpenEditModal(entry)} >
                    Editar
                  </button>
                  <button className="view-button" onClick={() => handleDelete()} >
                    Excluir
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

              <StyledSubmitButton
                style={{ marginTop: "10px" }}
                onClick={() => handleEdit()}
              >
                Salvar
              </StyledSubmitButton>
            </DialogContent>
          </>
        </Dialog>
      </Body>
    </>
  );
};
