import React, { useState, useEffect } from 'react'
import Accordion from 'react-bootstrap/Accordion';

const Baseball = () => {
  const apiKey = '55bbfe9c5133b22ce854bcb89207b5ae'
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
    <section className='show-section'>
      {baseball.map((bases, index) => {
        return(
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
          <div className='teams'>
          <h3 className='home-teams'>{bases.home_team}</h3>
          vs.
          <h3 className='away-teams'>{bases.away_team}</h3>
          </div>
          </Accordion.Header>
          <Accordion.Body>
          <div className='teams'>
          {bases?.bookmakers?.map(el=> <p className='books'>{el.title}</p>)}
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

export default Baseball