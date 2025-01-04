import { services } from '../data'
import { cn } from '../lib/utils'

export default function Services() {

    return (
        <section className="py-8">
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
    )
}
