import React, { useState, useEffect } from "react"
import data from "./data.json"
const Carousel = () => {
  const [current, setCurrent] = useState(data[0])
  const handleForward = () => {
    if (current.id < data.length) {
      console.log(current.id)
      setCurrent(data[current.id])
    } else if (data.length === current.id) {
      setCurrent(data[0])
    }
    console.log(current)
  }
  const handleBackward = () => {
    console.log(current)
    if (current.id === 1) {
      console.log("here")
      const maxLength = data.length
      console.log(data.length)
      console.log(data[maxLength - 1])
      setCurrent(data[maxLength - 1])
    } else {
      setCurrent(data[current.id - 2])
    }
    console.log(current)
  }
  return (
    <div className="grid grid-rows-6 h-4/5">
      <div className="row-span-3">
        <div className="grid grid-cols-2">
          <div>img</div>
          <div>
            <h1 className="text-txt-teal text-3xl pb-10">Title</h1>
            <div>
              <p className="text-xl text-txt-purple">
                description id is {current.id}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row-span-2">
        <div className="grid grid-cols-2">
          <div>
            {" "}
            <h1 className="text-txt-teal text-3xl pb-10">Tech used</h1>
          </div>
          <div>
            {" "}
            <h1 className="text-txt-teal text-3xl pb-10">Links</h1>
          </div>
        </div>
      </div>
      <div className="row-span-1 flex place-content-end">
        <div className="mr-3 text-txt-purple" onClick={handleBackward}>
          Prev
        </div>
        <div className="text-txt-purple" onClick={handleForward}>
          Next
        </div>
      </div>
    </div>
  )
}

export default Carousel
