import { useCallback, useEffect, useState } from "react";
import { api } from "./useApi";
import { DiaryListInterface } from "../interface/diaryList.interface";
import { useCurrentUser } from "./useCurrentUser";

export const useDiaryEntries = () => {

  const [diaryEntries, setDiaryEntries] = useState<DiaryListInterface[]>([]);

  const currentUser = useCurrentUser();

  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [paginationMeta, setPaginationMeta] = useState({ currentPage: 1, totalPages: 1, itemCount: 0 });

  const getDiaryEntries = useCallback(async () => {
    
    const userId = currentUser?.user_id;

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
  }, [currentUser, limit, page]);

  useEffect(() => {
    if (currentUser) {
      getDiaryEntries();
    }
  }, [currentUser, limit, page, getDiaryEntries]);

  return { diaryEntries, totalPages, loading, paginationMeta, setLimit, setPage , limit, getDiaryEntries, currentUser};
};
