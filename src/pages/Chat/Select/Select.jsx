import React from 'react';
import './Select.css';

const Select = ({options, handleSelectedOptions}) => {
    return (
        <div className='selector-container'>
            <div className='selector-content'>

                {
                    options.map( op =>
                        <div 
                        onClick = {(e) => handleSelectedOptions(op.id) }
                        key={op.id} className="selector-options" >
                            <label className='selector-options-label'> { op.text } </label>
                        </div> 
                    )}

            </div>
        </div>
    )
};

export default Select;