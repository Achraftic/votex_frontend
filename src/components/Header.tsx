import { GiCubeforce } from 'react-icons/gi'
import { NavLink } from 'react-router'
import PhoneSideBar from './PhoneSideBar'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Hamburger from 'hamburger-react'
import { cn } from '../lib/utils'
export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header className="flex  justify-between  items-center">
            <h1 className="text-2xl   font-semibold text-zinc-100 flex gap-1 "><GiCubeforce size={40}
                className="text-primary" /> <span className="self-end">Votex</span></h1>

            <nav className="md:flex hidden flex-1 justify-between   items-center ">
                <ul className="flex gap-7  m-auto text-sm  text-zinc-400 *:cursor-pointer">

                    <NavLink to="/" className="text-zinc-50">Home</NavLink>
                    <li className="hover:text-zinc-50 transition-colors ease-in-out">About</li>
                    <NavLink to="/contact" className="hover:text-zinc-50 transition-colors ease-in-out">Contact</NavLink>
                    <li className="hover:text-zinc-50 transition-colors ease-in-out">Services</li>
                </ul>
                <div className="flex gap-3">
                    <NavLink to={"/login"} className=" text-zinc-50 px-4 py-1.5 hover:bg-gradient-to-br hover:from-primary hover:to-secondary rounded-2xl  transition-all">Login</NavLink>
                    <NavLink to={"/signup"} className="bg-primary bg-gradient-to-tl from-primary to-secondary  text-zinc-50 px-4 py-1.5 rounded-2xl">Sign Up</NavLink>
                </div>
            </nav>

           
            <span className={cn('md:hidden z-[100] sticky top-0', isOpen ? "fixed right-10 top-8" : "")}  >
                <Hamburger color='#EEEEEE' rounded toggled={isOpen} toggle={setIsOpen} />
            </span>

            <AnimatePresence>
                {isOpen && <PhoneSideBar />}
            </AnimatePresence>
        </header>
    )
}
