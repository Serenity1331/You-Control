import React from 'react'
import './footer.styles.css'

function Footer() {
    return (
        <footer>
            <div className="footer__container">

                <div className="footer__contacts">
                    <span>Дзвінок безкоштовний</span>
                    <span>0 800 309 077</span>
                    <span>mail@youcontrol.com.ua</span>
                    <span>Вирішили купувати?</span>
                    <button className="footer__call">Замовити дзвінок</button>
                </div>

                <div className="footer__links">
                    <div>Для користувачів</div>
                    <span>Можливості</span>
                    <span>Кейси</span>
                    <span>Тарифи</span>
                </div>

                <div className="footer__projects">
                    
                    <div>Наші проекти</div>

                    <div className="footer__projects__container">
                        <img src="/icons/Y-shape.svg" alt="YouScore" />
                        <div>
                            <span>YouScore</span>
                            <span>Доступ по API</span>
                        </div>
                    </div>

                    <div className="footer__projects__container">
                        <img src="/icons/i-extensions.svg" alt="Extension" />
                        <div>
                            <span>Додаток</span>
                            <span>Chrome, Mozilla</span>
                        </div>
                    </div>

                </div>
                <div className="footer__social">
                   <p>©YouControl – повне досьє на кожну компанію України</p>
                   <div>
                       <img src="/icons/i-facebook.svg" alt="Facebook" />
                       <img src="/icons/i-youtube.svg" alt="YouTube" />
                       <img src="/icons/linkedin.svg" alt="LinkedIn" />
                       <img src="/icons/telegram.svg" alt="Telegram" />
                   </div>
                   <div>
                       <span>Сплачуйте онлайн:</span> 
                       <img src="/icons/i-visa_icon.svg" alt="VISA" />
                       <img src="/icons/i-mastercard_icon.svg" alt="Mastercard" />
                   </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer
