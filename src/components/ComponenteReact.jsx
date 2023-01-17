import React, {useState} from 'react'

export default function ComponenteReact() {
 const [cliente, setCliente] =useState("Angelica")
 console.log("solo cliente")  
 return (
    <div>
      {cliente}
    </div>
  )
}
