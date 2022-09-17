import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <>
   <h2 className='title'>Live Scores</h2>
   <div className='home-images'>
       <div className='image-base'>
        <Link to='/baseball'>
        <img className="image" src='http://cdn.shopify.com/s/files/1/0480/9470/7866/collections/ef26964ae31041325cd9672682c01534.jpg?v=1646869133'></img>
        </Link>
        <div>
            <p className='home-scores'>scores</p>
        </div>
       </div>
       <div className='image-foot'>
       <div>
        <p className='home-scores'>scores</p>
        </div>
       <Link to='/football'>
       <img className='image'src='https://i.im.ge/2022/09/17/1271NW.nfl-logo.png'></img>
       </Link>
       </div>
       <div className='image-puck'>
        <Link to='/hockey'>
       <img className='image'src='https://i.im.ge/2022/09/17/127B4a.imagesqtbnANd9GcQUEN7ARTW-RI6wCkbj9vF-qXD3O13a-WdW1QampusqpCAU.jpg'></img>
       </Link>
       <div>
       <p className='home-scores'>scores</p>
       </div>
       </div>
       </div>
    </> 
  )
}

export default Main