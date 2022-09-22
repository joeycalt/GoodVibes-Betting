import React, { useState, useEffect } from 'react'
import Accordion from 'react-bootstrap/Accordion'

const Hockey = () => {
  const urlThree = `https://api.the-odds-api.com/v4/sports/icehockey_nhl/odds/?apiKey=${process.env.REACT_APP_API_KEY}&regions=us&markets=h2h,spreads&oddsFormat=american`
  
  const [hockey, setHockey] = useState([])
  const [prices, setPrices] = useState([])

       useEffect(() => {
        function getPrice(arr) {
            return arr.map(el => {
                const output = {}
                const outcomes = el.markets.map(o => o.outcomes)
                const price = outcomes?.map(obj => obj.map(p=> p.price || 'N/A'))
                output[el.title] = price.flatMap(el => el)
                return output
                })
        }
  const getHockey = async () => {
        try {
    const response =await fetch(urlThree)
    const data = await response.json()
    const allPrices = data?.map(el => getPrice(el.bookmakers || []))
    setPrices(allPrices)
    setHockey(data)
        } catch (err){
            console.log(err)
        }
  }
    getHockey()}, [urlThree]);
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
          <div className='books' key={index}><div>{prices[index]?.map(price => {
                      return (
                      <>
                          <p>{price.name}</p>
                          {Object.entries(price)?.map(p => {
                            return (
                              <p>{p[0]}: <span className='lines'>[{p[1]}]</span></p>
                            )
                          })}
                        </>
                      )
                    }
                    )}</div></div>

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