import React from 'react';

const Header = ({toggleDarkMode, text}) => {
    return (
        <header>
            <p>Posts site</p>
            <div>
                <button onClick={toggleDarkMode} className='darkMode_button'>{text}</button>
            </div>
        </header>
    );
};

export default Header;