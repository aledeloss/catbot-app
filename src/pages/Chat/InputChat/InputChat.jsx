import React from 'react';
import './InputChat.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const plane = <FontAwesomeIcon icon={faPaperPlane} />;

const InputChat = ({ sendMessage, getMeMessage, msg, chat }) => {
    return(
        <form
        onSubmit= { (e) => sendMessage(e) }
        className='chatbot-chat-input-container'>
            <input
                disabled= { chat.length >= 3 ? true : false }
                type="text"
                placeholder= { chat.length >= 3 ? 'Ya no podés escribir...' : 'Escribí tu nombre' }
                value= { msg.msg }
                onChange= { (e) => getMeMessage(e.target.value) }
            />
            <button type='submit'> {plane} </button>

        </form>
    )
};

export default InputChat;