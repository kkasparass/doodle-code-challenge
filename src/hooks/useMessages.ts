import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axiosInstance";
import { useMemo } from "react";
import type { MessageResponse } from "../types/types";
import { USER_NAME } from "../constants/constants";

const fetchMessages = async () => {
  const response = await axiosInstance.get("/messages");
  return response.data;
};

const useMessages = () => {
  const { data, isLoading, isError } = useQuery<MessageResponse[]>({
    queryKey: ["messages"],
    queryFn: fetchMessages,
  });

  const messages = useMemo(() => {
    if (!data) return [];

    return data.map(({ author, createdAt, message, _id }) => ({
      id: _id,
      message,
      createdAt: new Date(createdAt),
      highlighted: author === USER_NAME,
      ...(author !== USER_NAME && { author }),
    }));
  }, [data]);

  return { messages, isError, isLoading };
};

export default useMessages;
