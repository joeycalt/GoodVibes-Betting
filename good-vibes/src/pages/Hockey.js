import React, { useState, useEffect } from 'react'


const Hockey = (props) => {
//   const apiKey = '1f8894fe9ad6afe5171b0ff58f0738aa'
//   const urlThree = `https://api.the-odds-api.com/v4/sports/icehockey_nhl/scores?&apiKey=${apiKey}`
  
//   const [hockey, setHockey] = useState([])
  
//   const getHockey = async () => {
//     const response =await fetch(urlThree)
//     const data = await response.json()
//     console.log(data)
//     setHockey(data)
//   }
//   useEffect(() => {getHockey()}, []);
  return (
    <>
      <h1 className='league'>Hockey</h1>
    {/* <section>
      {hockey.map((pucks, index) => {
        return(
          <div className='teams'>
          <h3 className='home-teams'>{pucks.home_team}</h3>
          vs.
          {pucks.scores}
          <h3 className='away-teams'>{pucks.away_team}</h3>
          

          </div>
        )
      })}
   </section> */}
    </>
  )
}

export default Hockey