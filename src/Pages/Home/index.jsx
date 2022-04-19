import React, { useEffect, useState } from 'react';

import { Helmet } from 'react-helmet-async';

import axios from 'axios';

import './home.css';

import Header from '../../Components/Header';


function Home() {

    const [bnbInput, setBnbInput] = useState('')

    const [balance, setBalance] = useState()

    useEffect(() => {
        async function getUser() {
            try {
                const response = await axios.get(
                    'https://api-testnet.bscscan.com/api?module=account&action=balance&address=0x5d975D82897687307aa4158BA52B884E030BEaEF&apikey=47F3HQHWIJVW42F3G27FV1BCFKQRWTA94D'
                );
                setBalance(response.data.result)
            } catch (error) {
                console.error(error);
            }
        }

        getUser()
    }, [])

    const one_wei = 1000000000000000000

    const wei_to_bnb = balance / one_wei

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

            <Header balance={balance} />

            <div className="home-content">
                <section>
                    <div>
                        <div className="gold-pile" />
                        <div className='wallet-amount-container'>
                            <div className='wallet-amount-label'>Wallet</div>
                            <div className='wallet-amount'>{wei_to_bnb} BNB</div>
                        </div>
                    </div>

                    <div style={{ marginTop: 50 }}>
                        <div className='beans-amount-container'>
                            <div className='beans-amount-label'>Contract</div>
                            <div className='beans-amount'>0 BNB</div>
                        </div>
                        <div className='beans-amount-container'>
                            <div className='beans-amount-label'>Beans</div>
                            <div className='beans-amount'>{balance} BEANS</div>
                        </div>
                    </div>

                    <div className='input-container'>
                        <input
                            placeholder='0'
                            type='text'
                            className='input'
                            onChange={(e) => setBnbInput(e.target.value)}
                            autoFocus={true} />
                        <div>BNB</div>
                    </div>

                    <button className='bake-beans-btn'>
                        Buy Gold
                    </button>
                    <div className='bake-rebake-btns'>
                        <button className='bake-beans-btn'>
                            Bury Gold
                        </button>
                        <button className='bake-beans-btn'>
                            Sell Gold
                        </button>
                    </div>
                </section>

                <section id='nutrition-facts'>
                    <div className='nutrition-facts-title'>Nutrition Facts</div>
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
                            className='referral-link-input'
                            disabled={true} />
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