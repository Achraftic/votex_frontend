import { useEffect, useRef } from 'react'
import { services } from '../data'
import { cn } from '../lib/utils'
import { motion, useInView } from 'framer-motion'
export default function Services() {
    const animation = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.25
            }
        }
    }
    const ref = useRef(null)
    const isInView = useInView(ref,{once:true})
    useEffect(() => {
        console.log("Element is in view: ", isInView)
    }, [isInView])


    return (
        <section ref={ref} className="py-8">
            <div className="mx-auto w-full max-w-7xl  sm:px-6 lg:px-8">
                <h2 className="text-3xl text-zinc-100 font-bold mb-14 ">Why Choose Votex?</h2>
                <motion.div variants={animation} initial="hidden" animate={isInView ? "show" : "hidden"} className="grid grid-cols-1 lg:grid-cols-3  md:grid-cols-2  gap-10">
                    {services.map((feature, index) => (
                        <motion.div  variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} key={index} className={cn(" p-5 rounded-xl    cursor-pointer", index === 0 ? "rotate-6 bg-gradient-to-tr rounded-lg from-secondary to-primary " : "bg-primary/5")}>
                            <motion.span className="rounded-full bg-primary block w-max p-1.5">

                                <feature.icon className="h-7 w-7 text-zinc-50  " />
                            </motion.span>
                            <h3 className={cn("text-xl font-semibold mb-2 mt-6 ", index === 0 ? "text-zinc-800" : "text-zinc-200")} >{feature.title}</h3>
                            <p className={cn("text-zinc-400 w-3/4", index === 0 ? "text-zinc-600" : "")} >{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
