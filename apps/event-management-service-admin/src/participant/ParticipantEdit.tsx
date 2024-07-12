import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ParticipantEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="lastName" source="lastName" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="phone" source="phone" />
        <TextInput label="firstName" source="firstName" />
      </SimpleForm>
    </Edit>
  );
};
