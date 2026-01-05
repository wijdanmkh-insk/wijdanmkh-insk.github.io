import { useState } from "react";
import { navLinks } from "../../assets/generate/nav";
import { ArrowDownWideNarrow, ArrowUpNarrowWide } from "lucide-react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return(
    <nav className="navbar flex justify-between items-center bg-main">
      <div className="navbar-left">
        <a href="/" className="logo">
          Dan
        </a>
      </div>

      {/* Hamburger Menu Button */}
      <button
        className="md:hidden text-primary text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <ArrowUpNarrowWide size={24} /> : <ArrowDownWideNarrow size={24} />}
      </button>

      {/* Navbar Center - Collapsible on Mobile */}
      <div className={`navbar-center ${isOpen ? "open" : ""}`}>
        <ul className="menu-container">
          {navLinks.map((link)=>
            <li key={link.name}>
              <a href={link.href} onClick={() => setIsOpen(false)}>
                {link.icon}
                <span>{link.name}</span>
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}
