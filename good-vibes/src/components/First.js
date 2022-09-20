import { useState } from 'react';
import { Link } from 'react-router-dom'



const First = () => {
   return (
    <div>
        <h1 className='first'>Please enter your date of birth.</h1>
        <h5>Must be 21 years of age or older</h5>
        <input
            type="date"
            className="form"
            placeholder="mm/dd/yyyy"
            />
        <div>
        <Link to='/home'>
            <button className='button'>Yes</button>
        </Link>
        <Link to='/restricted'>
            <button className='button'>No</button>
        </Link>
        </div>
        
    </div>
  )
}

export default First