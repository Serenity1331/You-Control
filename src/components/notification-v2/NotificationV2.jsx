import React from 'react'
import './notification-v2.styles.css'

function NotificationV2( {tag, date, title, content, tagBgColor, titleFont, bgColor} ) {
    return (
        <div className={`notification-v2 ${bgColor}`}>
            <div className="notification-v2__container">
                <div className={`notification-v2__tag ${tagBgColor}`}>{tag}</div>
                <div className="notification-v2__date">{date}</div>
                <div className={`notification-v2__title ${titleFont}`}>{title}</div>
                <p className="notification-v2__content">{content}</p>
            </div>
        </div>
    )
}

export default NotificationV2
