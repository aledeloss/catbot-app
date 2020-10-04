import React, { useState, useEffect } from 'react';
import './Chat.css';
import CatItem from './CatItem/CatItem';
import UserItem from './UserItem/UserItem';
import InputChat from './InputChat/InputChat';
import Select from './Select/Select';
import { doing, aboutMe } from '../../data/Actions';


const Chat = () => {

    let idCounter = 0;

    const [msg, setMsg ] = useState({}); //Cada mensaje es un objeto

    const [ openSelect ,setOpenSelect ] = useState(false); // cerrado hasta que se cumpla la condición

    const [chat, setChat ] = useState([ // Cada mensaje es un elemento del array
        {
            id: 0,
            emitter: 'Cat',
            msg: [ 'Hola', '¿Cómo es tu nombre?']
        }

    ]);

    function firstResponse(name) {
        let newChat = {
            id: idCounter + 2,
            emitter: 'Cat',
            msg: [
                'Mucho gusto, ' + name + '!',
                'Mi nombre es Dimitri',
                'Haceme una pregunta de la lista y con gusto te respondo :)!'
            ]
        }
        if(newChat) {
            setChat([ ...chat, newChat])
        }
    }

    useEffect( () => {
        if(chat.length === 2) {
            setTimeout( () => firstResponse(msg.msg), 1000);
            setMsg({ ...msg, msg: ''});
            setTimeout( () => setOpenSelect(true), 600);
        }
    }, [chat]);


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

    let options = [
        {
            id: 'What are you doing?',
            text: '¿Qué hacés?',
        },
        // {
        //     id: 'Send me a meme',
        //     text: 'Mandame un meme',
        // },
        {
            id: 'Tell me about you',
            text: 'Contame algo de vos',
        },
    ];

    const [interactions, setInteractions ] = useState([]);

    function handleSelectedOptions(value) {
        let result;
        switch (value) {
            case 'What are you doing?':
                result = doing[ Math.floor( Math.random() * doing.length )] 
                if(result) {
                    setInteractions( [...interactions, result.msg] )
                }              
                break;
            case 'Tell me about you':
                result = aboutMe[ Math.floor( Math.random() * aboutMe.length )] 
                if(result) {
                    setInteractions( [...interactions, result.msg] )
                }
                break;  
            default:
                console.log('No hay valores');
        }
    }

    console.log(msg, 'msg');
    console.log(interactions, 'interactions');


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
                        { openSelect &&
                            <Select
                            handleSelectedOptions = {handleSelectedOptions}
                            options = {options} />
                        }
 
                        { interactions.length > 0 && interactions.map((interaction, index) =>
                                <>
                                    <CatItem key={index} text={interaction}/>
                                    <Select
                                    handleSelectedOptions = {handleSelectedOptions}
                                    options = {options} />
                                </>
                            )
                        }
                   </div>                                          
                        
                        <div className='chatbot-chat-container-input'>
                            <InputChat
                            chat={chat}
                            msg= {msg}
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