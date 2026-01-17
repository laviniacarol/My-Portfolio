import { Routes, Route } from "react-router-dom";

import Layout from "../src/Layout/layout";

/* containers */
import Home from "./containers/Home/home";
import About from "./containers/About/About";
import Inspo from "./containers/Inspo/inspo";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Inspo />} />
        <Route path="/sobre" element={<About />} />
      </Route>
    </Routes>
  );
}
