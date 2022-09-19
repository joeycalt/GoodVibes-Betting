import React, { useState, useEffect } from 'react'


const Baseball = () => {
  const apiKey = '3c39eb24b9aa875ad7c0d3b1b27381e9'
  const url = `https://api.the-odds-api.com/v4/sports/baseball_mlb/odds/?apiKey=${apiKey}&regions=us&markets=h2h,spreads&oddsFormat=american`
  
  const [baseball, setBaseball] = useState([])
  
  const getBaseball = async () => {
    try {
    const response =await fetch(url)
    const data = await response.json()
    console.log(data)
    setBaseball(data)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {getBaseball()}, []);
  return (
    <>
      <h1 className='league'>MLB</h1>
    <section>
      {baseball.map((bases, index) => {
        return(
          <div className='teams'>
          <h3 className='home-teams'>{bases.home_team}</h3>
          vs.
          <h3 className='away-teams'>{bases.away_team}</h3>
          {bases?.bookmakers?.map(el=> <p className='books'>{el.title}</p>)}
          

          </div>
        )
      })}
   </section>
    </>
  )
}

export default Baseball