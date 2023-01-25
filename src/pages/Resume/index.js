import React from 'react';
import resume from './Sparks_resume3.png'
import { Link } from 'react-router-dom'
import './index.scss'

const Resume = () => {

  return (
    <>
    <img className="resume" src={resume} alt="resume" ></img>
    
    <button className='download-button'>Download</button>
    
    </>
    
  )
}
export default Resume