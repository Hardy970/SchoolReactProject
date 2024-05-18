import React from "react"

function SimpleButton(props) {
 let btnStyle={
    background:props.color,
    color:props.textColor,
    width:props.width,
    height:props.height,
    padding:"10px"
 }
  return (
    <button style={btnStyle} >{props.text}</button>
  )
}

export default SimpleButton
