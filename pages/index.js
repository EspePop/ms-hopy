import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>@ms.hopy</title>
        <link rel="icon" href="/favicon.ico" 
          width={4}
          height={4}
          priority />       
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet"/>
    </Head>
    <body>        
        <a id="up"></a> 
        <div class="row">
            <div id="arrowUp">
                <a href="#up">
                    <box-icon type='solid' name='hand-up'>
                        <img src="images/arrowUp.png" alt="up" title="arriba" />
                    </box-icon>
                </a>
            </div>                
        </div> 
        <div class="container"> 
            <div class="row"> 
                <div class="header col-md-12">
                    <p>CANCIONES PARA UKELELE by @ms.hopy</p>
                </div>
            </div>
            <div class="row">
                <div class="sec1 col-lg-6 col-md-12 col-sm-10">                    
                    <h1>Bienvenid@s</h1>
                    <p>
                        ¡Hola a tod@s! Gracias por visitarme, 
                        ¿qué encotrareis en @ms.hopy...? <br/>
                        Cancioneros, tiendas de ukeleles, aprender los acordes,<br/>
                        tipos de ukeleles... ¡incluso podemos jugar!

                    </p>                                   
                </div>
                <div class="stage">
                    <div class="div" id="chords">
                        <a class="a" href="chords.html">
                            <p class="p">Acordes</p>
                        </a>
                    </div>
                    <div class="div" id="contact">
                        <a class="a" href="spanish_songs.html">
                            <p class="p">Cancionero español</p>
                        </a>
                    </div>
                    <div class="div" id="gallery">
                        <a class="a" href="english_songs.html">
                            <p class="p">Cancionero inglés</p>
                        </a>
                    </div>
                    <div class="div" id="gallery">
                        <a class="a" href="infantiles.html">
                        <p class="p">Cancionero infantil</p>
                        </a>
                    </div>
                    <div class="div" id="gallery">
                        <a class="a" href="game.html">
                            <p class="p">¿Jugamos?</p>
                        </a>
                    </div>                   
                </div>                 
            </div> 
            <div class="row">    
                <div class="boxes box1 col-lg-3 col-md-6 col-sm-10">
                    <h3>Conociendo mi ukelele</h3>
                    <ul class="list-unstyled">
                        <li> 
                            <a href="miuke.html">Ya tengo mi ukelele...</a>
                        </li>
                        <li> 
                            <a href="chords.html">Los acordes</a>
                        </li>
                        <li> 
                            <a href="game.html">¿Jugamos?</a>
                        </li>
                    </ul>
                </div>
                <div class="boxes box2 col-lg-3 col-md-6 col-sm-10">
                    <a href="freak.html">
                        <h3>Mundo "FreaKelele"</h3>
                    </a>
                    <ul class="list-unstyled">
                        <li> ClubUkeMad</li>
                        <li> Otros clubes en España</li>
                        <li> Tiendas de ukelele en España</li>
                    </ul>
                </div>                
                <div class="boxes box3 col-lg-3 col-md-6 col-sm-10">
                    <h3>Cancioneros</h3>
                    <ul class="list-unstyled">
                        <li class=""> 
                            <a href="spanish_songs.html">Cancionero en español</a>
                        </li>
                        <li class=""> 
                            <a href="english_songs.html">Cancionero en inglés</a> 
                        </li>
                        <li class=""> 
                            <a href="infantiles.html">Cancionero infantil</a> 
                        </li>
                        <li class=""> 
                            <a href="adele.html">Canciones Adele</a> 
                        </li>
                        <li class=""> 
                            <a href="amy.html">Canciones Amy Winehouse</a> 
                        </li>
                        <li class=""> 
                            <a href="mclan.html">Canciones MClan</a> 
                        </li>
                        <li class=""> 
                            <a href="fito.html">Canciones Fito&Fitipaldis</a> 
                        </li>
                    </ul>
                </div>              
            </div>
            <div class="row sec4">
                <div class="contact col-lg-12 col-md-12 col-sm-12">
                    <h2>Contacto</h2>
                    <p>
                        Puedes ponerte en contacto conmigo; ya sea a través de mis redes, <br /> vía email: <a href="mailto:missyhope82@gmail.com?&subject=Una duda...">missyhope82@gmail.com</a>
                    </p>
                </div>
            </div>
        </div>
    </body>
    </>
  )
}
