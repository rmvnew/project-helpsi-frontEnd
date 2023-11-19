import { useState } from "react";
import { api } from "./useApi";
import { DiaryListInterface } from "../interface/diaryList.interface";

export const useDiaryEntries = () => {
  const [diaryEntries, setDiaryEntries] = useState<DiaryListInterface[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [paginationMeta, setPaginationMeta] = useState({
    currentPage: 1,
    totalPages: 1,
    itemCount: 0,
  });

  const fetchDiaryEntries = async (page: number, limit: number, userId: string | undefined) => {
    try {
      setLoading(true);

      const response = await api.get("/diary-entry", {
        params: {
          page,
          limit,
          user_id: userId,
        },
      });

      if (response.data) {
        setDiaryEntries(response.data.items);

        setPaginationMeta({
            currentPage: response.data.meta.currentPage,
            totalPages: response.data.meta.totalPages,
            itemCount: response.data.meta.itemCount,
          });
    
      }
      
      setTotalPages(Math.ceil(response.data.total / limit));
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return { diaryEntries, totalPages, loading, fetchDiaryEntries, paginationMeta };
};
