import { RefObject, SubmitEvent, useEffect, useRef, useState } from "react";
import { TooltipRefProps } from "react-tooltip";
import { scrollToBottom } from "@/src/utils/scrollToBottom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  ValidationError,
  MessageMutationProps,
  MessageResponse,
} from "@/src/types/types";
import axiosInstance from "@/src/utils/axiosInstance";
import { AxiosError, AxiosResponse } from "axios";
import { isValidationError } from "@/src/utils/typeguards";

export const useMessageForm = () => {
  const queryClient = useQueryClient();
  const tooltipRef = useRef<TooltipRefProps>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const sendMessageMutation = useMutation({
    mutationFn: (
      message: MessageMutationProps,
    ): Promise<AxiosResponse<MessageResponse>> => {
      return axiosInstance.post("/messages", message);
    },
    onSuccess: async (data) => {
      console.log("data");
      if (inputRef)
        (inputRef as RefObject<HTMLInputElement>).current.value = "";
      queryClient.setQueryData(["messages"], (oldData: MessageResponse[]) => {
        return [...oldData, data.data];
      });
    },
    onError: (error: AxiosError<ValidationError> | Error) => {
      setErrorMessage(
        isValidationError(error) && error.response
          ? error?.response.data.error.message[0].message
          : "An error occured, please try again later.",
      );
      tooltipRef.current?.open();
    },
  });
  const onSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessageMutation.mutate({
      message: (event.target.firstChild as HTMLFormElement).value,
      author: "John Doe",
    });
  };

  useEffect(() => {
    if (sendMessageMutation.isSuccess) {
      scrollToBottom(document.getElementById("scroll-container"));
    }
  }, [sendMessageMutation.isSuccess]);

  return { errorMessage, tooltipRef, inputRef, onSubmit };
};
