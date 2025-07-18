
import React, { useState } from 'react'
import Navbar from '../NavBar/Navbar'

export default function Home() {
    
//hook
//useState is a hook that allows us to add state to functional components.
const [count , setCount] = useState(0);

const [userName, setUserName] = useState("Ahmed");







  return <>
  <Navbar/>
  <h2 className='fas fa-home '> Home Component</h2>
  </>
}
