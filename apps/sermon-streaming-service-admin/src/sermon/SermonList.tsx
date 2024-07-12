import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SPEAKER_TITLE_FIELD } from "../speaker/SpeakerTitle";

export const SermonList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Sermons"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="title" source="title" />
        <TextField label="description" source="description" />
        <TextField label="date" source="date" />
        <TextField label="videoUrl" source="videoUrl" />
        <ReferenceField label="speaker" source="speaker.id" reference="Speaker">
          <TextField source={SPEAKER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};