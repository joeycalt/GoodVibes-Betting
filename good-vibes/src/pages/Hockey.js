import React, { useState, useEffect } from 'react'


const Hockey = () => {
//   const apiKey = 'd9e163701b045d428083085e25f0ceec'
//   const urlThree = 'https://api.the-odds-api.com/v4/sports/icehockey_nhl/scores?&apiKey=ecb8115431aa607425c590edf96b109e'
  
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
      <h1>Hockey</h1>
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