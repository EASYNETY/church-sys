export type InvoiceUpdateInput = {
  totalAmount?: number | null;
  dueDate?: Date | null;
  status?: "Option1" | null;
  invoiceNumber?: string | null;
  user?: string | null;
};
