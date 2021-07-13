import React from 'react'
import './notifications-page.styles.css'
import Header from '../../components/header/Header'
import DashBoard from '../../components/dashboard/DashBoard'
// import NotificationsMenu from '../../components/notifications-menu/NotificationsMenu'
import Footer from '../../components/footer/Footer'


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

function NotificationsPage() {
    return (
        <NotificationContext.Provider value={getNotificationData()}>
            <div className="notifications-page">
                <Header />
                <DashBoard />
                <div className="main-body" style={{ backgroundImage: "url(/images/bodyImage.png)" }}></div>
                <Footer />
            </div>
        </NotificationContext.Provider>
    )
}

export default NotificationsPage
export const NotificationContext = React.createContext();
