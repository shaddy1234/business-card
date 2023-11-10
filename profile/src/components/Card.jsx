import React from 'react'


function Card({name, role, phone, email,image }) {


  return (
    <div className='contact-card'>
      <div><img src={image} alt="" /></div>
      <h3>{name}</h3>
      <p><b>{role}</b> </p>
      <p>{phone}</p>
      <p>{email}</p>
      <div className='buttons'>
        <a href='www.linkedin.com/in/shadrack-kimaau-8b84a4278

        ' target="_blank"><button>LinkedIn</button></a>
        <button>Twitter</button>
      </div>
    </div>
  )
}

export default Card
