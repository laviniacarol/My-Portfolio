import { Routes, Route } from "react-router-dom";

import Layout from "../src/Layout/layout";

/* containers */
import Home from "./containers/Home/home";
import About from "./containers/About/About";
import Inspo from "./containers/Inspo/inspo";
import Education from "./containers/Education";
import Contact from "./containers/Contact/contact";


export default function App() {
  return (
   <Routes>
  <Route element={<Layout />}>
    <Route path="/" element={<Home />} />
    <Route path="/sobre" element={<About />} />
    <Route path="/formacao" element={<Education />} />
    <Route path="/inspo" element={<Inspo />} />
        <Route path="/contact" element={<Contact />} />
  </Route>
</Routes>

  );
}
