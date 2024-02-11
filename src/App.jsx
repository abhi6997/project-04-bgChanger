import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [color, setColor] = useState("olive")
  
 

  return (
    
     <div className="w-full h-screen duration-200 flex justify-center " style={{backgroundColor:color}}>

      
     <div className="fixed flex flex-wrap justify-center bottom-12 px-2" >

      <div className="flex flex-wrap justify-evenly gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">

        <button className="outline-none px-4 py-1 bg-red-600 rounded-full text-white shadow-lg"onClick={()=>setColor("red")}>Red</button>
        <button className="outline-none px-4 py-1 bg-green-600 rounded-full text-white shadow-lg" onClick={()=>setColor("green")}>Green</button>
        <button className="outline-none px-4 py-1 bg-yellow-600 rounded-full text-white shadow-lg" onClick={()=>setColor("yellow")}>Yellow</button>
        <button className="outline-none px-4 py-1 bg-blue-600 rounded-full text-white shadow-lg" onClick={()=>setColor("blue")}>Blue</button>
      
      </div>
     </div>
     
     
      
     </div>
    
  )
}

export default App
