import Image from "next/image";
import "./footer.css";
export default function Footer() {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <aside className="footerAside">
       
        <p>Copyright Teranga Consulting 2022</p>
        <p>19 AVENUE DE NORVEGE </p>
        <p>91140 VILLEBON-SUR-YVETTE</p>
        <p>contact@teranga-consulting.fr</p>
        <p>01 85 41 01 77</p>
      </aside>
      
    </footer>
  );
}
