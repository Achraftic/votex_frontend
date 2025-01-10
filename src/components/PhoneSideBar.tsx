import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

export default function PhoneSideBar() {
    const sidebarVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.25,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    const transitionProps = {
        ease: "easeInOut",
        duration: 0.4,
    };

    return (
        <motion.div
            exit={{ width: "0%", borderRadius: "0px 0 0 0px",height:"0px" }}
            whileInView={{ width: "50%", borderRadius: "0 50px 50px 0",height:"100%" }}
            // animate={{ width: "50%", borderRadius: "0 50px 50px 0",height:"100%" }}
            className="fixed top-0 left-0 h-full w-16 md:hidden bg-primary z-50 overflow-hidden"
        >
            <motion.ul
                variants={sidebarVariants}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="flex flex-col gap-7 p-10 text-3xl text-zinc-100"
            >
                {["Home", "About", "Contact", "Services"].map((item, index) => (
                    <motion.li
                        key={index}
                        
                        variants={itemVariants}
                        transition={transitionProps}
                        className={cn("hover:text-background transition-colors cursor-pointer", index === 0 && "text-background")} 
                    >
                        {item}
                    </motion.li>
                ))}
            </motion.ul>
        </motion.div>
    );
}
