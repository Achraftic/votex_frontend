import { IoIosArrowBack } from "react-icons/io";
import { NavLink, Outlet } from "react-router";

export default function AuthLayout() {

  return (
    <div className="min-h-screen  p-6 ">
      <div>
        <NavLink to="/" className="text-primary  text-xs flex gap-0.5 items-center my-3 "><IoIosArrowBack /> Back</NavLink>
      </div>
    <div className="flex justify-center h-[85vh] text-zinc-100 items-center  ">

     <Outlet />
    </div>
    </div>
  );
}
