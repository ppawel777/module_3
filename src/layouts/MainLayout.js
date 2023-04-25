import { Outlet } from "react-router-dom"
import NavBar from "./components/Navbar";

import './index.scss';

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default MainLayout;
