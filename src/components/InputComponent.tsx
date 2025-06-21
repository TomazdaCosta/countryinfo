import React from 'react'

type InputProps = React.ComponentProps<'input'> & {
  func: (value: string) => void
}

const InputComponent = ({value, func}: InputProps) => {
  return (
    <input type="text" value={value} onChange={(ev) => func(ev.target.value)} placeholder='🔍 Digite o nome do país' className='bg-gray-50 pt-2 pb-2 pr-4 pl-4 rounded-md' />
  )
}

export default InputComponent
