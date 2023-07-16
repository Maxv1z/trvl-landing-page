import "./App.css";

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
    margin: "auto auto auto 1em",
    left: '0rem',

  };

  const textStyle = {
    direction: "ltr",
  }


  const pictureStyle = {
    margin: 'auto auto auto -9rem',
  }




  return (
    <div className="App">
      <div className="hero-container">
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
