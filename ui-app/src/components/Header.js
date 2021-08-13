import React from 'react';
import '../css/App.css';
import { useHistory } from 'react-router';

const Header = () => 
{
    const history = useHistory();
    return <div className="header-panel">
        <a onClick={() => history.push('/')}><h1>Night Owl</h1></a>
        </div>
}

export default Header;