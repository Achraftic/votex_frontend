
export default function  HowWork() {
    return (
        <section className="py-8  bg-gradient-to-br rounded-lg from-primary to-secondary/70">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl text-zinc-100 font-bold mb-12">How Votex Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div className="bg-background p-9 rounded-lg shadow-md text-center">
                        <h2 className="text-6xl text-zinc-100 font-semibold mb-1 ">01</h2>
                        <span className="bg-gradient-to-br from-primary to-secondary h-3 rounded-full w-3 mb-4 block m-auto"></span>
                        <h4 className="text-xl text-zinc-100 font-medium mb-2">Register</h4>
                        <p className="text-zinc-300/80 text-xs">Sign up on the platform and create your secure account to start participating in the voting process.</p>
                    </div>
                    <div className="bg-background p-9 rounded-lg shadow-md text-center">
                        <h2 className="text-6xl text-zinc-100 font-semibold mb-1 ">02</h2>
                        <span className="bg-gradient-to-br from-primary to-secondary h-3 rounded-full w-3 mb-4 block m-auto"></span>
                        <h4 className="text-xl text-zinc-100 font-medium mb-2">Cast Your Vote</h4>
                        <p className="text-zinc-300/80 text-xs">Browse through the available polls and cast your vote securely using the decentralized system.</p>
                    </div>
                    <div className="bg-background p-9 rounded-lg shadow-md text-center">
                        <h2 className="text-6xl text-zinc-100 font-semibold mb-1 ">03</h2>
                        <span className="bg-gradient-to-br from-primary to-secondary h-3 rounded-full w-3 mb-4 block m-auto"></span>
                        <h4 className="text-xl text-zinc-100 font-medium mb-2">View Results</h4>
                        <p className="text-zinc-300/80 text-xs">Watch the results come in real-time with transparency and without any interference in the process.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
