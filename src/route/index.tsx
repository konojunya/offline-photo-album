import { default as React, lazy, Suspense } from "react";
import { Route, Switch, RouteProps } from "react-router-dom";
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

const routes: RouteProps[] = [
  {
    exact: true,
    path: "/",
    component: WaitingComponent(lazy(() => import("../pages/Index")))
  },
  {
    exact: false,
    path: "/:id",
    component: WaitingComponent(lazy(() => import("../pages/Detail")))
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
