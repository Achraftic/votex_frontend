import { GiCubeforce } from "react-icons/gi";
import { VscListSelection } from "react-icons/vsc";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BarChart2, Users, TrendingUp } from 'lucide-react'
import { Button } from "../components/ui/button";
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
                        Voting<GiCubeforce size={100} className="text-secondary mx-4" />Made Easy
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
            <section className="py-16">
                <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-12 text-center">Why Choose VoteHub?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: BarChart2, title: "Real-time Results", description: "Watch votes come in live as participants make their choices." },
                            { icon: Users, title: "Community Engagement", description: "Foster discussions and gather insights from diverse perspectives." },
                            { icon: TrendingUp, title: "Trend Analysis", description: "Understand patterns and trends in voting behavior over time." },
                        ].map((feature, index) => (
                            <div key={index} className="text-center">
                                <feature.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
