import React, { useState, useEffect } from "react";
import { Body } from "../../../components/Layout/Container/style";
import Header from "../../../components/Layout/Header/psy";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { api } from "../../../hooks/useApi";
import { Dialog, DialogTitle, DialogContent, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import ptBR from "date-fns/locale/pt-BR";
import profile from "../../../assets/icons/icon_user_diary.svg";
import { getFirstNameFormatted } from "../../../common/functions/formatString";
import "./style.css";

interface DiaryEntry {
  is_active: boolean;
  create_at: string;
  update_at: string;
  diary_entry_id: string;
  register_date: string;
  text: string;
  patient_details: {
    patient_details_id: string;
    start_date: string;
    consultation_reason: string;
    previous_diagnosis: string | null;
    diagnosis: string;
    session_frequency: string;
    last_session_date: string | null;
    current_status: string;
    user: {
      user_id: string;
      user_name: string;
    };
  };
}

interface ApiResponse {
  items: DiaryEntry[];
  total: number;
}

export const PatientDiary = () => {
  const [diaryEntries, setDiaryEntries] = useState<DiaryEntry[]>([]);
  const [selectedEntry, setSelectedEntry] = useState<DiaryEntry | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get<ApiResponse>("/diary-entry", {
          params: {
            page,
            limit,
          },
        });
        setDiaryEntries(response.data.items);
        setTotalPages(Math.ceil(response.data.total / limit));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [page, limit]);

  const handleViewClick = (entry: DiaryEntry) => {
    setSelectedEntry(entry);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleChangePage = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
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
            <h2 className="diary-title">Diário dos Pacientes</h2>
            <Link to="/psy/graphic" className="view-button">
              Gráfico de emoções
            </Link>
          </div>

          <div className="content-container grid-container">
            {diaryEntries.map((entry) => (
              <div key={entry.diary_entry_id} className="card">
                <div className="card-profile">
                  <img src={profile} alt="" />
                  <p>{entry.patient_details.user.user_name}</p>
                </div>
                <p className="date-info">
                  Escrito dia
                  {format(new Date(entry.register_date), " d'/'MM'/'yyyy", {
                    locale: ptBR,
                  })}
                </p>
                <p className="date-text">
                  Última edição em
                  {format(new Date(entry.update_at), " d'/'MM'/'yyyy", {
                    locale: ptBR,
                  })}
                </p>
                <button
                  className="view-button"
                  onClick={() => handleViewClick(entry)}
                >
                  Visualizar
                </button>
              </div>
            ))}
          </div>

          <div className="page">
            <Pagination
              count={totalPages}
              page={page}
              onChange={handleChangePage}
              variant="outlined"
              shape="rounded"
              style={{ marginTop: "20px" }}
            />
            <div className="items">
              <label>Itens por página:</label>
              <select value={limit} onChange={handleChangeLimit}>
                <option value={5}>5</option>
                <option value={8}>8</option>
                <option value={10}>10</option>
              </select>
            </div>
          </div>
        </div>

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
      </Body>
    </>
  );
};
