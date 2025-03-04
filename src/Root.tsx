import { BrowserRouter, Route, Routes } from "react-router";
import { Dashboard } from "./pages/Dashboard";
import App from "./App";
import { AddBook } from "./pages/AddBook";

export const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Dashboard />} />
          <Route path="/add-book" element={<AddBook />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
