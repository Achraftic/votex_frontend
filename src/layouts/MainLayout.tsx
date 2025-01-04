import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout() {
    return (
        <div className={` text-sm m-auto py-8  max-w-6xl xl:px-6 px-10 antialiased min-h-screen bg-background `} >
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}
