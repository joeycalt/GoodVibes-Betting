import React, { useState, useEffect } from 'react'
import Accordion from 'react-bootstrap/Accordion';

const Baseball = () => {
  const apiKey = 'c0a8ee56109127183ad45d57c7fe6577'
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
          {bases?.bookmakers?.map(el=> (<p className='books'>{el.title}</p>),
          function parse(arr) {
            const output = {}
            arr.forEach(el => {
              const outcomes = el.markets
              console.log(outcomes)
              // const price = outcomes.map(obj => obj.price)
              // console.log(price)
              // output[el.name] = price
            })
            // console.log(output)
            
          },

          )
          
          }
          
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