import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SpeakerTitle } from "../speaker/SpeakerTitle";

export const SermonEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="title" source="title" />
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="date" source="date" />
        <TextInput label="videoUrl" source="videoUrl" />
        <ReferenceInput source="speaker.id" reference="Speaker" label="speaker">
          <SelectInput optionText={SpeakerTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
