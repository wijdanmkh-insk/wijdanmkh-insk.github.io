import { useState } from "react";
import { navLinks } from "../../assets/generate/nav";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <h1 className="text-lg font-bold">TemanAkun</h1>

        {/* Tombol toggle untuk mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-xl"
        >
          ☰
        </button>

        {/* Menu links */}
        <ul
          className={`flex flex-col md:flex-row md:gap-6 absolute md:static left-0 w-full md:w-auto bg-gray-900 md:bg-transparent p-4 md:p-0 transition-all duration-200 ${
            menuOpen ? "top-12" : "top-[-300px]"
          }`}
        >
          {navLinks.map((link, idx) => (
            <li key={idx} className="flex items-center gap-2 py-2 md:py-0">
              {link.icon}
              <a
                href={link.href}
                className="hover:text-blue-400 transition-colors duration-150"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
