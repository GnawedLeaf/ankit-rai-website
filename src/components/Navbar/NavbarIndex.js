import React from "react";
import { NavbarContainer, NavbarItem } from "./NavbarStyles";

const Navbar = () => {

  const NavbarItems = [
    {
      title: "Home",
      url: "/"
    },
    {
      title: "About",
      url: "/about"
    },
    {
      title: "Experiences",
      url: "/experiences"
    },
    {
      title: "Contact",
      url: "/contact"
    }
  ]

  return (
    <NavbarContainer>
      {NavbarItems.map((item, index) => {
        return (
          <NavbarItem href={item.url}>
            {item.title}
          </NavbarItem>
        )
      })}
    </NavbarContainer>
  )
}

export default Navbar;