import React from 'react';
import Storage from './Storage';

export default function Custom() {
    const [value, setValue] = Storage('');
    const change = (event) => {
        setValue(event.target.value);
    };
  return (
    <div>
        <input type="text" value={value}  onChange={change} />
        <p>Type and check storage</p>
    </div>
  )
}
