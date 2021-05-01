import React, { useState, useEffect } from 'react'
import './Welcome.css'

function Welcome() {
    const [welcomeMessage, setWelcomeMessage] = useState('')

    useEffect(() => {
        const messages = [
            'Hi there, Welcome to my page! 😃',
            'Hello, it is so nice to meet you! 😊',
            'Greetings friend, and welcome! 🙂',
            'Speak, friend, and enter. 🧙🏼‍♂️'
        ];
        const randomGreeting = messages[Math.floor(Math.random() * messages.length)];
        setWelcomeMessage(randomGreeting)
    })

    return (
        <div className="welcome">
            <h2>{welcomeMessage}</h2>
            <p>You can use the navbubble above to navigate around.</p>
        </div>
    )
}

export default Welcome
