import { useState } from 'react';
import { Link } from 'react-router-dom'



const First = () => {
   return (
    <div>
        <h1 className='first'>Before you begin, are you at least 21 years of age?</h1>
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