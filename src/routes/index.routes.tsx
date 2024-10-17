import { Navigate } from "react-router";
import Homepage from "views/Homepage";
import TestView from "views/TestView";

export interface IRoute {
  path: string;
  name: string;
  component: JSX.Element;
  children?: IRoute[];
}

const routes: IRoute[] = [
  { path: "/", name: "Homepage", component: <Homepage /> },
  { path: "/test", name: "Test", component: <TestView /> },
  {
    path: "*",
    name: "Redirect",
    component: <Navigate to="/" />,
  },
];

export default routes;
