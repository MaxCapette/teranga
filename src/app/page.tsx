import About from "@/components/about/about";
import ContactPage from "@/components/contact/contact";
import Icons from "@/components/icons/icons";
import Intro from "@/components/intro/intro";
import Services from "@/components/services/services";
import Unlock from "@/components/unlock/unlock";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Intro />
      <Icons />
      <Unlock />  
       <Services />
      <About /> 
   
      <ContactPage />
    </main>
  );
}
