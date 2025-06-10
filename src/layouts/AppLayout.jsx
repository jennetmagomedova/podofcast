import { Outlet } from "react-router";
import Header from "./Header/Header";
import Footer from "./Footer";

const AppLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
