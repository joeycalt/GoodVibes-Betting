import React, { useState, useEffect } from 'react'


const Baseball = () => {
  const apiKey = 'd9e163701b045d428083085e25f0ceec'
  const url = 'https://api.the-odds-api.com/v4/sports/baseball_mlb/odds/?apiKey=d9e163701b045d428083085e25f0ceec&regions=us&markets=h2h,spreads&oddsFormat=american'
  
  const [baseball, setBaseball] = useState([])
  
  const getBaseball = async () => {
    const response =await fetch(url)
    const data = await response.json()
    console.log(data)
    setBaseball(data)
  }
  useEffect(() => {getBaseball()}, []);
  return (
    <>
      <h1>Baseball</h1>
    <section>
      {baseball.map((bases, index) => {
        return(
          <div className='teams'>
          <h3 className='home-teams'>{bases.home_team}</h3>
          vs.
          <h3 className='away-teams'>{bases.away_team}</h3>
          
          </div>
        )
      })}
   </section>
    </>
  )
}

export default Baseball