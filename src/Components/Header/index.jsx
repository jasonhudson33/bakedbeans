import React from 'react';

import './header.css';


function Header({ balance }) {
    return (
        <div id='header'>
            <div className='logo-amount-rewards'>
                <div className='logo-icon' />
                <div>
                    <div className='header-beans-amount-conainer'>
                        <div className='header-beans-amount'>{balance} Beans</div>
                    </div>
                    <div className='header-beans-rewards'>
                        Rewards: <div className='header-beans-reward-amount'>+ 0 BNB</div>
                    </div>
                </div>
            </div>
            <button className='connect'>Connect</button>
        </div>
    );
}

export default Header;