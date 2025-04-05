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
  const menuRef = useRef<HTMLDivElement>(null);
  // Referencia al menú desplegable

  const handleOptionClick = () => {
    setIsOpen(false); // Cierra el menú al seleccionar una opción
  };

  // Cierra el menú si se hace clic fuera de él
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

          {/* Menú hamburguesa (solo en mobile) */}
          <NavigationMenuItem className="md:hidden flex ">
            <button onClick={() => setIsOpen(!isOpen)}>
              <Menu className="w-6 h-6" />
            </button>

            {isOpen && (
              <div ref={menuRef} className="MenuAbierto">
                <ul>
                  <li>
                    <NavigationMenuLink asChild>
                      <button
                        className="OpcionMenu"
                        onClick={handleOptionClick}
                      >
                        Quienes somos
                      </button>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <button
                        className="OpcionMenu"
                        onClick={handleOptionClick}
                      >
                        Ubicacion
                      </button>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <button
                        className="OpcionMenu"
                        onClick={handleOptionClick}
                      >
                        Servicios
                      </button>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <button
                        className="OpcionMenu"
                        onClick={handleOptionClick}
                      >
                        Instalaciones
                      </button>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </div>
            )}
          </NavigationMenuItem>

          {/* Menú horizontal (solo en desktop) */}
          <NavigationMenuItem className="hidden md:flex gap-1 items-center">
            <NavigationMenuLink asChild className="!bg-transparent">
              <div>Quienes somos</div>
            </NavigationMenuLink>
            <NavigationMenuLink asChild className="!bg-transparent">
              <div>Ubicacion</div>
            </NavigationMenuLink>
            <NavigationMenuLink asChild className="!bg-transparent">
              <div>Servicios</div>
            </NavigationMenuLink>
            <NavigationMenuLink asChild className="!bg-transparent">
              <div>Instalaciones</div>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </div>
    </NavigationMenu>
  );
};

export default NavBar;
