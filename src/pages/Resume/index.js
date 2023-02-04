import React from 'react';
import resume from './Sparks_resume3.png'
import resume2 from './Sparks_resume3.png'
import './index.scss'



const Resume = () => {


  return (
     <>
      <div className='row'>
        <div className='column'>
          <img className="resume" src={resume} alt="resume" />
        </div>
        <div className='column'>
          <img className="resume2" src={resume2} alt="resume2" />
        </div>
      </div>
      <button className='button'> Download </button>
     </>

  )
}
export default Resume