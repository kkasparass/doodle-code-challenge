import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import he from "he";
import type { MessageResponse } from "../types/types";
import { USER_NAME } from "../constants/constants";
import axiosInstance from "../utils/axiosInstance";

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
      message: he.decode(message),
      createdAt: new Date(createdAt),
      highlighted: author === USER_NAME,
      ...(author !== USER_NAME && { author: he.decode(author) }),
    }));
  }, [data]);

  return { messages, isError, isLoading };
};

export default useMessages;
