import React from 'react';
import resume from './Sparks_resume3.png'
import { Link } from 'react-router-dom'
import './index.scss'

const Resume = () => {

  return (
    <div>
    <img className="resume" src={resume} alt="resume" ></img>
    <button>Download</button>
    </div>
  )
}
export default Resume