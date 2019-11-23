import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const houses = [
    'Gryffindor',
    'Ravenclaw',
    'Hufflepuff',
    'Slytherin',
    'Unknown'
  ]
  return (
      <div className='home-home'>
         {houses.map(house => {
           return (
             <Link to={`/house/${house}`}>
            
               <h1 className='home-house'>{house}</h1>
             </Link>
           )
         })}
      </div>
  )
}

export default Home
