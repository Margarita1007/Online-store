import React from 'react';
import './footer.css';

const Footer: React.FC = () => {
    const date = new Date().getFullYear();
    return (
        <footer>
            <div className='footer-wrapper'>
                <div className='footer-github'></div>
                <div className='footer-text'>Online store ©{date}</div>
            </div>
        </footer>
    )
}

export default Footer;