import About from "@/components/about/about";
import ContactPage from "@/components/contact/contact";
import Intro from "@/components/intro/intro";
import Services from "@/components/services/services";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Intro />
      <About />
      <Services />
      <ContactPage />
    </main>
  );
}
