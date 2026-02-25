import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../utils/axiosInstance";
import { useMemo } from "react";
import type { MessageMutationProps, MessageResponse } from "../types/types";

const fetchMessages = async () => {
  const response = await axiosInstance.get("/messages");
  return response.data;
};

const useMessages = () => {
  const queryClient = useQueryClient();
  const { data, error, isLoading } = useQuery<MessageResponse[]>({
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

  const sendMessageMutation = useMutation({
    mutationFn: (message: MessageMutationProps) => {
      return axiosInstance.post("/messages", message);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["messages"] });
    },
  });

  return { messages, error, isLoading, sendMessageMutation };
};

export default useMessages;
