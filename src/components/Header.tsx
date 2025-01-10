import { GiCubeforce } from 'react-icons/gi'
import { VscListSelection } from 'react-icons/vsc'
import { NavLink } from 'react-router'
import PhoneSideBar from './PhoneSideBar'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { IoMdClose } from 'react-icons/io'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header className="flex  justify-between  items-center">
            <h1 className="text-2xl   font-semibold text-zinc-100 flex gap-1 "><GiCubeforce size={40}
                className="text-primary" /> <span className="self-end">Votex</span></h1>

            <nav className="md:flex hidden flex-1 justify-between   items-center ">
                <ul className="flex gap-7  m-auto text-sm  text-zinc-400 *:cursor-pointer">

                    <li className="text-zinc-50">Home</li>
                    <li className="hover:text-zinc-50 transition-colors ease-in-out">About</li>
                    <li className="hover:text-zinc-50 transition-colors ease-in-out">Contact</li>
                    <li className="hover:text-zinc-50 transition-colors ease-in-out">Services</li>
                </ul>
                <div className="flex gap-3">
                    <NavLink to={"/login"} className=" text-zinc-50 px-4 py-1.5 hover:bg-gradient-to-br hover:from-primary hover:to-secondary rounded-2xl  transition-all">Login</NavLink>
                    <button className="bg-primary bg-gradient-to-tl from-primary to-secondary  text-zinc-50 px-4 py-1.5 rounded-2xl">Sign Up</button>
                </div>
            </nav>

            {!isOpen ? <VscListSelection onClick={() => setIsOpen(prev => !prev)} size={30} className="text-zinc-50 cursor-pointer md:hidden z-[100]" />
                : <IoMdClose onClick={() => setIsOpen(prev => !prev)} size={30} className="text-zinc-50 cursor-pointer md:hidden z-[100]" />}
            <AnimatePresence>
                {isOpen && <PhoneSideBar />}
            </AnimatePresence>
        </header>
    )
}
