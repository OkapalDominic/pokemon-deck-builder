import React from 'react';

import styles from './MainMenu.module.css';

function MainMenu() {
    let regBtnClasses: string = "w3-bar-item w3-button w3-mobile w3-hover-none w3-border-white w3-bottombar w3-hover-border-red";
    let selectedBtnClasses: string = regBtnClasses.replace("w3-border-white", "w3-border-blue");
    return (
        <div className="w3-bar w3-card-4">
            <button className={selectedBtnClasses}>Home</button>
            <button className={regBtnClasses}>Link 1</button>
            <button className={regBtnClasses}>Link 2</button>
            <button className={regBtnClasses}>Link 3</button>
        </div>
    );
}

export default MainMenu;