import React from 'react'
import { Link } from 'react-router-dom'

const TeamLink = ({category, subcategory,username, first_name, last_name, id }) => {
  return (
    <div key={id} className="p-3 shadow-lg rounded-lg bg-slate-200 flex flex-col gap-2">
      <div className='tlink'>
      <Link to={`/teams/${category}/${username}`} >
        <img className="h-[50px] w-[50px] bg-cover rounded-full" src={`/${username}.png`} alt={first_name + " " + last_name} />
        <h4>{first_name + " " + last_name}</h4>
      </Link>
      </div>
    </div>
  )
}

export default TeamLink