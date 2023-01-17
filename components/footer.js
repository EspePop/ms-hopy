import Link from "next/link"
import { AiFillYoutube, AiFillInstagram} from "react-icons/ai"  
import { FaEnvelopeOpenText, FaFacebookF } from "react-icons/fa"

export default function Footer(){
    return(
        <footer>
            <div className="footer-redes">
                <span className="">
                    <span alt="ESCAPE ROOM BOBAS facebook" href="https://www.facebook.com/people/mshopy/100023066592648/" className="f-redes" target="_blank" rel="noreferrer">
                        <span className="f-icon"> <FaFacebookF className="icon-rede" style={{fontSize: '50px', borderRadius: '50%', padding: '10px', border: '2px solid #d28764'}}/></span>
                    </span> 
                </span>
                <span className="">
                    <span alt="ESCAPE ROOM BOBAS YouTube" href="https://www.youtube.com/channel/UCHNqN7RT4KtpcHz5r7lR-HQ/videos?view=0&sort=da" className="f-redes" target="_blank" rel="noreferrer">
                        <span className="f-icon"> <AiFillYoutube style={{fontSize: '50px', borderRadius: '50%', padding: '10px', border: '2px solid #d28764'}}/></span>
                    </span> 
                </span>
                <span className="">
                    <span alt="ESCAPE ROOM BOBAS instagram" href="https://www.instagram.com/ms.hopy/?igshid=fuejswhkvxw4" className="f-redes" target="_blank" rel="noreferrer">
                        <span className="f-icon"> <AiFillInstagram style={{fontSize: '50px', borderRadius: '50%', padding: '10px', border: '2px solid #d28764'}}/></span>
                    </span> 
                </span>  
            </div>
            <div className="footer-info">
                <div className="f-logo">
                    <Link alt="Ms. Hopy" href="/" >
                        <span className="f-link"> <img src="images/logos/escape_room_bodas_logo_blanco.svg" className="logo-footer"/></span>
                    </Link>
                </div>
                <div className="f-contacto">            
                     <span><span alt="Ms. Hopy email" href="mailto:missyhope82@gmail.com" className="f-link"><span className="f-icon"> <FaEnvelopeOpenText/></span> missyhope82@gmail.com </span> </span>
                </div>
                
                <div className="f-txt">
                    <p className="txt-p">@ms.hopy. Todos los derechos reservados © 2022 Diseñado por Esperanza Martín</p>
                </div>  
            </div>            
        </footer>

    )
}