import Link from "next/link";
import {Button} from "@nextui-org/react";
import "./header.css";


export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 shadow-sm bg-gray-900 text-white md:px-6 lg:px-8">
        

       

        <Link className="flex items-center gap-2" href="#">
        
          <span className="text-xl font-semibold">TERANGA CONSULTING</span>
        </Link>
        <nav className="hidden space-x-4 md:flex">
          <Link className="text-sm font-medium hover:underline text-gray-300 hover:text-gray-100" href="#services">
            Services
          </Link>
         
          <Link className="text-sm font-medium hover:underline text-gray-300 hover:text-gray-100" href="#about">
            À propos
          </Link>
          
        </nav>
        

        <Link className="bg-gray-800 text-gray-300 hover:bg-gray-700"  href="#contact">
          Contactez nous
        </Link>
      </header>
  );
}
