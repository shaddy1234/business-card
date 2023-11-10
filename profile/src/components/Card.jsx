import React from 'react'


function Card({name, role, phone, email,image, socialA, socialB }) {


  return (
    <div className='contact-card'>
      <div className='image'><img src={image} alt="" /></div>
      <h3>{name}</h3>
      <p><b>{role}</b> </p>
      <p>{phone}</p>
      <p>{email}</p>
      <div className='buttons'>
        <a href={socialA} target="_blank"><button>Github</button></a>
        <a href={socialB} target="_blank"><button>LinkedIn</button></a>
      </div>
    </div>
  )
}

export default Card
