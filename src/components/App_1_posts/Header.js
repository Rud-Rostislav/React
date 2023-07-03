import React from 'react';

export default function Header({toggleDarkMode, text}) {
    return (
        <header>
            <p>React app</p>
            <div>
                <button onClick={toggleDarkMode} className='darkMode_button'>{text}</button>
            </div>
        </header>
    );
};