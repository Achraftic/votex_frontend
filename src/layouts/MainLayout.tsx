import { Outlet } from "react-router";

export default function MainLayout() {
    return (
        <div className={` text-sm m-auto  max-w-6xl xl:px-0 px-10 antialiased min-h-screen bg-background `} >
            <Outlet />
        </div>
    );
}
