import React,{useState } from 'react'
import { useParams, Link} from 'react-router-dom'
import data from "../assets/data.json";
import Card from "../components/Card"


function Property() {
    const {id} = useParams()
    const [properties, setProperties] = useState(data.properties);
    const itemId = parseInt(id);
    const item = properties.find((item) => item.id === itemId);
    
  
     return (
       <>
         <div class="flex flex-col items-center justify-center h-screen">
           <Link to="/">
             <div className="block rounded-lg py-2 px-4 bg-blue-500 text-center align-middle border font-sans text-white  text-bold hover:shadow-lg hover:shadow-pink-blue/40 focus:opacity-[0.85]">
               Back to Home
             </div>
           </Link>
           <Card item = {item}/>
         </div>
       </>
     );
}

export default Property