import React, { useState, useEffect } from 'react'
import Accordion from 'react-bootstrap/Accordion';

const Baseball = () => {
  const apiKey = 'e20a7cd281d31c557a75e35ab541d271'
  const url = `https://api.the-odds-api.com/v4/sports/baseball_mlb/odds/?apiKey=${apiKey}&regions=us&markets=h2h,spreads&oddsFormat=american`
  
  const [baseball, setBaseball] = useState([])
  const [prices, setPrices] = useState([])
  useEffect(() => {
  
    function getPrice(arr) {
      return arr.map(el => {
        const output = {}
        const outcomes = el.markets.map(o => o.outcomes)
        // console.log(outcomes)
        const price = outcomes?.map(obj => obj.map(p=> p.price || 'N/A')) 
        // console.log(price)
      output[el.title] = price.flatMap(el => el)
      return output
      })}
  const getBaseball = async () => {
    try {
    const response =await fetch(url)
    const data = await response.json()
    console.log(data)
    const allPrices = data?.map(el => getPrice(el.bookmakers || []))
    setPrices(allPrices)
    setBaseball(data)
    } catch (err) {
      console.log(err)
    }
  }
    getBaseball()}, [url]);
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
          {bases?.bookmakers?.map(el=> <div className='books'>{el.title}</div>)}
          {prices?.map((price,idx) => {
            return (
              price?.map((p, index) => {
                // console.log(p)
                return (
                  <>
                <div className='lines'>{p.DraftKings}</div>
                </>
                )
              }
              
              )
            )
          })}
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