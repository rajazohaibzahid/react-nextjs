import React from 'react'
import Nav from './Nav'

const Header = (props) => {
  return (
    <div className='bg-green-200 p-5'>Main hoon header
        <Nav num={props.num}/>
    </div>
  )
}

export default Header