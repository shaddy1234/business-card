import React from 'react'


function Card({name, role, phone, email,image }) {


  return (
    <div className='contact-card'>
      <div className='image'><img src={image} alt="" /></div>
      <h3>{name}</h3>
      <p><b>{role}</b> </p>
      <p>{phone}</p>
      <p>{email}</p>
      <div className='buttons'>
        <a href="#" target="_blank"><button>LinkedIn</button></a>
        <a href="#" target="_blank"><button>Twitter</button></a>
      </div>
    </div>
  )
}

export default Card
