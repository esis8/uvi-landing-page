import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";


const Header = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const [display, setDisplay] = useState(false);

    const handleClickMenu = () =>{
        if(display){
            setOpenMenu(!openMenu)
            setTimeout(()=>{
                setDisplay(false)
            },500);
        }else{
            setDisplay(true)
            setTimeout(()=>{
                setOpenMenu(!openMenu)
            },50);
        }
       
    }

    const handleClickLinkMenu = ()=>{
        setOpenMenu(false)
        setTimeout(()=>{
            setDisplay(false)
        },500);
    }



  return (
    <header className="main__header">
        <Link href='/' className="logo">
            <Image src='/img/logo2.png' alt='logo' width={50} height={50} priority></Image>
        </Link>
        <nav className="nav__header">

            <ul className={`${openMenu ? 'open' : ''} ${display ? '' : 'display'}`}>
                <Link href='/' onClick={handleClickLinkMenu}> <li>Inicio</li></Link>
                <Link href='/about' onClick={handleClickLinkMenu}><li>Sobre UVI</li></Link>
                <Link href='/#services' onClick={handleClickLinkMenu}><li >Servicios</li></Link>
                <li>Planes</li>
                <li>Contacto</li>
            </ul>

            <div id="menu" onClick={handleClickMenu}>
                <button className={`button__menu  ${openMenu ? 'open' : ''}`} >
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
            </div>
        </nav>
    </header>);
};

export default Header;