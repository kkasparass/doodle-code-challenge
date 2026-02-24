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
