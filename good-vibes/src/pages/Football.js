import React, { useState, useEffect } from 'react'


const Football = () => {
//   const apiKey = 'c0a8ee56109127183ad45d57c7fe6577'
//   const urlTwo = `https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?apiKey=${apiKey}&regions=us&markets=h2h,spreads&oddsFormat=american`
  
//   const [football, setFootball] = useState([])
  
//   const getFootball = async () => {
//         try {
// //     const response =await fetch(urlTwo)
// //     const data = await response.json()
// //     console.log(data)
// //     setFootball(data)
//         } catch (err) {
//             console.log(err)
//         }
// //   }
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