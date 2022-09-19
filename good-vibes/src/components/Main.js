import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Main = (props) => {
    const apiKey = 'C1f8894fe9ad6afe5171b0ff58f0738aa'
    const url = `https://api.the-odds-api.com/v4/sports/baseball_mlb/scores/?apiKey=${apiKey}`
    const urlTwo = `https://api.the-odds-api.com/v4/sports/americanfootball_nfl/scores/?apiKey=${apiKey}`
    const urlThree = `https://api.the-odds-api.com/v4/sports/icehockey_nhl/scores/?apiKey=${apiKey}`

    
    const [baseball, setBaseball] = useState([])
    
    const getBaseball = async () => {
      const response =await fetch(url)
      const data = await response.json()
      console.log(data)
      setBaseball(data)
    }
    useEffect(() => {getBaseball()}, []);

    const [football, setFootball] = useState([])
  
      const getFootball = async () => {
        const response =await fetch(urlTwo)
        const data = await response.json()
        console.log(data)
        setFootball(data)
      }
      useEffect(() => {getFootball()}, []);

      const [hockey, setHockey] = useState([])
  
  const getHockey = async () => {
    const response =await fetch(urlThree)
    const data = await response.json()
    console.log(data)
    setHockey(data)
  }
  useEffect(() => {getHockey()}, []);

  return (
    <>
    
   <h2 className='title'>Live Scores</h2>
   <div className='home-images'>
       <div className='image-base'>
        <Link to='/baseball'>
        <img className="image" src='http://cdn.shopify.com/s/files/1/0480/9470/7866/collections/ef26964ae31041325cd9672682c01534.jpg?v=1646869133'></img>
        </Link>
        <div className='live-scores'>
            <section>
        {baseball.map((bases, index) => {
          return(
            <div className='home-scores'>
            {bases.home_team}
            <p className='vs'>vs.</p>
            {bases.away_team}
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
          <div className='home-scores'>
          {foots.home_team}
          <p className='vs'>vs.</p>
          {foots.away_team}
          </div>
        )
      })}
   </section>
        </div>
       <Link to='/football'>
       <img className='image'src='https://i.im.ge/2022/09/17/1271NW.nfl-logo.png'></img>
       </Link>
       </div>
       <div className='image-puck'>
        <Link to='/hockey'>
       <img className='image'src='https://i.im.ge/2022/09/17/127B4a.imagesqtbnANd9GcQUEN7ARTW-RI6wCkbj9vF-qXD3O13a-WdW1QampusqpCAU.jpg'></img>
       </Link>
       <div className='live-scores'>
       <section>
      {hockey.map((pucks, index) => {
        return(
          <div className='home-scores'>
          {pucks.home_team}
          <p className='vs'>vs.</p>
          {pucks.scores}
          {pucks.away_team}
          </div>
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
