import React from "react"
import "./LogoCard.css"
const LogoCard = ({ title, logosrc, url }) => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer")
    if (newWindow) newWindow.opener = null
  }
  return (
    <div
      onClick={() => openInNewTab(url)}
      className=" logo-card h-64 w-64 bg-bg-card-purple rounded-lg flex place-content-center flex-col"
    >
      <img src={logosrc} alt="logo" style={{ height: "5rem" }} />
      <h1 className="text-center font-bold pt-10 text-bg-grad-purple">
        {title}
      </h1>
    </div>
  )
}

export default LogoCard
