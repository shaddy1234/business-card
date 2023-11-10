// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  return (
    <div className='contacts'>
      <Card 
            name="Kim Shaddy"
            role="Frontend Developer"
            phone="+254795 849 775"
            email="musyokishadrach1@gmail.com"
            image="./images/person.png" 
            socialA="https://github.com/shaddy1234" 
            socialB="https://linkedin.com/in/shadrack-kimaau-8b84a4278" 
      />
      <Card 
            name="Rick Kayler"
            role="Backend Developer"
            phone="+254114 112 068"
            email="rickkayler@gmail.com"
            image="./images/person 2 (1).png" 
            socialA="https://github.com/Rickyalo"
            socialB="https://linkedin.com"
      />
      <Card 
            name="Mesh Wield"
            role="FullStack Developer"
            phone="+254792 602 632"
            email="meshwield@gmail.com"
            image="./images/person 2 (2).png" 
            socialA="https://github.com/shaddy1234" 
            socialB="https://linkedin.com/in/shadrack-kimaau-8b84a4278"
      />
    </div>
  )
}

export default App
