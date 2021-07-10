import React from 'react'
import './notifications-record-page.styles.css'
import Header from '../../components/header/Header'
import DashBoard from '../../components/dashboard/DashBoard'
import Footer from '../../components/footer/Footer'

function NotificationsRecordPage() {
    return (
        <div className="notifications__record__page">
            <Header />
            <DashBoard />
            <div className="notifications__body"></div>
            <Footer />
        </div>
    )
}

export default NotificationsRecordPage
