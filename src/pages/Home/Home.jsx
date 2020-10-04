import React from 'react';
import './Home.css';
import Cat from './components/Cat/Cat.jsx';

const Home = ({ history }) => {
    return (
        <div className='home-catbot-container'>
            <div className='home-catbot-content'>
                <Cat history={history} />
                <div className='home-catbot-greeting'>
                    <h1>¡Hola!</h1>
                    <label htmlFor="">Te doy la bienvenida a mi bot, ¿querés charlar?</label>
                </div>
            </div>

        </div>

    )
};

export default Home;