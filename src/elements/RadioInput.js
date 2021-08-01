import React from 'react';

const RadioInput = ({name, value}) => {
    return (
        <div className="flex items-center mb-2">
            <input type="radio" name={name} value={value} />
            <label className="text-gray-400 ml-3" htmlFor="">{name}</label>
        </div>
    )
}

export default RadioInput;