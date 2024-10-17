import "./styles.css";
import { FC } from "react";
import { Route, Routes } from "react-router";
import routes from "routes/index.routes";
import Header from "./components/Header";
import { AppWrapper, ViewWrapper } from "./styled";

const App: FC = () => {
  const renderRoutes: () => JSX.Element[] = () =>
    routes.map((parentRoutes: any, i: number) => (
      <Route
        key={i}
        path={parentRoutes.path}
        element={parentRoutes.component}
      />
    ));
  return (
    <AppWrapper>
      <Header />
      <ViewWrapper>
        <Routes>{renderRoutes()}</Routes>
      </ViewWrapper>
    </AppWrapper>
  );
};

export default App;
