import React from 'react'
import { Link } from 'react-router-dom'

const TeamLink = ({category, subcategory,username, first_name, last_name, id }) => {
  return (
    <div key={id} className="">
      <div className='tlink'>
      
        <div>
        <Link to={`/teams/${category}/${username}`} >
        <img className="h-[35px] w-[35px] bg-cover rounded-full" src={`/${username}.png`} alt={first_name + " " + last_name} />
        </Link>
        </div>
        <div>
        <Link to={`/teams/${category}/${username}`} >
        <h4>{first_name + " " + last_name}</h4>
        </Link>
        </div>
     
      </div>
    </div>
  )
}

export default TeamLink