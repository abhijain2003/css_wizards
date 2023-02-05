import React from 'react';

const DisplayInput = ({value, place, property, setProperty}) => {
    return (<label>
          <input
            type="radio"
            name={place}
            value={value}
            checked={property === value}
            onChange={(e) => setProperty(e.target.value)}
          />
          {value}
        </label>)
}

export default DisplayInput;