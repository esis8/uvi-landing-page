import React, { useState, useEffect } from "react";

const ScrollToTop = () => {

    const [isScrollActive, setIsScrollActive] = useState(false);

    useEffect(()=>{
        const handleScroll = ()=>{
            if(window.pageYOffset>400){
                setIsScrollActive(true)
            }else{
                setIsScrollActive(false)
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () =>{
            window.removeEventListener("scroll", handleScroll);
        }

    }, [])


    const handleArrowClick = ()=>{
        const scropllTop = () =>{
            const yPos = window.pageYOffset;
            if(yPos >0){
                window.scrollTo(0, yPos - 20);
                setTimeout(scropllTop, 16);
            }
        };

        scropllTop();
    }

  return (
    <button className="scroll__top" onClick={handleArrowClick} style={{display: isScrollActive ? 'block' : 'none'}}>
        <i className="bi bi-arrow-up-short"></i>
    </button>
    );
};

export default ScrollToTop;