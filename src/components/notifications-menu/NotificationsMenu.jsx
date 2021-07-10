import React, {useState} from 'react'
import './notifications-menu.styles.css'
import Notification from '../notification/Notification'
import Popup from '../popup/Popup'

function getNotificationData() {
    return [
        {
            tag: 'оновлення',
            date: 'Сьогодні 29.05.2019',
            title: 'Нові функції моніторинга',
            content: 'Uniquely fashion B2B content for one-to-one web-readiness. Continually embrace.',
            tagBgColor: 'bg--green',
            titleFont: '',
            bgColor: '',
            popup: true,
        }, 
        {
            tag: 'оновлення',
            date: '28.05.2019',
            title: 'Оновленна вкладка судових рішень',
            content: 'Synergistically aggregate inexpensive value after enterprise e-tailers. Assertively mesh cooperative resources before revolutionary bandwidth. Globally expedite team.',
            tagBgColor: 'bg--green',
            titleFont: 'font--bold',
            bgColor: 'bg--white',
        },        
        {
            tag: 'Гаряча новина',
            date: '28.05.2019',
            title: 'Сьогодні YouControl провів зустріч з представн...',
            content: 'Competently exploit competitive best practices through timely total linkage. Continually e-enable exceptional.',
            tagBgColor: 'bg--red',
            titleFont: 'font--bold',
            bgColor: 'bg--white',
        },        
        {
            tag: 'Вебінар',
            date: '21.05.2019',
            title: 'Нові функції моніторинга',
            content: 'Uniquely fashion B2B content for one-to-one web-readiness. Continually embrace.',
            tagBgColor: 'bg--orange',
            titleFont: '',
            bgColor: '',
        },        
        {
            tag: 'оновлення',
            date: '20.05.2019',
            title: 'Нові функції моніторинга',
            content: 'Uniquely fashion B2B content for one-to-one web-readiness. Continually embrace.',
            tagBgColor: 'bg--green',
            titleFont: '',
            bgColor: '',
        },        
        {
            tag: 'Зустріч',
            date: '15.05.2019',
            title: 'Сьогодні YouControl провів зустріч з представн...',
            content: 'Competently exploit competitive best practices through timely total linkage. Continually e-enable exceptional.',
            tagBgColor: 'bg--navy',
            titleFont: '',
            bgColor: 'bg--white',
        },        
        {
            tag: 'Lorem Ipsum',
            date: '15.05.2019',
            title: 'Сьогодні YouControl провів зустріч з представн...',
            content: 'Competently exploit competitive best practices through timely total linkage. Continually e-enable exceptional.',
            tagBgColor: 'bg--green',
            titleFont: '',
            bgColor: '',

        },
        {
            tag: 'Lorem Ipsum',
            date: '15.05.2019',
            title: 'Сьогодні YouControl провів зустріч з представн...',
            content: 'Competently exploit competitive best practices through timely total linkage. Continually e-enable exceptional.',
            tagBgColor: 'bg--green',
            titleFont: '',
            bgColor: '',

        }, 
        {
            tag: 'Lorem Ipsum',
            date: '15.05.2019',
            title: 'Сьогодні YouControl провів зустріч з представн...',
            content: 'Competently exploit competitive best practices through timely total linkage. Continually e-enable exceptional.',
            tagBgColor: 'bg--green',
            titleFont: '',
            bgColor: '',

        }, 
        {
            tag: 'Lorem Ipsum',
            date: '15.05.2019',
            title: 'Сьогодні YouControl провів зустріч з представн...',
            content: 'Competently exploit competitive best practices through timely total linkage. Continually e-enable exceptional.',
            tagBgColor: 'bg--green',
            titleFont: '',
            bgColor: '',

        }, 
        {
            tag: 'Lorem Ipsum',
            date: '15.05.2019',
            title: 'Сьогодні YouControl провів зустріч з представн...',
            content: 'Competently exploit competitive best practices through timely total linkage. Continually e-enable exceptional.',
            tagBgColor: 'bg--green',
            titleFont: '',
            bgColor: '',
        }, 
        {
            tag: 'Lorem Ipsum',
            date: '15.05.2019',
            title: 'Сьогодні YouControl провів зустріч з представн...',
            content: 'Competently exploit competitive best practices through timely total linkage. Continually e-enable exceptional.',
            tagBgColor: 'bg--green',
            titleFont: '',
            bgColor: '',
        },  
    ]
}

function NotificationsMenu( {active} ) {

    const notifications = getNotificationData();
    const [popupActive, setPopupActive] = useState(false);

    const deactivatePopup = (e) => {
        return e.target.className.includes('popup-wrapper') ? setPopupActive(!popupActive) : null;
    }

    return (
            <>
                <div className={`notifications-menu ${active ? `active--speaker` : ''}`}>
                    <ul className="notifications-menu__list">
                        <div className="notifications-menu__list__header">
                            <div className="notifications-menu__list__header__title">Сповіщення від YouControl</div>
                        </div>

                        { notifications.map((elem, idx) => (
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

                    <div className="notifications-menu__btn-container">
                        <button className="notifications-menu__btn-container__btn">Переглянути всі</button>
                    </div>
                </div>
                <Popup active={popupActive} deactivatePopup={(e) => deactivatePopup(e)} />
            </>
    )
}

export default NotificationsMenu
