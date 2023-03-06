import Sidebar from "./componets/Sidebar";
import { Outlet } from "react-router";

const BaseLayout = () => {
    return (
        <div className="flex">
            <Sidebar/>
            <Outlet/>
        </div>
    )
}

export default BaseLayout