import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout () {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "151vh" }}>
      <Header />
      <main style={{ flexGrow: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;