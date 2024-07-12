import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { SPEAKER_TITLE_FIELD } from "./SpeakerTitle";

export const SpeakerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="bio" source="bio" />
        <TextField label="imageUrl" source="imageUrl" />
        <TextField label="name" source="name" />
        <ReferenceManyField
          reference="Sermon"
          target="speakerId"
          label="Sermons"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="title" source="title" />
            <TextField label="description" source="description" />
            <TextField label="date" source="date" />
            <TextField label="videoUrl" source="videoUrl" />
            <ReferenceField
              label="speaker"
              source="speaker.id"
              reference="Speaker"
            >
              <TextField source={SPEAKER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
