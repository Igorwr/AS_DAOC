import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

function MainLayout() {
    return <>
        <Header />
        <Outlet />
        <h1>FOoter</h1>
    </>
}

export default MainLayout