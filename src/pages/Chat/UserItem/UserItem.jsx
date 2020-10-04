import React from 'react';
import './UserItem.css';
import womanUser from '../../../assets/images/womanUser.png';

const UserItem = ({text}) => {
    return(
        <div className='user-item-container'>
            <div className='user-item-messages'>
                <label htmlFor=""> {text} </label>
            </div>
            <img src={womanUser} alt="woman-user-avatar"/>
        </div>
    )
};

export default UserItem;
