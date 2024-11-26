import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-center items-center h-16 w-full bg-red-600 gap-2'>
      <img className='h-8 w-8 ' src='/src/assets/react.svg' />
        <b>Chef Claude</b>
    </header>
  )
}

export default Header;