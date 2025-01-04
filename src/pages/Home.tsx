import { GiCubeforce } from "react-icons/gi";
import { VscListSelection } from "react-icons/vsc";
import { IoIosArrowRoundForward } from "react-icons/io";

import { Button } from "../components/ui/button";
import { BarChart, TrendingUp, Lock, Shield } from 'lucide-react'; // Importing icons from react-feather
import { IoMdPeople } from "react-icons/io";
import { cn } from "../lib/utils";
const services = [
    {
        icon: BarChart, // Real-time Results
        title: "Real-time Results",
        description: "Watch votes come in live as participants make their choices.",
    },
    {
        icon: IoMdPeople, // Community Engagement
        title: "Community Engagement",
        description: "Foster discussions and gather insights from diverse perspectives.",
    },
    {
        icon: TrendingUp, // Trend Analysis
        title: "Trend Analysis",
        description: "Understand patterns and trends in voting behavior over time.",
    },
    {
        icon: Lock, // Secure Blockchain Voting
        title: "Secure Blockchain Voting",
        description: "Ensure transparency and integrity in each vote with blockchain technology.",
    },
    {
        icon: IoMdPeople, // Decentralized Voting
        title: "Decentralized Voting",
        description: "Empower voters with a decentralized system for maximum fairness.",
    },
    {
        icon: Shield, // Anonymous Voting
        title: "Anonymous Voting",
        description: "Protect voter privacy while maintaining transparency in the voting process.",
    },
];

export default function Home() {
    return (
        <div className="  rounded-lg py-7 min-h-screen">
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
                        <button className=" text-zinc-50 px-4 py-1.5 hover:bg-gradient-to-br hover:from-primary hover:to-secondary rounded-2xl  transition-all">Login</button>
                        <button className="bg-primary bg-gradient-to-tl from-primary to-secondary  text-zinc-50 px-4 py-1.5 rounded-2xl">Sign Up</button>
                    </div>
                </nav>

                <VscListSelection size={30} className="text-zinc-50 md:hidden" />
            </header>



            <main className="my-28 flex gap-8 md:flex-nowrap flex-wrap      lg:px-3 ">
                <div className="w-full flex flex-col gap-5  ">
                    <div className=" bg-purple-200/20 rounded-full bg-opacity-5 w-max px-5  text-zinc-50    py-1.5  to-secondary ">
                        <h3 className="flex items-center gap-1 font-medium">Get in touch Now <IoIosArrowRoundForward size={20} /> </h3>
                    </div>

                    <h1 className="lg:text-8xl sm:text-7xl text-6xl  font-bold text-zinc-50  lg:leading-[1.1] flex items-center flex-wrap  ">
                        Voting<GiCubeforce   className="text-secondary mx-4" />Made Easy
                    </h1>
                    <Button variant="default" className="w-36 ">
                        Vote Now
                    </Button>
                    <div className="flex gap-3 items-center ">
                        <div className="bg-gradient-to-br from-primary to-secondary h-0.5 rounded-full w-16"></div>  <h4 className="text-zinc-300 text-base">Vote in Transparency </h4>
                    </div>



                </div>
                <div className="  flex-1 text-base md:mt-10  ">

                    <p className="text-zinc-300 w-96    ">A blockchain-based voting system that ensures transparency and security and is easy to use Designed for gouvrement and private organizations , and is open source </p>
                    <div className="flex gap-10 my-10 ">


                        <div className="fonts-bold text-zinc-100  text-5xl ">
                            <h1 className="font-medium">30+</h1>
                            <p className="text-base text-zinc-300">Paternship</p>
                        </div>
                        <div className="fonts-bold text-zinc-100  text-5xl ">
                            <h1 className="font-medium">30+</h1>
                            <p className="text-base text-zinc-300">Paternship</p>
                        </div>
                    </div>
                </div>


            </main>
            <section className="py-12">
                <div className="mx-auto w-full max-w-7xl  sm:px-6 lg:px-8">
                    <h2 className="text-3xl text-zinc-100 font-bold mb-12 ">Why Choose Votex?</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3  md:grid-cols-2  gap-10">
                        {services.map((feature, index) => (
                            <div key={index} className={cn(" p-5 rounded-xl    cursor-pointer", index === 0 ? "rotate-6 bg-gradient-to-tr rounded-lg from-secondary to-primary " : "bg-primary/5")}>
                                <span className="rounded-full bg-primary block w-max p-1.5">

                                    <feature.icon className="h-7 w-7 text-zinc-50  " />
                                </span>
                                <h3 className={cn("text-xl font-semibold mb-2 mt-6 ", index === 0 ? "text-zinc-800" : "text-zinc-200")} >{feature.title}</h3>
                                <p className={cn("text-zinc-400 w-3/4", index === 0 ? "text-zinc-600" : "")} >{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-12 bg-gradient-to-br rounded-lg from-primary to-secondary/70">
                <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl text-zinc-100 font-bold mb-12">How Votex Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <div className="bg-zinc-800 p-9 rounded-lg shadow-md text-center">
                            <h2 className="text-6xl text-zinc-100 font-semibold mb-1 ">01</h2>
                            <span className="bg-gradient-to-br from-primary to-secondary h-3 rounded-full w-3 mb-4 block m-auto"></span>
                            <h4 className="text-xl text-zinc-100 font-medium mb-2">Register</h4>
                            <p className="text-zinc-300/80 text-xs">Sign up on the platform and create your secure account to start participating in the voting process.</p>
                        </div>
                        <div className="bg-zinc-800 p-9 rounded-lg shadow-md text-center">
                            <h2 className="text-6xl text-zinc-100 font-semibold mb-1 ">02</h2>
                            <span className="bg-gradient-to-br from-primary to-secondary h-3 rounded-full w-3 mb-4 block m-auto"></span>
                            <h4 className="text-xl text-zinc-100 font-medium mb-2">Cast Your Vote</h4>
                            <p className="text-zinc-300/80 text-xs">Browse through the available polls and cast your vote securely using the decentralized system.</p>
                        </div>
                        <div className="bg-zinc-800 p-9 rounded-lg shadow-md text-center">
                            <h2 className="text-6xl text-zinc-100 font-semibold mb-1 ">03</h2>
                            <span className="bg-gradient-to-br from-primary to-secondary h-3 rounded-full w-3 mb-4 block m-auto"></span>
                            <h4 className="text-xl text-zinc-100 font-medium mb-2">View Results</h4>
                            <p className="text-zinc-300/80 text-xs">Watch the results come in real-time with transparency and without any interference in the process.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-12 ">
                <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl text-zinc-100 font-bold mb-12 ">What Our Users Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <div className="bg-primary/5 p-6 rounded-lg shadow-md text-center">
                            <p className="text-zinc-300 italic">"Votex made our voting process so much more secure and transparent. We could see every vote in real-time, and the blockchain technology gave us confidence in the results."</p>
                            <p className="text-zinc-100 mt-4 font-semibold">John Doe</p>
                            <p className="text-zinc-400">CEO, TechCorp</p>
                        </div>
                        <div className="bg-primary/5 p-6 rounded-lg shadow-md text-center">
                            <p className="text-zinc-300 italic">"As a government agency, we needed a trusted and decentralized voting system. Votex exceeded our expectations in every way."</p>
                            <p className="text-zinc-100 mt-4 font-semibold">Jane Smith</p>
                            <p className="text-zinc-400">Director of Operations, GovVote</p>
                        </div>
                        <div className="bg-primary/5 p-6 rounded-lg shadow-md text-center">
                            <p className="text-zinc-300 italic">"The platform was incredibly user-friendly, and I felt safe voting in the election. Votex is the future of voting."</p>
                            <p className="text-zinc-100 mt-4 font-semibold">Mark Taylor</p>
                            <p className="text-zinc-400">Voter, Global Election 2024</p>
                        </div>
                    </div>
                </div>
            </section>



        </div>
    );
}
