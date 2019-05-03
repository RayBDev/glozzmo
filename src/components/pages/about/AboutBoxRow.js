import React from "react"

const AboutBoxRow = ({ cardContent, rowNumber }) => {
  let cardArray = []
  let colorCode = 1

  for (let key in cardContent) {
    let iconClassName = `fas fa-${cardContent[key].icon} fa-3x`
    let cardColorClass
    if (colorCode % 2 !== 0) {
      cardColorClass = "card bg-danger text-white text-center"
    } else {
      cardColorClass = "card bg-dark text-white text-center"
    }

    cardArray.push(
      <div key={Math.random()} className="col-md-4">
        <div className={cardColorClass}>
          <div className="card-body">
            <i className={iconClassName} />
            <h3>{cardContent[key].heading}</h3>
            {cardContent[key].body}
          </div>
        </div>
      </div>
    )

    colorCode++
  }

  let cardRow = cardArray.filter((card, index) => {
    if (rowNumber === "1" && index < 3) return card
    else if (rowNumber === "2" && index > 2 && index < 6) return card
    else return null
  })

  return <div className="row mb-4">{cardRow}</div>
}

export default AboutBoxRow
