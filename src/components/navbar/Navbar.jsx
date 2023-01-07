import React from "react"
import "./navbar.css"
const Navbar = () => {
  return (
    <div className="fixed w-4/5 h-1/5 text-end">
      <div className="py-10">
        <ol className="text-white" id="nav-items">
          <li className="pr-5">Home</li>
          <li className="pr-5">Intro</li>
          <li className="pr-5">Projects</li>
          <li className="pr-5">contact</li>
        </ol>
      </div>
    </div>
  )
}

export default Navbar
