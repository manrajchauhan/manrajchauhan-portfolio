import Image from "next/image";
import HeroSection from "./components/Hero";
import { OurProjects } from "./components/Projects";
import Example from "./components/favProjects";

export default function Home() {
  return (
    <>
    <div className="px-8 md:px-24 pb-12">
   <HeroSection/>
   <OurProjects/>
   </div>
   <Example/>
   <div className="px-8 md:px-24 pb-12">

   </div>
   </>
  );
}



