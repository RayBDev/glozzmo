import React from "react"

import AboutBoxRow from "./AboutBoxRow"

const AboutBoxes = () => {
  const cardContent = {
    card1: {
      icon: "building",
      heading: "Sample Heading",
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quos?",
    },
    card2: {
      icon: "bullhorn",
      heading: "Sample Heading",
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quos?",
    },
    card3: {
      icon: "comments",
      heading: "Sample Heading",
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quos?",
    },
    card4: {
      icon: "box",
      heading: "Sample Heading",
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quos?",
    },
    card5: {
      icon: "credit-card",
      heading: "Sample Heading",
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quos?",
    },
    card6: {
      icon: "coffee",
      heading: "Sample Heading",
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quos?",
    },
  }
  return (
    <section id="about-boxes" className="p-5">
      <div className="container">
        <AboutBoxRow cardContent={cardContent} rowNumber="1" />
        <AboutBoxRow cardContent={cardContent} rowNumber="2" />
      </div>
    </section>
  )
}

export default AboutBoxes
