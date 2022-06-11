import * as React from 'react';
import { dropDownOptions } from '../../../types';

type Props = {
  options: dropDownOptions[];
};

export function Dropdown({ options }: Props) {
  const [selected, setSelected] = React.useState('all');

  return (
    <div className="dropdownContainer">
      <select
        style={{
          backgroundColor: '#fff',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat',
          margin: '0',
          overflow: 'hidden',
          padding: '.575rem .25rem',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          outline: 'none',
          borderRight: '0.25rem solid transparent',
        }}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            defaultValue={option.value}
            onClick={() => setSelected(option.value)}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
