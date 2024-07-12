import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SermonList } from "./sermon/SermonList";
import { SermonCreate } from "./sermon/SermonCreate";
import { SermonEdit } from "./sermon/SermonEdit";
import { SermonShow } from "./sermon/SermonShow";
import { SpeakerList } from "./speaker/SpeakerList";
import { SpeakerCreate } from "./speaker/SpeakerCreate";
import { SpeakerEdit } from "./speaker/SpeakerEdit";
import { SpeakerShow } from "./speaker/SpeakerShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"SermonStreamingService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Sermon"
          list={SermonList}
          edit={SermonEdit}
          create={SermonCreate}
          show={SermonShow}
        />
        <Resource
          name="Speaker"
          list={SpeakerList}
          edit={SpeakerEdit}
          create={SpeakerCreate}
          show={SpeakerShow}
        />
      </Admin>
    </div>
  );
};

export default App;
