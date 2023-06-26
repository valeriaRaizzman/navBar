import React from 'react';
import { navLinks } from '../constant';

function NavBar({ style }) {
  return(
    <header>
      <nav className="flex w-screen bg-pink-950 justify-between items-center px-7 h-24 fixed bg-opacity-70 backdrop-blur-sm">
        <h1 className="font-bold text-2xl">
          <span className="text-blue-200">👩‍💻 Valeria Raizman</span>
        </h1>

        <ul className="flex lg:flex-row flex-col lg:gap-10 font-bold text-xl">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="hover:scale-125 transition-all duration-300"
            >
              <a href={link.url}>{link.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
