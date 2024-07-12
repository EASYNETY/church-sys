export type Invoice = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  totalAmount: number | null;
  dueDate: Date | null;
  status?: "Option1" | null;
  invoiceNumber: string | null;
  user: string | null;
};
