import { useState } from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'

function App() {
  

  return (
    <div className='flex flex-col gap-6 h-full w-full '>
     <Navbar/>
     <div className='flex flex-col gap-4 w-full h-full border justify-center items-center '>
     <Card/>
     </div>
    </div>
  )
}

export default App
