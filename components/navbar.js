import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";


export default function Navbar(){
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    
    return(
        <nav className="navigation">
            <div className="logo">
                <Link href="/">
                    <img src="·" width={122}/>
                </Link>
            </div>
            <div className="hamburger"
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                }}
            >
                <span><FaBars style={{fontSize:'35px'}}/></span>
            </div>
            <div 
                className={
                    isNavExpanded ? "menu-nav expanded" : "menu-nav"
                }
            >
                <span>
                    <Link href="#">
                        <span alt="Ms.Hopy Acordes" className="link-nav"
                            onClick={() => {
                                setIsNavExpanded(!isNavExpanded);
                            }} 
                        >Acordes</span>
                    </Link>
                </span>
                <span> 
                    <Link href="#">
                        <span alt="Ms.Hopy Cancioneros" className="link-nav"
                            onClick={() => {
                                setIsNavExpanded(!isNavExpanded);
                            }} 
                        >Cancioneros</span>
                    </Link>
                </span>
                <span>
                    <Link href="#">
                        <span alt="Ms.Hopy Juego" className="link-nav"
                            onClick={() => {
                                setIsNavExpanded(!isNavExpanded);
                            }} 
                        >¿Jugamos?</span>
                    </Link>
                </span>
                <span><Link href="/contacto"><span alt="Ms.Hopy contacto" className="link-nav"
                 onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                }} 
                >Contacto</span></Link></span>
            </div>          
           
        </nav>

    )
}