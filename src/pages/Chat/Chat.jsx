import React, {useState} from 'react';
import './Chat.css';
import CatItem from './CatItem/CatItem';
import UserItem from './UserItem/UserItem';
import InputChat from './InputChat/InputChat';


const Chat = () => {

    let idCounter = 0;

    const [msg, setMsg ] = useState({}); //Cada mensaje es un objeto

    const [chat, setChat ] = useState([ // Cada mensaje es un elemento del array
        {
            id: 0,
            emitter: 'Cat',
            msgs: [ 'Hola', '¿Cómo es tu nombre?']
        }

    ]);

    function getMeMessage(value) {
        idCounter = idCounter + 1;
        setMsg({
            id: idCounter,
            emitter: 'User',
            msg: value
        })
    };

    function sendMessage(e) {
        e.preventDefault();
        setChat([ ...chat, msg ])
    };

    console.log('chat', chat);
    console.log('msg', msg);

    return (
        <div className='chatbot-chat-container'>

            <div className='chatbot-chat-content'>

                <div className='chatbot-chat'>

                    <div className='chatbot-chat-container-body'>
                        { chat.map(( message, index ) =>
                            message.emitter === 'Cat' ?
                                <CatItem
                                key={index}
                                text={message.msg} />
                            :
                                <UserItem
                                key={index}
                                text={message.msg} />
                        )}
                   </div>                                          
                        
                        <div className='chatbot-chat-container-input'>
                            <InputChat
                            getMeMessage={getMeMessage}
                            sendMessage={sendMessage}
                            />
                        </div>

                </div>
            </div>
        </div>
    )
};
//El mensaje es cada uno de los objetos del array Chat.
//El index es un elemento que pide React sí o sí para las iteraciones.


export default Chat;