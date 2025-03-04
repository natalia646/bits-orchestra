import { BrowserRouter, Route, Routes } from "react-router";
import { Dashboard } from "./pages/Dashboard";
import App from "./App";
import { AddBook } from "./pages/AddBook";
import { PATH } from "./constants/path";

export const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH.Dashboard} element={<App />}>
          <Route index element={<Dashboard />} />
          <Route path={PATH.AddBook} element={<AddBook />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
