import React from 'react'
import '../Styles/loading.css'

const Loading = () => {
  return (
    <div className='center'>
      <div className="ring"></div>
      <span className='upperCase'>loading...</span>
    </div>
  )
}

export default Loading
