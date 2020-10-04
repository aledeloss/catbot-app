import React from 'react';
import Lottie from 'react-lottie';
import animation from './puppy.json';
// import animation from './Cat.json';

const Cat = ({ history }) => {

    const deafultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation 
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

export default Puppy;