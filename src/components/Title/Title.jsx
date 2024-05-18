import React, { useState } from 'react'
import '../../containers/APP/Companies'
import './Title.css';

function Title(props) {
  return (
    <div>
        <h1>{props.name}</h1>
    </div>
  )
}
export default Title