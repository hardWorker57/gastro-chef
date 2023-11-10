import React from 'react'
import Website_banner_4 from "./assets/Website_banner_4.png";
import iconSet from "./icomoon/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";
import './footer.css'
import './App.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__blocks">
          <div className="footer__block">
            <ul className='footer__left'>
              <li><a href="#">Програмы питания</a></li>
              <li><a href="#">О нас</a></li>
              <li><a href="#">Бизнес-ланчи</a></li>
              <li><a href="#">Gastro Shop</a></li>
              <li><a href="#">Блог</a></li>
            </ul>
          </div>
          <div className="footer__block">
            <img src={Website_banner_4} alt="" />
            <span>сервис здорового питания</span>
          </div>
          <div className="footer__block">
            <div className='footer__info'>
              <ul className='footer__block__li'>
                <li><a href="#">Условия</a></li>
                <li><a href="#">сотрудничества</a></li>
              </ul>
              <p><a href="#">FAQ</a></p>
            </div>
            <div className="contact__icons">
              <div className="contact__icon"><IcomoonReact iconSet={iconSet} size={20} color='white' icon="instagram" className='contact__icon__item'/></div>
              <div className="contact__icon"><IcomoonReact iconSet={iconSet} size={20} color='white' icon="facebook" className='contact__icon__item'/></div>
              <div className="contact__icon"><IcomoonReact iconSet={iconSet} size={20} color='white' icon="whatsapp" className='contact__icon__item'/></div>
              <div className="contact__icon"><IcomoonReact iconSet={iconSet} size={20} color='white' icon="telegram" className='contact__icon__item'/></div>
            </div>
            <div className="nav__number">
              +38 (068) 949 - 49 -19
            </div>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Footer