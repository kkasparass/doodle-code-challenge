import { AxiosError } from "axios";
import { ValidationError } from "../types/types";

export const isValidationError = (
  error: AxiosError<ValidationError> | Error,
): error is AxiosError<ValidationError> => {
  return (
    (<AxiosError<ValidationError>>error)?.response?.data.error !== undefined
  );
};
