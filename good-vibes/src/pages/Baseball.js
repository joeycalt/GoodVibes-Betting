import React, { useState, useEffect } from 'react'


const Baseball = () => {
  const url = 'https://api.the-odds-api.com/v4/sports/{sport}/odds/?apiKey=${apiKey}&regions={regions}&markets={markets}'
  const apiKey = 'd9e163701b045d428083085e25f0ceec'
  
  const [baseball, setBaseball] = useState([])
  
  const getBaseball = async () => {
    const response =await fetch(url)
    const data = await response.json()
    console.log(data)
    setBaseball(data)
  }
  useEffect(() => {getBaseball()}, []);
  return (
    <>
    <section>
      {baseball.map(bases => {
        return(
          <div>
          <h3>{bases.odds}</h3>
          </div>
        )
      })}
    <h1>Baseball</h1>
   </section>
    </>
  )
}

export default Baseball