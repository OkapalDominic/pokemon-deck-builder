import React, { useState } from 'react';

import styles from './MainMenu.module.css';

enum TabNames {
    LOGIN, REGISTER
};

function MainMenu() {
    const [tab, setTab] = useState(TabNames.LOGIN);
    let commonTabClasses: string = styles['round-top-corners'] + ' w3-bar-item w3-button w3-white w3-topbar w3-leftbar w3-rightbar ';
    let commonTabContentClasses: string = 'w3-card-4 w3-cell w3-leftbar w3-bottombar w3-rightbar w3-topbar ';

    function tabVisibility(t: TabNames) {
        return commonTabContentClasses + (t === tab ? 'w3-show ' : 'w3-hide ');
    }

    return (
        <div className={'w3-display-container ' + styles['container-height']}>
            <div className={'w3-display-middle'}>
                <div className={styles['content-width']}>

                    <div className='w3-bar'>
                        <button className={commonTabClasses + (tab === TabNames.LOGIN ? 'w3-border-red ' : 'w3-border-black ')} onClick={() => setTab(TabNames.LOGIN)}>
                            <label className={styles['tab-text-size']}>Login</label>
                        </button>
                        <button className={commonTabClasses + (tab === TabNames.REGISTER ? 'w3-border-blue ' : 'w3-border-black ') + 'w3-margin-left '} onClick={() => setTab(TabNames.REGISTER)}>
                            <label className={styles['tab-text-size']}>Register</label>
                        </button>
                    </div>

                    <div className={tabVisibility(TabNames.LOGIN) + 'w3-border-red '}>
                        <div className='w3-container w3-padding'>
                            <label className='w3-text-red'>Username</label>
                            <input className='w3-input' type='text'></input>

                            <label className='w3-text-red'>Password</label>
                            <input className='w3-input' type='password'></input>

                            <button className='w3-button w3-red w3-margin-top'>Submit</button>
                        </div>
                    </div>

                    <div className={tabVisibility(TabNames.REGISTER) + 'w3-border-blue '}>
                        <div className='w3-container w3-padding'>
                            <label className='w3-text-blue'>Username</label>
                            <input className='w3-input' type='text'></input>

                            <label className='w3-text-blue'>Password</label>
                            <input className='w3-input' type='password'></input>

                            <p className='w3-text-red'>Do not use a username/password you have used for sites with sensitive information. (e.g. bank login)</p>

                            <button className='w3-button w3-blue'>Register</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default MainMenu;