import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";

import {
  NotFoundPage,
  RootLayout,
  ScriptsLayout,
  Scripts,
  ScriptsHistory,
  MonitorScript,
  Settings,
  Login,
  Docs,
  ScriptsUnavailable,
} from "@pages";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Navigate to="/scripts/all" replace />} />
          <Route path="scripts" element={<ScriptsLayout />}>
            <Route path="all" element={<Scripts />} />
            <Route path="runs" element={<ScriptsHistory />} />
            <Route path=":id" element={<MonitorScript />} />
          </Route>
          <Route path="error" element={<ScriptsUnavailable />} />
          <Route path="settings" element={<Settings />} />
          <Route path="docs" element={<Docs />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
