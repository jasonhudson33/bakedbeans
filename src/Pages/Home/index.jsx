import React from 'react';

import './home.css';

import { Helmet } from 'react-helmet-async';
import Header from '../../Components/Header';


function Home() {
    return (
        <div id='home'>
            <Helmet>
                <title>Welcome to Backed Beans</title>
                <meta
                    name="description"
                    content=""
                    data-rh="true"
                />
                <link rel='canonical' href='/' />
            </Helmet>

            <Header />

            <div className="home-content">
                <section>
                    <div>
                        <div className="gold-pile" />
                        <div className='wallet-amount-container'>
                            <div className='wallet-amount-label'>Wallet</div>
                            <div className='wallet-amount'>0 BNB</div>
                        </div>
                    </div>

                    <div style={{ marginTop: 50 }}>
                        <div className='beans-amount-container'>
                            <div className='beans-amount-label'>Beans</div>
                            <div className='beans-amount'>0 Beans</div>
                        </div>
                        <div className='beans-amount-container'>
                            <div className='beans-amount-label'>Contract</div>
                            <div className='beans-amount'>0 BNB</div>
                        </div>
                    </div>

                    <div className='input-container'>
                        <input
                            placeholder='0'
                            type='text'
                            className='input'
                            autoFocus={true} />
                        <div>BNB</div>
                    </div>

                    <div className='bake-beans-btn'>
                        Bake Beans
                    </div>
                    <div className='bake-rebake-btns'>
                        <div className='bake-beans-btn'>
                            Re-bake Beans
                        </div>
                        <div className='bake-beans-btn'>
                            Eat Beans
                        </div>
                    </div>
                </section>

                <section id='nutrition-facts'>
                    <div className='nutrition-facts-title'>Nutrition Fact</div>
                    <div className='nutrition-facts-element-container'>
                        <div className='nutrition-facts-element'>Daily Return</div>
                        <div className='nutrition-facts-element'>8%</div>
                    </div>
                    <div className='nutrition-facts-element-container'>
                        <div className='nutrition-facts-element'>APR</div>
                        <div className='nutrition-facts-element'>2,920%</div>
                    </div>
                    <div className='nutrition-facts-element-container'>
                        <div className='nutrition-facts-element'>Dev Fee</div>
                        <div className='nutrition-facts-element'>3%</div>
                    </div>
                </section>

                <section id='referral-link'>
                    <div>
                        <div className='referral-link-label'>Referral Link</div>
                        <input
                            type='text'
                            placeholder='referal link'
                            className='referral-link-input' />
                        <div className='referral-link-text'>
                            Earn 12% of the BNB used to bake
                            beans from anyone who uses your referral link.
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;