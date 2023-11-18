import { useState } from "react";
import { api } from "./useApi";
import { DiaryListInterface } from "../interface/diaryList.interface";

interface ApiResponse {
    items: DiaryListInterface[];
    total: number;
  }

interface DiaryEntriesHook {
  diaryEntries: DiaryListInterface[];
  totalPages: number;
  fetchDiaryEntries: (page: number, limit: number, userId: string | undefined) => void;
}

export const useDiaryEntries = (): DiaryEntriesHook => {

  const [diaryEntries, setDiaryEntries] = useState<DiaryListInterface[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  

  const fetchDiaryEntries = async (page: number, limit: number, userId: string | undefined) => {
    try {
        
      const response = await api.get<ApiResponse>("/diary-entry", {
        params: {
          page,
          limit,
          user_id: userId,
        },
      });
      setDiaryEntries(response.data.items);

    
      setTotalPages(Math.ceil(response.data.total / limit));

    } catch (error) {

      console.error("Error fetching data:", error);
    }
  };

  return { diaryEntries, totalPages, fetchDiaryEntries };
};