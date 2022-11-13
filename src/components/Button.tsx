import React from 'react'

type Props = {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    name: string;
}
export const Button:React.FunctionComponent<Props> = (props) => {
    const { onClick, name } = props
  return (
    <button onClick={onClick}>{name}</button>
  )
}
