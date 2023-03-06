import React from 'react'
import './iconoptions.css'

function IconOptions({name,Icon,color}) {
  return (
    <div className='icons'>
        <div className="iconcontent">
            <Icon style={color = {color}}/>
        </div>
        <p>{name}</p>

        


    </div>
  )
}

export default IconOptions