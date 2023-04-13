import React from "react";
import Image from "next/image";
import Link from "next/link";
import routes from "@/routes/route";

const Header = () => {




  return (
    <header className="main__header">
        <Link href='/' className="logo">
            <Image src='/img/logo2.png' alt='logo' width={50} height={50} priority></Image>
        </Link>
        <nav className="nav__header">
            <ul>
                <Link href='/'> <li>Inicio</li></Link>
                <Link href='/about'><li>Sobre UVI</li></Link>
                <li>Servicios</li>
                <li>Planes</li>
                <li>Contacto</li>
            </ul>
        </nav>
    </header>);
};

export default Header;