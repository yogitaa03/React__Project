import React, { FC } from "react";
import { Header } from "../../components/AppLayout/AppHeader";
import SideBar from "../../components/AppLayout/SideBar";
import { Outlet } from "react-router-dom";
const Layout: FC = () => {
    return (
        <>
            <Header />
            <div className="appFlex">
                <SideBar />
                <Outlet />
            </div>

        </>
    )
}
export default Layout    