import React, { useEffect, useRef } from 'react'

const useRefHook = () => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // focus on load
    ref.current?.focus();
  }, [])
  return (
    <div className='flex flex-col gap-4'>
      <div>useRef</div>
      <input ref={ref} type='text' />
      <input ref={ref} type='text' />
      <input ref={ref} type='text' />
    </div>
  )
}

export default useRefHook