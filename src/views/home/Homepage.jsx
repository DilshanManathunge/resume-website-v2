import React from "react"
import suit from "../../assets/home-suit.svg"
const Homepage = () => {
  return (
    <div className="h-screen place-content-center grid grid-cols-3">
      <div>
        <img src={suit} alt="suitman" />
      </div>
      <div className="col-span-2">
        <p>Hello there! the name is</p>
        <h1>Dilshan</h1>
        <h2>Manathunge</h2>
        <p>Full-stack Developer | AI/ML Enthusiast | Human-Centered designer</p>
      </div>
    </div>
  )
}

export default Homepage
