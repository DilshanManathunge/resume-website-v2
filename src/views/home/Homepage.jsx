import React from "react"
import suit from "../../assets/home-suit.svg"
import name from "../../assets/name.svg"
const Homepage = () => {
  return (
    <div className="h-screen place-content-center grid grid-cols-3">
      <div>
        <img src={suit} alt="suitman" />
      </div>
      <div className="col-span-2">
        <p className="text-txt-teal pb-10 text-xl">Hello there! the name is</p>
        <img src={name} alt="name" />
        <p className="text-txt-teal pt-10 text-2xl">
          Full-stack Developer | AI/ML Enthusiast | Human-Centered designer
        </p>
      </div>
    </div>
  )
}

export default Homepage
