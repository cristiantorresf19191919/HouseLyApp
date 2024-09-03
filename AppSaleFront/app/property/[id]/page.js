"use client"

import { useEffect, useState } from "react";
import axios from "axios";

async function GetProperty(id){
  const response = await axios.get('http://127.0.0.1:8004/properties/'+ id)
  console.log(response)
  return response.data
}


export default function Main ({params}){
  const id = params.id
  const [property, setProperty] = useState('')

  useEffect(() => {
    GetProperty(id).then(propertyItem=>{
        console.log("Que datos tengo property", propertyItem)
        setProperty(propertyItem)
    }).catch (e=>{
     console.log('error ',e.message)
    })
  },[] )

  console.log("Este es el id" + {id})
 return (
     <div>
         <h2>{property.name}</h2>
         <img src={property.image} alt={property.name}/>
     </div>
 )

}
