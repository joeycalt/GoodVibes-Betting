import React, { useState, useEffect } from 'react'


const Football = (props) => {
//   const apiKey = '81f8894fe9ad6afe5171b0ff58f0738aa'
//   const urlTwo = `https://api.the-odds-api.com/v4/sports/americanfootball_nfl/scores?apiKey=${apiKey}`
  
//   const [football, setFootball] = useState([])
  
//   const getFootball = async () => {
//     const response =await fetch(urlTwo)
//     const data = await response.json()
//     console.log(data)
//     setFootball(data)
//   }
//   useEffect(() => {getFootball()}, []);
  return (
    <>
      <h1 className='league'>Football</h1>
    {/* <section>
      {football.map((foots, index) => {
        return(
          <div className='teams'>
          <h3 className='home-teams'>{foots.home_team}</h3>
          vs.
          {foots.scores}
          <h3 className='away-teams'>{foots.away_team}</h3>
          

          </div>
        )
      })}
   </section> */}
    </>
  )
}

export default Football