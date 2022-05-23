import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import NotFound from "../../shareComponents/notfound/NotFound";
import NewPage from "./pages/NewPage";

const NewIndex = () => {
  return (
    <div>
      <Routes>
        <Route index element={<NewPage />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Outlet />
    </div>
  );
};

export default NewIndex;
