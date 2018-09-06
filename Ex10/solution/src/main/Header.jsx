import React from 'react';

import MainNav from './MainNav';
import Title from './Title';

const Header = () => {
    return (
        <div className="top-bar">
            <Title />
            <MainNav />
        </div>
    );
}

export default Header;
