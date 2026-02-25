export type MessageResponse = {
  _id: string;
  message: string;
  author: string;
  createdAt: Date;
};

export type MessageProps = {
  author?: string;
  message: string;
  createdAt?: Date;
  highlighted?: boolean;
  id: string;
};

export type MessageMutationProps = {
  message: string;
  author: string;
};

export type ValidationError = {
  error: {
    message: ErrorDetails[];
  };
  timestamp: string;
};

export type ErrorDetails = {
  field: string;
  message: string;
};
