import React from "react"
import "./card.css"
const Card = ({ title }) => {
  return (
    <div className="card-box bg-bg-card-purple place-items-center place-content-center flex  rounded-md">
      <h1 className="font-bold text-lg"> {title}</h1>
    </div>
  )
}

export default Card
