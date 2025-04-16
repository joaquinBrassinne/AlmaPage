import React from 'react'

interface Props{
    children: React.ReactNode
}

const IconSpan = ({children} : Props) => {
  return (
    <span className='iconSpan DescripcionIcono'>
        {children}
    </span>
  )
}

export default IconSpan