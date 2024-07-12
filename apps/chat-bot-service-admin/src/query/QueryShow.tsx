import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const QueryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userMessage" source="userMessage" />
        <TextField label="responseMessage" source="responseMessage" />
        <TextField label="timestamp" source="timestamp" />
      </SimpleShowLayout>
    </Show>
  );
};
