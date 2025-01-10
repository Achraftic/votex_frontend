import { GiCubeforce } from 'react-icons/gi'
import { Button } from './ui/button'
import { IoIosArrowRoundForward } from 'react-icons/io'


export default function Hero() {


    return (
        <main className="mt-16 flex gap-8 md:flex-nowrap flex-wrap      lg:px-3 ">
            <div className="w-full flex flex-col gap-5  ">
                <div className=" bg-purple-200/20 rounded-full bg-opacity-5 w-max px-5  text-zinc-50    py-1.5  to-secondary ">
                    <h3 className="flex items-center gap-1 font-medium">Get in touch Now <IoIosArrowRoundForward size={20} /> </h3>
                </div>

                <h1 className="lg:text-8xl sm:text-7xl text-6xl  font-bold text-zinc-50  lg:leading-[1.1] flex items-center flex-wrap  ">
                    Voting<GiCubeforce className="text-secondary mx-4" />Made Easy
                </h1>
                <Button variant="default" className="w-36 font-semibold ">
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
    )
}
