import React from 'react'

// for styling page components similarly in a container
function Container({children}) {        // children refers to all text to be passed into the page wrapped in container
  return (
    <div className='w-full max-w-7xl px-4 mx-auto'>{children}</div>
  )
}

export default Container