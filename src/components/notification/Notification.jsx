import React from 'react'
import './notification.styles.css'

function Notification( {tag, date, title, content, tagBgColor, titleFont, bgColor, popupExists, setPopupActive} ) {
    return (
        <div className={`notification ${bgColor}`} onClick={() => popupExists ? setPopupActive() : null}>
            <div className={`notification__tag ${tagBgColor}`}>{tag}</div>
            <div className="notification__date">{date}</div>
            <div className={`notification__title ${titleFont}`}>{title}</div>
            <p className="notification__content">{content}</p>    
        </div>
    )
}

export default Notification
