import React from 'react';
import './InputChat.css';

const InputChat = ({ sendMessage, getMeMessage }) => {
    return(
        <form
        onSubmit= { (e) => sendMessage(e) }
        className='chatbot-chat-input-container'>
            <input
                type="text"
                placeholder='Escribí tu nombre'
                onChange= { (e) => getMeMessage(e.target.value) }
            />
            <button
                type='submit'
            />

        </form>
    )
};

export default InputChat;