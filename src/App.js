import "./App.css";
import { useEffect, useState } from "react";

import Navbar from "./components/navbar/navbar.component";
import Hero from "./components/hero/hero.component";
import Content from "./components/content/content.component";
import Footer from "./components/footer/footer.component";

import image from './components/content/01.png';
import image2 from './components/content/02.png';
import image3 from './components/content/03.png';


function App() {

  const reverseContainer = {
    direction: "rtl",
  };

  const textBeforeStyle = {
    left: '9.8rem',
  };

  const textStyle = {
    direction: "ltr",
  }


  const pictureStyle = {
    margin: 'auto auto auto -9rem',
  }

  const [activeSection, setActiveSection] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const sections = document.querySelectorAll('section');

    // Find the current active section based on scroll position
    let currentSection = 0;
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionBottom = sectionTop + sectionHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        currentSection = i;
        break;
      }
    }

    // Update the active section state
    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const sections = [
    {
      textBefore: "01",
      textAbove: "Get Started",
      header: "What level of hiker are you?",
      mainText: "Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?",
      image: image
    },
    {
      textBefore: "02",
      textAbove: "Hiking Essentials",
      header: "Picking the right Hiking Gear!",
      mainText: "The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have. Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe if they get sweaty or wet.",
      image: image2
    },
    {
      textBefore: "03",
      textAbove: "Where you go is the key",
      header: "Understand Your Map & Timing",
      mainText: "To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction.",
      image: image3
    }
  ];


  return (
    <div className="App">
      <div className="navbar-container">
        <Navbar />
      </div>
      <Hero />
      <div className="all-content">
        <Content
          textBefore="01"
          textAbove="GEt Started"
          header="What level of hiker are you?"
          mainText="Determining what level of hiker you are can be an important tool when planning future
      hikes. This hiking level guide will help you plan hikes according to different hike
      ratings set by various websites like All Trails and Modern Hiker. What type of hiker
              are you – novice, moderate, advanced moderate, expert, or expert backpacker?"
          image={image}
          side1="right"
          side2="left"
        />
        <Content
          textBefore="02"
          textAbove="Hiking Essentials"
          header="Picking the right Hiking Gear!"
          mainText="The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.
    Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet."
          image={image2}
          side1="right"
          side2="left"
          reverseContainer={reverseContainer}
          textBeforeStyle={textBeforeStyle}
          textStyle={textStyle}
          pictureStyle={pictureStyle}
        />
        <Content

          textBefore="03"
          textAbove="where you go is the key"
          header="Understand Your Map & Timing"
          mainText="To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction.."
          image={image3}
          side1="right"
          side2="left"

        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
