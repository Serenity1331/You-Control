import React, { useState } from 'react'
import NotificationV2 from '../notification-v2/NotificationV2';
import './body.styles.css'

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
            tag: 'оновлення',
            date: '20.05.2019',
            title: 'Нові функції моніторинга',
            content: 'Uniquely fashion B2B content for one-to-one web-readiness. Continually embrace.',
            tagBgColor: 'bg--green',
            titleFont: '',
            bgColor: '',
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
            tag: 'оновлення',
            date: '20.05.2019',
            title: 'Нові функції моніторинга',
            content: 'Uniquely fashion B2B content for one-to-one web-readiness. Continually embrace.',
            tagBgColor: 'bg--green',
            titleFont: '',
            bgColor: '',
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
            tag: 'оновлення',
            date: '20.05.2019',
            title: 'Нові функції моніторинга',
            content: 'Uniquely fashion B2B content for one-to-one web-readiness. Continually embrace.',
            tagBgColor: 'bg--green',
            titleFont: '',
            bgColor: '',
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
    ]
}

function Body() {

    const [chosenColumn, setChosenColumn] = useState('notifications');
    const notifications = getNotificationData();
    
    const setAsChosen = (e) => {

        if (e.target.className.includes('notifications-body__header__account')) setChosenColumn('account')
        if (e.target.className.includes('notifications-body__header__history')) setChosenColumn('history')
        if (e.target.className.includes('notifications-body__header__notifications')) setChosenColumn('notifications')
          
    }
    
    return (
        <div className="notifications-body">

            <div className="notifications-body__header">
                <div className={`notifications-body__header__account ${chosenColumn === 'account' ? 'column--chosen' : ''}`} 
                                onClick={(e) => setAsChosen(e)}>Мій акаунт</div>
                <div className={`notifications-body__header__history ${chosenColumn === 'history' ? 'column--chosen' : ''}`}
                                onClick={(e) => setAsChosen(e)}>Історія транзакцій</div>
                <div className={`notifications-body__header__notifications ${chosenColumn === 'notifications' ? 'column--chosen' : ''}`}
                                onClick={(e) => setAsChosen(e)}>Сповіщення</div>
            </div>

            <div className="notifications-body__title-box">
                <div className="notifications-body__title-box__title">Ваші сповіщення</div>
            </div>


            <ul className="notifications-body__list">
                { notifications.map((elem, idx) => (
                    <NotificationV2
                                tag={elem.tag}
                                key={idx} 
                                date={elem.date} 
                                title={elem.title} 
                                content={elem.content}
                                tagBgColor={elem.tagBgColor}
                                titleFont={elem.titleFont}
                                bgColor={elem.bgColor}
                                />
                ))}
            </ul>

            <div className="notifications-body__pagination">
                <li className="notifications-body__pagination__prev">&lt;</li>
                <li className="page--current">1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>...</li>
                <li>9</li>
                <li className="notifications-body__pagination__next">&gt;</li>
            </div>
        </div>
    )
}

export default Body
