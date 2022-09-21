import React, { useState, useEffect } from 'react'
import Accordion from 'react-bootstrap/Accordion'

const Hockey = () => {
  const apiKey = '55bbfe9c5133b22ce854bcb89207b5ae'
  const urlThree = `https://api.the-odds-api.com/v4/sports/icehockey_nhl/odds/?apiKey=${apiKey}&regions=us&markets=h2h,spreads&oddsFormat=american`
  
  const [hockey, setHockey] = useState([])
  
  const getHockey = async () => {
        try {
    const response =await fetch(urlThree)
    const data = await response.json()
    console.log(data)
    setHockey(data)
        } catch (err){
            console.log(err)
        }
  }
  useEffect(() => {getHockey()}, []);
  return (
    <>
      <h1 className='league'>Hockey</h1>
    <section className='show-section'>
      {hockey.map((pucks, index) => {
        return(
            <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
          <div className='teams'>
          <h3 className='home-teams'>{pucks.home_team}</h3>
          vs.
          <h3 className='away-teams'>{pucks.away_team}</h3>
          </div>
          </Accordion.Header>
          <Accordion.Body>
          <div className='teams'>
          {pucks?.bookmakers?.map(el=> <p className='books'>{el.title}</p>)}
          </div>
          </Accordion.Body>
          </Accordion.Item>
          </Accordion>
        )
      })}
   </section>
    </>
  )

}

export default Hockey