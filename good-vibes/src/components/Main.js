import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Main = () => {
    
    const url = `https://api.the-odds-api.com/v4/sports/baseball_mlb/scores/?daysFrom=1&apiKey=${process.env.REACT_APP_API_KEY}`
    const urlTwo = `https://api.the-odds-api.com/v4/sports/americanfootball_nfl/scores/?daysFrom=1&apiKey=${process.env.REACT_APP_API_KEY}`
    const urlThree = `https://api.the-odds-api.com/v4/sports/icehockey_nhl/scores/?daysFrom=1&apiKey=${process.env.REACT_APP_API_KEY}`

    
    const [baseball, setBaseball] = useState([])
    
    useEffect(() => {
    const getBaseball = async () => {
      const response =await fetch(url)
      const data = await response.json()
      setBaseball(data)
    }
        getBaseball()}, [url]);

    const [football, setFootball] = useState([])
  
    useEffect(() => {
      const getFootball = async () => {
        const response =await fetch(urlTwo)
        const data = await response.json()
        setFootball(data)
      }
        getFootball()}, [urlTwo]);

      const [hockey, setHockey] = useState([])
  
      useEffect(() => {
  const getHockey = async () => {
    const response =await fetch(urlThree)
    const data = await response.json()
    setHockey(data)
  }
    getHockey()}, [urlThree]);

  return (
    <>
    
   <h2 className='title'>Live Scores</h2>
   <div className='home-images'>
       <div className='image-base'>
        <Link to='/baseball'>
        <img className="image" src='http://cdn.shopify.com/s/files/1/0480/9470/7866/collections/ef26964ae31041325cd9672682c01534.jpg?v=1646869133' alt=''></img>
        </Link>
        <div className='live-scores'>
            <section>
        {baseball.map((bases, index) => {
          return(
            <div className='home-scores'>
                <div>
            <p className='team'>{bases.home_team}</p>
            vs.
            <p className='team'>{bases.away_team}</p>
            </div>
            <div>
            {bases?.scores?.map(ev => <p className='league-score'>{ev.score}</p>)}
            </div>
            </div>
          )
        })} 
     </section>
        </div>
       </div>
       <div className='image-foot'>
       <div className='live-scores'>
       <section>
      {football.map((foots, index) => {
        return(
            <>
          <div className='home-scores'>
            <div>
          <p className='team'>{foots.home_team}</p>
          vs.
          <p className='team'>{foots.away_team}</p>
          </div>
         {foots?.scores?.map(ev => <p className='league-score'>{ev.score}</p>)}
          </div>
          </>
        )
      })}
   </section>
        </div>
       <Link to='/football'>
       <img className='image'src='https://i.im.ge/2022/09/17/1271NW.nfl-logo.png' alt = ''></img>
       </Link>
       </div>
       <div className='image-puck'>
        <Link to='/hockey'>
       <img className='image'src='https://i.im.ge/2022/09/17/127B4a.imagesqtbnANd9GcQUEN7ARTW-RI6wCkbj9vF-qXD3O13a-WdW1QampusqpCAU.jpg' alt= ''></img>
       </Link>
       <div className='live-scores'>
       <section>
      {hockey.map((pucks, index) => {
        return(
            <>
          <div className='home-scores'>
            <div>
          <p className='team'>{pucks.home_team}</p>
          vs.
          <p className='team'>{pucks.away_team}</p>
          </div>
          {pucks?.scores?.map(ev => <p className='league-score'>{ev.score}</p>)}
          </div>
          </>
        )
      })}
   </section>
       </div>
       </div>
       </div>
    </> 
  )
}

export default Main
