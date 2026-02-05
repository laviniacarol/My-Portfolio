import Layout from "./Layout/layout";

import Home from "./containers/Home/home";
import About from "./containers/About/About";
import Education from "./containers/Education";
import Inspo from "./containers/Inspo/inspo";
import Tecnologias from "./containers/Tech/tech";
import Contact from "./containers/Contact/contact";

export default function App() {
  return (
    <Layout>
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="education"><Education /></section>
      <section id="inspo"><Inspo /></section>
      <section id="tech"><Tecnologias /></section>
      <section id="contact"><Contact /></section>
    </Layout>
  );
}
