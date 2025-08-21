import React from 'react'

function TextError(props) {
  return (
    <div className="error">
      {props.children || 'This field is required.'}
    </div>
  )
}

export default TextError
