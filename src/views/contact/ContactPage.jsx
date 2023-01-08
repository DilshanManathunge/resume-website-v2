import React from "react"
import suit from "../../assets/home-suit.svg"
import LogoCard from "../../components/LogoCard/LogoCard"

import IconLinkedIn from "../../assets/Icons/Linkedin.svg"
import IconBehance from "../../assets/Icons/Behance.svg"
import IconDribbble from "../../assets/Icons/Dribbble.svg"
import IconEmail from "../../assets/Icons/Email.svg"
import IconGithub from "../../assets/Icons/Github.svg"
import IconDownload from "../../assets/Icons/Download.svg"
const ContactPage = () => {
  return (
    <div className="h-screen">
      <h1 className="text-txt-teal text-5xl">Get in Touch</h1>
      <div className="grid grid-cols-2 pt-20">
        <div className="flex place-content-center">
          <img src={suit} alt="suit" />
        </div>
        <div className="grid grid-flow-row-dense grid-cols-3 gap-12  ">
          <LogoCard
            title={"LinkedIn"}
            logosrc={IconLinkedIn}
            url="https://www.linkedin.com/in/dilshan-manathunge/"
          />
          <LogoCard
            title={"Github"}
            logosrc={IconGithub}
            url="https://github.com/dilshanmanathunge"
          />
          <LogoCard
            title={"Dribbble"}
            logosrc={IconDribbble}
            url="https://dribbble.com/DilshanManathunge"
          />
          <LogoCard
            title={"Behance"}
            logosrc={IconBehance}
            url="https://www.behance.net/dilshanmanathu"
          />
          {/* <LogoCard title={"Resume"} logosrc={IconDownload} />
          <LogoCard title={"Email"} logosrc={IconEmail} /> */}
        </div>
      </div>
    </div>
  )
}

export default ContactPage
