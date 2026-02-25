import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../utils/axiosInstance";
import { useMemo } from "react";
import type { MessageMutationProps, MessageResponse } from "../types/types";

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
      highlighted: author === "John Doe",
      ...(author !== "John Doe" && { author }),
    }));
  }, [data]);

  return { messages, isError, isLoading };
};

export default useMessages;
