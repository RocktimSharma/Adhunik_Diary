
import { Clients } from "@/components/home/Clients";
import { Contact } from "@/components/home/Contact";
import { Header } from "@/components/home/Header";
import { Services } from "@/components/home/Services";
import { TechStack } from "@/components/home/TechStack";
import { Values } from "@/components/home/Values";
import { useState,useEffect,useRef } from "react";


export default function Home() {

  // const [centeredCardIndex, setCenteredCardIndex] = useState(null);
  // const cardsRef = useRef([]);

  // useEffect(() => {

  //   const handleScroll = () => {
 
  //     const viewportHeight = window.innerHeight;
  //     const cardPositions = cardsRef.current.map((card) => {
  //       const rect = card.getBoundingClientRect();
  //       const cardTop = rect.top;
  //       const cardBottom = rect.bottom;
  //       return { top: cardTop, bottom: cardBottom };
  //     });

  //     // Find the index of the card that is centered
  //     const centeredIndex = cardPositions.findIndex(
  //       ({ top, bottom }) => top <= viewportHeight/2  && bottom >= viewportHeight  /2    );

  //     setCenteredCardIndex(centeredIndex);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   // Initial call to handleScroll to set the initial centered card
  //   handleScroll();

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  return (
    <main className="">
      <Header/>
      <Values/>
      <Services/>
    
      <Contact/>
     
    </main>
  );
}