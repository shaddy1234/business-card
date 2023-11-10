// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React, { useStatate } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  // const [person, setPerson] = useStatate({
  //   name:"",
  //   role:"",
  //   phone:"",
  //   email:""
  // })

  return (
    <div className='contacts'>
      <Card 
            name="Kim Shaddy"
            role="Frontend Developer"
            phone="+254795 849 775"
            email="musyokishadrach1@gmail.com"
            image="./images/person.png" 
      />
      <Card 
            name="Rick Kayler"
            role="Backend Developer"
            phone="+254114 112 068"
            email="rickkayler@gmail.com"
            image="./images/person 2 (1).png" 
      />
      <Card 
            name="Mesh Wield"
            role="FullStack Developer"
            phone="+254792 602 632"
            email="meshwield@gmail.com"
            image="./images/person 2 (2).png" 
      />
      {/* <Card />
      <Card /> */}
    </div>
  )
}

export default App
