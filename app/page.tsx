"use client";

import './page.css';
import { useEffect, useState } from "react";

const EVENT_DATE = '2024-10-05T00:00:00';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Home() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({days: 0, hours: 0, minutes: 0, seconds: 0});
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const difference = +new Date(EVENT_DATE) - +new Date();
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  if (!isClient) {
    return null;
  }

  return (
    <div className="invitation-page">
      <div className="banner">
        <span>GIULIANA</span>
        <p>MIS 15 AÑOS</p>
      </div>

      <div className="countdown-container">
        <div className="countdown-message">
          ¡Te espero para festejar este gran momento de mi vida!
        </div>
        <div className="countdown">
          <div className="countdown-item">{timeLeft.days}<span>Días</span></div>
          <div className="countdown-item">:</div>
          <div className="countdown-item">{timeLeft.hours}<span>HS</span></div>
          <div className="countdown-item">:</div>
          <div className="countdown-item">{timeLeft.minutes}<span>MIN</span></div>
          <div className="countdown-item">:</div>
          <div className="countdown-item">{timeLeft.seconds}<span>SEG</span></div>
        </div>
      </div>

      <div className="party">
        <p className="emoji">🎊</p>
        <p className='title'>FIESTA</p>
        <p>Sábado 25 de noviembre de 21:00 a 05:00 hs</p>
        <p>Salón Campo Norte, Ruta E53, Córdoba.</p>
        <p>Clickeá en el botón de abajo y encontrá las indicaciones para llegar,</p>
        <p>¡nos vemos!😉</p>
        <img className="confetti" src="confetti.gif"></img>

        <button>CÓMO LLEGAR</button>
      </div>

      <div className="gallery">
        <img src="giuli2.jpeg"></img>
        <img src="giuli3.jpeg"></img>
        <img src="giuli3.jpeg"></img>
        <img src="giuli2.jpeg"></img>
      </div>

      <div className="countdown-container dresscode">
        <p className="emoji">👗👔</p>
        <p style={{fontSize: 30}}>DRESS CODE: <b>Elegante</b></p>
      </div>

      <div className="ig">
        <img className="emoji" src="icono-instagram.svg"></img>
        <span>@giuu.svariatii</span>
        <p>¡Preparate para esta gran fiesta!</p>
        <p>Seguime en mi cuenta de Instagram y etiquetame en tus fotos y videos.</p>
        <button>VER INSTAGRAM</button>
      </div>

      <div className="countdown-container gift">
        <p className="emoji">🎁</p>
        <p>El mejor regalo es que vengas,</p>
        <p>pero si deseás regalarme algo, podés colaborar con mis sueños y anhelos✨</p>
        <p>¡Muchas gracias!</p>
        <button>HACER UN REGALO</button>
      </div>

      <div className="countdown-container">
        <p style={{fontSize: 25}}>¡Gracias por acompañarme en este momento tan importante!</p>
      </div>

    </div>
  );
}
