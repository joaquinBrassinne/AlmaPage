import React, { useState, useRef, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Menu } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLLIElement>(null);

  const handleOptionClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        event.target instanceof Node &&
        !menuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <NavigationMenu className="NavigationMenu">
      <div className="w-full">
        <NavigationMenuList className="NavigationMenuList">
          {/* Logo */}
          <NavigationMenuItem>
            <NavigationMenuLink className="LogoAlma">
              <img src="/icons/logo.svg" alt="Logo" />
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Menú hamburguesa (mobile) */}
          <NavigationMenuItem className="md:hidden flex" ref={menuRef}>
            <button onClick={() => setIsOpen(!isOpen)}>
              <Menu className="w-6 h-6" />
            </button>

            {isOpen && (
              <div className="MenuAbierto">
                <ul className="font-patua">
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="#quienes-somos"
                        className="OpcionMenu"
                        onClick={handleOptionClick}
                      >
                        Quienes somos
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="#ubicacion"
                        className="OpcionMenu"
                        onClick={handleOptionClick}
                      >
                        Ubicacion
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="#servicios"
                        className="OpcionMenu"
                        onClick={handleOptionClick}
                      >
                        Servicios
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="#instalaciones"
                        className="OpcionMenu"
                        onClick={handleOptionClick}
                      >
                        Instalaciones
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </div>
            )}
          </NavigationMenuItem>

          {/* Menú desktop */}
          <NavigationMenuItem className="hidden md:flex gap-1 items-center font-patua">
            <NavigationMenuLink asChild className="!bg-transparent">
              <a href="#quienes-somos">Quienes somos</a>
            </NavigationMenuLink>
            <NavigationMenuLink asChild className="!bg-transparent">
              <a href="#ubicacion">Ubicacion</a>
            </NavigationMenuLink>
            <NavigationMenuLink asChild className="!bg-transparent">
              <a href="#servicios">Servicios</a>
            </NavigationMenuLink>
            <NavigationMenuLink asChild className="!bg-transparent">
              <a href="#instalaciones">Instalaciones</a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </div>
    </NavigationMenu>
  );
};

export default NavBar;
