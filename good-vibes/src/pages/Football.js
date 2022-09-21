import React, { useState, useEffect } from 'react'
import Accordion from 'react-bootstrap/Accordion'

const Football = () => {
//   const apiKey = '55bbfe9c5133b22ce854bcb89207b5ae'
//   const urlTwo = `https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?apiKey=${apiKey}&regions=us&markets=h2h,spreads&oddsFormat=american`
  
//   const [football, setFootball] = useState([])
  
//   const getFootball = async () => {
//         try {
//     const response =await fetch(urlTwo)
//     const data = await response.json()
//     console.log(data)
//     setFootball(data)
//         } catch (err) {
//             console.log(err)
//         }
//   }
//   useEffect(() => {getFootball()}, []);
  return (
    <>
      <h1 className='league'>Football</h1>
    {/* <section className='show-section'>
      {football.map((foots, index) => {
        return(
            <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
          <div className='teams'>
          <h3 className='home-teams'>{foots.home_team}</h3>
          <p className='vs'>vs.</p>
          <h3 className='away-teams'>{foots.away_team}</h3>
          </div>
          </Accordion.Header>
          <Accordion.Body>
          <div className='teams'>
          {foots?.bookmakers?.map(el=> <p className='books'>{el.title}</p>)}
          </div>
          </Accordion.Body>
          </Accordion.Item>
          </Accordion>
        )
      })}
   </section> */}
    </>
  )

}

export default Football