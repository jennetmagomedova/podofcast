import { Outlet } from "react-router";
import Header from "./Header/Header";

const AppLayout = () => {
  return (
    <>
      <main>
        <Header />
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
