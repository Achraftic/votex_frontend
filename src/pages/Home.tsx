import Hero from "../components/Hero";
import HowWork from "../components/HowWork";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";


export default function Home() {
    return (
        <div className="py-7 min-h-screen flex flex-col gap-20">
          
            <Hero />
            <Services />
            <HowWork />
            <Testimonial />
         
        </div>
    );
}
