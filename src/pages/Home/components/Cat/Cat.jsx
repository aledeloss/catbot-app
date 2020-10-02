import React from 'react';
import Lottie from 'react-lottie';
import animationCat from './Cat.json';

const Cat = ({ history }) => {

    const deafultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationCat 
    };

    function handleonClick() {
        history.push('/chat')
    };

    return (
        <div onClick={handleonClick}
        className='cat-container'>
            <Lottie 
                options= {deafultOptions}
            />
        </div>

    )
};

export default Cat;