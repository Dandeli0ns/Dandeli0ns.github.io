import { Button, DarkThemeToggle, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <Navbar fluid rounded>
      <NavbarBrand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </NavbarBrand>
      <NavbarCollapse>
        <NavbarLink href="/" active>
          Home
        </NavbarLink>
        <Navbar.Link><Link to='/'>About</Link></Navbar.Link>
        <Navbar.Link><Link to='/services'>Services</Link></Navbar.Link>
        <Navbar.Link><Link to='/pricing'>Pricing</Link></Navbar.Link>
        <Navbar.Link><Link to='/contact'>Contact</Link></Navbar.Link>
      </NavbarCollapse>
      <DarkThemeToggle />
    </Navbar>
  );
}