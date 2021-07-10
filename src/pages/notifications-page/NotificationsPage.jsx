import React from 'react'
import './notifications-page.styles.css'
import Header from '../../components/header/Header'
import DashBoard from '../../components/dashboard/DashBoard'
// import NotificationsMenu from '../../components/notifications-menu/NotificationsMenu'
import Footer from '../../components/footer/Footer'

function NotificationsPage() {
    return (
        <div className="notifications-page">
            <Header />
            <DashBoard />
            <div className="main-body" style={{ backgroundImage: "url(/images/bodyImage.png)" }}></div>
            <Footer />
        </div>
    )
}

export default NotificationsPage
