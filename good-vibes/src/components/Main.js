import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <>
   <h2>Live Scores</h2>
   <p className='scores'>scores</p>
   <div className='home-images'>
       <div>
        <p>MLB</p>
        <Link to='/baseball'>
        <img className="image" src='http://cdn.shopify.com/s/files/1/0480/9470/7866/collections/ef26964ae31041325cd9672682c01534.jpg?v=1646869133'></img>
        </Link>
       </div>
       <div><p>NFL</p>
       <Link to='/football'>
       <img className='image'src='https://i.im.ge/2022/09/17/1271NW.nfl-logo.png'></img>
       </Link>
       </div>
       <div>
        <p>NHL</p>
        <Link to='/hockey'>
       <img className='image'src='https://i.im.ge/2022/09/17/127B4a.imagesqtbnANd9GcQUEN7ARTW-RI6wCkbj9vF-qXD3O13a-WdW1QampusqpCAU.jpg'></img>
       </Link>
       </div>
       </div>
    </> 
  )
}

export default Main