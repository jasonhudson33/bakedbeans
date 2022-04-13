import React from 'react';

import './header.css';


function Header() {
    return (
        <div id='header'>
            <div className='logo-amount-rewards'>
                <div className='logo-icon' />
                <div>
                    <div className='header-beans-amount-conainer'>
                        <div className='header-beans-amount'>0 Beans</div>
                    </div>
                    <div className='header-beans-rewards'>
                        Rewards: <div className='header-beans-reward-amount'>+ 0 BNB</div>
                    </div>
                </div>
            </div>
            <div className='connect'>Connect</div>
        </div>
    );
}

export default Header;