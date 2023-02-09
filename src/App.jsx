import React from "react";
// import Hero from "./Components/Hero.jsx";
// import Card from "./Components/Card.jsx";
import Contact from "./Components/Contacts.jsx";
import felix from "./assets/pictures/felix.png";
import fluffykins from "./assets/pictures/fluffykins.png";
import mrWhiskerson from "./assets/pictures/mr-whiskerson.png";
import PortraitTest from "./assets/pictures/PortraitTest.jpg";

export default function App() {
  return (
    <div className="Contacts">
      <Contact
        img={felix}
        name="bob"
        Phone="12345678"
        Email="something@gmail.com"
        Quote='Quote: "to mjau or not to mjau"'
      />
      <Contact
        img={fluffykins}
        name="alex"
        Phone="88889999"
        Email="something@gmail.com"
        Quote='Quote: "Catnip does the trick"'
      />
      <Contact
        img={mrWhiskerson}
        name="jon"
        Phone="44447777"
        Email="something@gmail.com"
        Quote='Quote: "Paws for a recap"'
      />
      <Contact
        img={PortraitTest}
        name="Remi"
        Phone="55553333"
        Email="something@gmail.com"
        Quote='Quote: "rock by rock, I build my castle"'
      />
    </div>
  );
}
