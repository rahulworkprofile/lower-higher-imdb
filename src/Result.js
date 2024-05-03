import React from 'react'
import "./Result.css"
import {useLocation} from 'react-router-dom';
import { useNavigate } from "react-router-dom";


function Result() {

    const location = useLocation();
    const navigate = useNavigate();


  return (
    <div className="result--container">
        <h1>Higher or Lower IMDB</h1>
        <h1>Your Score is: <span className='color-primary'>{location.state.score}</span></h1>
        <button className="again-button" onClick={() => {navigate("/")}}>Go again?</button>
    </div>
  )
}

export default Result
