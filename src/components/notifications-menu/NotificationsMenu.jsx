import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import './notifications-menu.styles.css'
import Notification from '../notification/Notification'
import Popup from '../popup/Popup'
import { NotificationContext } from '../../pages/notifications-page/NotificationsPage'

function NotificationsMenu( {active} ) {

    const notifications = useContext(NotificationContext);
    const [popupActive, setPopupActive] = useState(false);

    const deactivatePopup = (e) => {
        return e.target.className.includes('popup-wrapper') ? setPopupActive(!popupActive) : null;
    }

    const showNotifications = (data) => {

        if (data) {

            const result = (
                <>
                    <ul className="notifications-menu__list">              
                        <div className="notifications-menu__list__header" key={'header-1'}>
                            <div className="notifications-menu__list__header__title">Сповіщення від YouControl</div>
                        </div>
                        { data.map((elem, idx) => (
                            <Notification tag={elem.tag}
                                        key={idx} 
                                        date={elem.date} 
                                        title={elem.title} 
                                        content={elem.content}
                                        tagBgColor={elem.tagBgColor}
                                        titleFont={elem.titleFont}
                                        bgColor={elem.bgColor}
                                        popupExists={elem.popup}
                                        setPopupActive={() => setPopupActive(!popupActive)} />
                        ))}
                    </ul>
                    <div className="notifications-menu__btn-container" key={'footer-1'}>
                        <Link to="/You-Control/records">
                            <button className="notifications-menu__btn-container__btn">Переглянути всі</button>
                        </Link>
                    </div>

                </>
            )

            return result

        }
        
        // no data
        return (
            <ul className="notifications-menu__list">

                <div className="notifications-menu__list__container">
                    <img src="/You-Control/icons/empty-loudspeaker.svg" alt="" />
                    <p className="notifications-menu__list__container__message">Тут будуть показані всі нові сповіщення</p>
                </div>
            </ul>
            
        )
    }

    return (
            <>
                <div className={`notifications-menu ${active ? `active--speaker` : ''}`}>
                        { showNotifications(notifications) }
                </div>
                <Popup active={popupActive} deactivatePopup={(e) => deactivatePopup(e)} />
            </>
    )
}

export default NotificationsMenu
