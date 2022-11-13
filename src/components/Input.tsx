import React from 'react'

type Props = {
    type: string;
    placeholder: string;
}
export const Input: React.FunctionComponent<Props> = (props) => {
const { type, placeholder } = props
  return (
    <div className='input'>
        <input type={type} placeholder={placeholder}/>
    </div>
  )
}
