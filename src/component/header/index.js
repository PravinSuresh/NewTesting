import React from 'react';
import Logo from '../../assets/logo';
import './styles.scss';

const Header = (props) => {
    return (
        <>
            <header className="headerComponent" data-test="headerComponent">
                <div className="wrap">
                    <div className="logo-wrap">
                        <Logo className="logo-content" data-test="logo-content" />
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;