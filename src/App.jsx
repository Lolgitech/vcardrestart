import React from "react";
import Hero from "./Components/Hero.jsx";
import Card from "./Components/Card.jsx";
//import Contacts from "./Components/Contacts.jsx";
import data from "./data.jsx";
import Navbar from "./Components/navbar.jsx";

export default function App() {
  // <Hero />;
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        item={item}
        // or {...item}


        // img={item.coverImg}
        // rating={item.stats.rating}
        // reviewCount={item.stats.reviewCount}
        // location={item.location}
        // title={item.title}
        // price={item.price}
        // openSpots={item.openSpots}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <section className="cards-list">{cards}</section>
    </div>
  );
}
