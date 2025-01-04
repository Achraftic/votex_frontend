

export default function Testimonial() {
    return (
        <section className="py-8 ">
            <div className="mx-auto w-full  px-2 ">
                <h2 className="text-3xl text-zinc-100 font-bold mb-12 ">What Our Users Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div className="bg-primary/5 p-6 rounded-lg shadow-md text-center">
                        <span className="bg-gradient-to-br from-primary to-secondary h-14 w-14 rounded-full  mb-4 block m-auto"></span>
                        <p className="text-zinc-300 italic">"Votex made our voting process so much more secure and transparent. We could see every vote in real-time, and the blockchain technology gave us confidence in the results."</p>
                        <p className="text-zinc-100 mt-4 font-semibold">John Doe</p>
                        <p className="text-zinc-400">CEO, TechCorp</p>
                    </div>
                    <div className="bg-primary/5 p-6 rounded-lg shadow-md text-center">
                        <span className="bg-gradient-to-bl from-yellow-500 to-secondary h-14 w-14 rounded-full  mb-4 block m-auto"></span>
                        <p className="text-zinc-300 italic">"As a government agency, we needed a trusted and decentralized voting system. Votex exceeded our expectations in every way."</p>
                        <p className="text-zinc-100 mt-4 font-semibold">Jane Smith</p>
                        <p className="text-zinc-400">Director of Operations, GovVote</p>
                    </div>
                    <div className="bg-primary/5 p-6 rounded-lg shadow-md text-center">
                        <span className="bg-gradient-to-tr from-orange-600 to-secondary h-14 w-14 rounded-full  mb-4 block m-auto"></span>
                        <p className="text-zinc-300 italic">"The platform was incredibly user-friendly, and I felt safe voting in the election. Votex is the future of voting."</p>
                        <p className="text-zinc-100 mt-4 font-semibold">Mark Taylor</p>
                        <p className="text-zinc-400">Voter, Global Election 2024</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
