import React from 'react'

type Props = {
    placeholder: string;
    name: string;
    cols: any;
    rows: any;
}


export const TextArea: React.FunctionComponent<Props> = (props) => {
let { name, placeholder, cols, rows } = props
cols.toString();
rows.toString();
  return (
    <div className='input'>
        <textarea name={name} id=""  placeholder={placeholder} cols={cols} rows={rows}></textarea>
    </div>
  )
}
