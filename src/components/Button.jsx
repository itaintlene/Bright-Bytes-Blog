import React from 'react'

export default function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-400',
    textColor = 'text-white',
    className = '',
    ...props    // spreading props help with passing additional properties later without defining them here later
}) {
  return (
    <button className= {`px-3 py-4 rounded-lg ${className} ${bgColor} ${textColor}`} {...props}>
      {children}
    </button>
  )
}

