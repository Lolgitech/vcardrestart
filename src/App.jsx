import React from "react";
import Hero from "./Components/Hero.jsx";
import Card from "./Components/Card.jsx";
//import Contacts from "./Components/Contacts.jsx";
import data from "./data.jsx";
import Navbar from "./Components/navbar.jsx";
import styles from "./Styles/style.css?innline"

export default function App() {
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
      <Hero />;
      <section className="cards-list">{cards}</section>
    </div>
  );
}
