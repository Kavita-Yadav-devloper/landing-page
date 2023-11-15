import React from "react";
import devImg from "../assets/dev.gif";
const HomePage = () => {
  return (
    <>
      <div>
        <div className="parent-container">
          <div className="row h-80 align-items-center gx-0">
            <div className="col-md-6">
              <img src={devImg} alt="loading.." height={470}/>
            </div>
            <div className="col-md-6">
              <div className="brand-container">
                <h1><b>KAVITA YADAV</b></h1>
                <p>FullStack <b>Devloper</b></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
