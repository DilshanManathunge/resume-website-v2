import React from "react"

const IntroPage = () => {
  return (
    <div className="h-screen pt-10">
      <h1 className="text-txt-teal text-3xl">Who am I?</h1>
      <div className="grid grid-rows-2">
        <div className="grid grid-cols-2 gap-4 pt-5">
          <div className="text-txt-purple">
            <p className="text-xl">
              My Jounrney with development starts during my time at highschool
              where I 1st learned how to to design.Since then I have completed
              my Bacholer&apos;s in
              <b> Computer Science </b> graduting with an Hon&apos;s 1
              <sup>st</sup> class degree from the prestigious
              <i> University of Westminster.</i>
            </p>
            <p className="text-xl">
              To give a brief idea about the skills I process I have around 5
              years experience working in UI/UX Design and since then work as a
              Full-stack developer for the past 2 years. I have a keen interest
              towards Machine Learning as well as Conducted research into
              Conversational Systems during 2021.
            </p>
            <p className={`font-display my-10  font-light text-txt-teal`}>
              Specialized in developing Human-Centeric Products
            </p>
          </div>
          <div>this is a image</div>
        </div>
        <div className="pt-5">
          <h1 className="text-txt-teal text-3xl">Skills and Interests</h1>
        </div>
      </div>
    </div>
  )
}

export default IntroPage
