import React from 'react';
import './CatItem.css';
import CatAvatar from '../../../assets/images/catAvatar.png';

const CatItem = ({ text }) => {

    return(
        <div className='cat-item-container'>
            <img src={CatAvatar} alt="cat-avatar"/>
            <div className='cat-item-messages'> 
            { text.map((t, index) =>               
                <label key={index}> {t} </label>
            )}
            </div>
        </div>
    )
};

export default CatItem;
