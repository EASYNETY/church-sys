export type Query = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  userMessage: string | null;
  responseMessage: string | null;
  timestamp: Date | null;
};
