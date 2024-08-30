import { Outlet } from "react-router-dom";
import Header from "../components/commons/Header";
import Navbar from "../components/commons/Navbar";

function Layouts() {
    return (
        <>
            <Header/>
            <Navbar/>
            <Outlet/>
        </>
    )
}

export default Layouts;