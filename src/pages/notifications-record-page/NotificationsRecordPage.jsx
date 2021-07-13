import React from 'react'
import './notifications-record-page.styles.css'
import Header from '../../components/header/Header'
import DashBoard from '../../components/dashboard/DashBoard'
import Body from '../../components/body/Body'
import Footer from '../../components/footer/Footer'

function NotificationsRecordPage() {
    return (
        <NotificationContext.Provider value=''>
            <div className="notifications-record-page">
                <Header />
                <DashBoard />
                <Body/>
                <Footer />
            </div>
        </NotificationContext.Provider>
    )
}

export default NotificationsRecordPage
export const NotificationContext = React.createContext()
