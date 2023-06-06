import React, { useEffect, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';


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
  <Carousel className='carousel'>
      <Carousel.Item>
        <img
          className="image-car"
          src="https://i.im.ge/2023/05/09/UI77k4.mlb.png"
          alt="First slide"
          />
          <Carousel.Caption>
            <h3 className='car-header'>View MLB odds from various Sportsbooks 
              <Link className='here' to='/baseball'> here</Link>
            </h3>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="image-car"
          src="https://i.im.ge/2023/05/09/UI7URp.NHL-Logo-700x394.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='car-header'>View NHL odds from various Sportsbooks 
          <Link className='here' to='/hockey'> here</Link>
            </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="image-car"
          src="https://i.im.ge/2023/05/09/UI70U1.nfl.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='car-header'>View NFL odds from various Sportsbooks
          <Link className='here' to='/football'> here</Link>
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   <h2 className='title'>Live Scores</h2>
   {/* <div className='image-div'>
   <img className= 'image' src='https://i.im.ge/2023/05/09/UI77k4.mlb.png' alt=''></img>
   <img className= 'image' src='https://i.im.ge/2023/05/09/UI7URp.NHL-Logo-700x394.png' alt=''></img>
   <img className= 'image' src='https://i.im.ge/2023/05/09/UI70U1.nfl.jpg' alt=''></img>
   </div> */}
   <div className='home-images'>
       <div className='image-base'>
        <div className='live-scores'>
   <Accordion>
            <section>
   <Accordion.Item>
   <Accordion.Header>
   <h1 className='league-link'>MLB
   </h1>
    </Accordion.Header>
   <Accordion.Body>
        {baseball.map((bases, index) => {
          return(
            <div className='home-scores'>
              <div>
            <p className='team'>{bases.home_team}</p>
                <div>
            <p className='vs'>vs.</p>
            <p className='team'>{bases.away_team}</p>
            </div>
            </div>
            <div>
            {bases?.scores?.map(ev => <p className='league-score'>{ev.score}</p>)}
            </div>
       </div>
          )
        })} 
        </Accordion.Body>
        </Accordion.Item>
     </section>
       </Accordion>
        </div>
       </div>
       <div className='image-foot'>
       <div className='live-scores'>
       <Accordion defaultActiveKey="0">
       <section>
       <Accordion.Item>
   <Accordion.Header>
   <h1 className='league-link'>NFL
   </h1>
   </Accordion.Header>
   <Accordion.Body>
      {football.map((foots, index) => {
        return(
            <>
          <div className='home-scores'>
            <div>
          <p className='team'>{foots.home_team}</p>
          <p>vs.</p>
          <p className='team'>{foots.away_team}</p>
          </div>
          <div>
         {foots?.scores?.map(ev => <p className='league-score'>{ev.score}</p>)}
         </div>
          </div>
          </>
        )
      })}
       </Accordion.Body>
       </Accordion.Item>
   </section>
   </Accordion>
        </div>
       </div>
       <div className='image-puck'>
       <div className='live-scores'>
       <Accordion defaultActiveKey="0">
       <section>
       <Accordion.Item>
   <Accordion.Header>
   <h1 className='league-link'>NHL
   </h1>
   </Accordion.Header>
   <Accordion.Body>
      {hockey.map((pucks, index) => {
        return(
            <>
          <div className='home-scores'>
            <div>
          <p className='team'>{pucks.home_team}</p>
          <p>vs.</p>
          <p className='team'>{pucks.away_team}</p>
          </div>
          <div>
          {pucks?.scores?.map(ev => <p className='league-score'>{ev.score}</p>)}
          </div>
          </div>
          </>
        )
      })}
      </Accordion.Body>
       </Accordion.Item>
   </section>
   </Accordion>
       </div>
       </div>
       </div>
    </> 
  )
}

export default Main
