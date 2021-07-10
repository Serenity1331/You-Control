import React from 'react'
import './footer.styles.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer__contacts">
                    <span className="footer__contacts__text footer__contacts__span">Дзвінок безкоштовний</span>
                    <span className="footer__contacts__phone footer__contacts__span">0 800 309 077</span>
                    <span className="footer__contacts__email footer__contacts__span">mail@youcontrol.com.ua</span>
                    <span className="footer__contacts__cta footer__contacts__span">Вирішили купувати?</span>
                    <button className="footer__contacts__btn">Замовити дзвінок</button>
                </div>

                <div className="footer__links">
                    <div className="footer__links__title">Для користувачів</div>
                    <span className="footer__links__elements">Можливості</span>
                    <span className="footer__links__elements">Кейси</span>
                    <span className="footer__links__elements">Тарифи</span>
                </div>

                <div className="footer__projects">
                    
                    <div className="footer__projects__title">Наші проекти</div>

                    <div className="footer__projects__container">
                        <img className="footer__projects__container__img" src="/icons/Y-shape.svg" alt="YouScore" />
                        <div className="footer__projects__container__box">
                            <span className="footer__projects__container__box__title">YouScore</span>
                            <span className="footer__projects__container__box__subtitle">Доступ по API</span>
                        </div>
                    </div>

                    <div className="footer__projects__container">
                        <img className="footer__projects__container__img" src="/icons/i-extensions.svg" alt="Extension" />
                        <div className="footer__projects__container__box">
                            <span className="footer__projects__container__box__title">Додаток</span>
                            <span className="footer__projects__container__box__subtitle">Chrome, Mozilla</span>
                        </div>
                    </div>

                </div>
                <div className="footer__social">
                   <p className="footer__social__motto">©YouControl – повне досьє на кожну компанію України</p>
                   <div className="footer__social__container">
                       <img className="footer__social__container__icon" src="/icons/i-facebook.svg" alt="Facebook" />
                       <img className="footer__social__container__icon" src="/icons/i-youtube.svg" alt="YouTube" />
                       <img className="footer__social__container__icon" src="/icons/linkedin.svg" alt="LinkedIn" />
                       <img className="footer__social__container__icon" src="/icons/telegram.svg" alt="Telegram" />
                   </div>
                   <div className="footer__social__container-2">
                       <span className="footer__social__container-2__title">Сплачуйте онлайн:</span> 
                       <img className="footer__social__container-2__icon" src="/icons/i-visa_icon.svg" alt="VISA" />
                       <img className="footer__social__container-2__icon" src="/icons/i-mastercard_icon.svg" alt="Mastercard" />
                   </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer
