import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const InvoiceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="totalAmount" source="totalAmount" />
        <TextField label="dueDate" source="dueDate" />
        <TextField label="status" source="status" />
        <TextField label="invoiceNumber" source="invoiceNumber" />
        <TextField label="user" source="user" />
      </SimpleShowLayout>
    </Show>
  );
};
