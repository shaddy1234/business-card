import React from 'react'


function Card(props) {


  return (
    <div className='contact-card'>
      <div className='image'><img src={props.image} alt="" /></div>
      <h3>{props.name}</h3>
      <p><b>{props.role}</b> </p>
      <p>{props.phone}</p>
      <p>{props.email}</p>
      <div className='buttons'>
        <a href={props.socialA} target="_blank"><button>Github</button></a>
        <a href={props.socialB} target="_blank"><button>LinkedIn</button></a>
      </div>
    </div>
  )
}

export default Card
