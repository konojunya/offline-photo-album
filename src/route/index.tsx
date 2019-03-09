import { default as React, lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { Loading } from "../components/modules/Loading";

// layout
import { AppLayout } from "../layout";

const WaitingComponent = (Component: any) => {
  return (props: any) => (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );
};

const routes = [
  {
    exact: true,
    path: "/",
    component: WaitingComponent(lazy(() => import("../pages/Index")))
  },
  {
    exact: false,
    path: "/about",
    component: WaitingComponent(lazy(() => import("../pages/About")))
  }
];

export const createRouter = () => {
  return (
    <AppLayout>
      <Switch>
        {routes.map((route, index) => (
          <Route {...route} key={index} />
        ))}
      </Switch>
    </AppLayout>
  );
};
