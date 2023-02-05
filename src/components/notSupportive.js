import React from 'react';
import '../styles/notSupportive.css';

const NotSupportive = () => {
    return (
        <div className='main_div'>
            <img alt='logo' src={require('../assets/logo.png')} />
            <h1 class="main_head">Hey 👋</h1>
            <p class="main_para">Our Editor is optimized for desktop, as we provide you with powerful tools to create beautiful code explanations and marketing materials.</p>
        </div>
    )
}

export default NotSupportive