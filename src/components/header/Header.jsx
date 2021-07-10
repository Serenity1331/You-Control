import React, {useState} from 'react'
import './header.styles.css'
import NotificationsMenu from '../notifications-menu/NotificationsMenu'
// import Popup from '../popup/Popup';

function Header() {

    const [speakerActive, setSpeakerActive] = useState(false);

    return (
        <header className="header">
            <div className="header__icon-container">
                <div onClick={() => setSpeakerActive(!speakerActive)}
                     className={`header__icon-container__box ${speakerActive ? `active--green` : ''}`}
                >
                    <img src="/icons/loudspeaker.svg" alt="Loudspeaker" />
                </div>
                <div className="header__icon-container__box">
                    <img src="/icons/portrait.svg" alt="User" />
                </div>
                <div className="header__icon-container__box">
                    <img src="/icons/arrow-down.svg" alt="Down" />
                </div>
            </div>

            <NotificationsMenu active={speakerActive} />
            {/* <Popup /> */}
        </header>
    )
}

export default Header
