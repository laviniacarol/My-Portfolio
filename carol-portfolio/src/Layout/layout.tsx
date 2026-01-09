import { Outlet } from "react-router-dom";
import Header from "../containers/Header";

export default function Layout() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "70px" }}>
        <Outlet />
      </main>
    </>
  );
}
