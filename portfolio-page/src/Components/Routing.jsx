import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from "./Page";
import NotFound from "./NotFound";

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
