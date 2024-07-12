export type Payment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  currency: string | null;
  status?: "Option1" | null;
  amount: number | null;
  user: string | null;
};
