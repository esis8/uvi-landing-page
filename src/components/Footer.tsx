import React from "react";
import Link from "next/link";
import Image from "next/image";



const Footer = () => {
  return (
    <div className="main__footer">
        <Link href='/' className="logo__footer">
            <Image src='/img/logo2.png' alt='logo' width={50} height={50} priority></Image>
            <p className="rights">©2023 Uvi - info@uvi.com.ar</p>
        </Link>
        <div className="social__media">
            <Link href='https://github.com/esis8' target="_blank"><i className="bi bi-github" ></i></Link>
            <Link href='https://github.com/shito8' target="_blank"><i className="bi bi-github" ></i></Link>
            <Link href='https://www.linkedin.com/in/elio-esis-343a52a9' target="_blank"><i className="bi bi-linkedin"></i></Link>
            
        </div>
    </div>
    );
};

export default Footer;