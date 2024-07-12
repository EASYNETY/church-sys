import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SpeakerTitle } from "../speaker/SpeakerTitle";

export const SermonCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="title" source="title" />
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="date" source="date" />
        <TextInput label="videoUrl" source="videoUrl" />
        <ReferenceInput source="speaker.id" reference="Speaker" label="speaker">
          <SelectInput optionText={SpeakerTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
