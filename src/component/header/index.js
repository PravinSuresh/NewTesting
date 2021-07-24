import React from 'react';
import Logo from '../../assets/logo';
import './styles.scss';

const Header = (props) => {
    return (
        <>
            <header>
                <div className="wrap">
                    <div className="logo-wrap">
                        <Logo />
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;