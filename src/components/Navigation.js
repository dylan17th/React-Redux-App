import React from 'react'; 
import {Link} from 'react-router-dom';

import '../style/navigation.css'


const Navigation = () => {
    return( 
        <div className='nav-container'>
            <h1 className='header'><span className='symbol'>Br<span className='number'>35</span></span>eaking <span className='symbol'>Ba<span className='number'>56</span></span>d</h1>
            <div className='links-container'>
                <Link className='link' to='/'>Home</Link>
                <Link className='link' to='/find-character-qoutes'>Character Qoutes</Link>
            </div>
        </div>
    )
}

export default Navigation;