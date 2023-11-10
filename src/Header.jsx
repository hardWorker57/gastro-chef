import React, {useEffect, useRef} from "react";
import Website_banner_4 from "./assets/Website_banner_4.png";
import Ellipse_100 from "./assets/Ellipse_100.png";
import Ellipse_101 from "./assets/Ellipse_101.png";
import DSC03710_1 from "./assets/DSC03710_1.png";
import Vector_1 from './assets/Vector_1.png';
import Vector_2 from './assets/Vector_2.png';
import Vector_3 from './assets/Vector_3.png';
import Vector_4 from './assets/Vector_4.png';
import table from './assets/table.png';
// import SplitType from 'split-type';
import "./Header.css";
import { Link } from "react-router-dom";
import { gsap, TweenMax, Power3 } from "../node_modules/gsap";

const Header = () => {
  
  let sideItem_1, sideItem_2, sideItem_3, sideItem_4, sideItem_5, sideItem_6 = useRef(null) //sidebar items reference

  let nav__circle, green__elips, hero__wrap, header__text0, header__text1, header__text2 = useRef(null) //references for animation

  useEffect(() => {
    TweenMax.from(sideItem_1, { opacity: 0, x: -150, }), TweenMax.from(sideItem_2, { opacity: 0, x: -150, }), TweenMax.from(sideItem_3, { opacity: "0", x: -150, })
    TweenMax.from(sideItem_4, { opacity: 0, x: -150, }), TweenMax.from(sideItem_5, { opacity: 0, x: -150, }), TweenMax.from(sideItem_6, { opacity: "0", x: -150, })

    TweenMax.staggerTo([sideItem_1, sideItem_2, sideItem_3, sideItem_4, sideItem_5, sideItem_6], 0.3, {opacity: 1, x: 0, ease: Power3.easeOut, delay: .4}, .3)
    
    TweenMax.from(nav__circle, { y: 50, opacity: 0 });
    TweenMax.to(nav__circle, { y: 0, opacity: 1, duration: 1, delay: 0.6, repeat: 0});

    gsap.from(green__elips, {y: 50, opacity: -1});
    gsap.to(green__elips, {y: 0, opacity: 1, duration: 1, delay: 1.2, repeat: 0});
    
    gsap.from(hero__wrap, {x: 150, opacity: -1});
    gsap.to(hero__wrap, { x: 0, opacity: 1, duration: 1, delay: 2.2, repeat: 0 });

    TweenMax.staggerFrom([header__text0, header__text1, header__text2], 1.4, { yPercent: 100, opacity: 0, skewY: 9 }, .6)
    TweenMax.staggerTo([header__text0, header__text1, header__text2], 1.4, {yPercent: 0, opacity: 1, skewY: 0}, .6)
  }, [])
  
  // gsap.from(".sidebar__item", {x: -150, opacity: 0});
  // gsap.to(".sidebar__item", {x: 0, opacity: 1, duration: 1, delay: 1, repeat: 0});
  return (
    <div className="header">
      <div className="header__container">
        <div className="nav">
          <div className="nav__menu">
            <div ref={el => nav__circle = el} className="nav__circle">
              <Link to='/'><img src={Website_banner_4} /></Link>
              healthy ration
            </div>
            <ul className="menu header__block">
              <li className="menu__item">
                <Link to="/progs">Програмы питания</Link>
              </li>
              <li className="menu__item">
                <Link to="/lunches">Бизнес-ланчи</Link>
              </li>
              <li className="menu__item">
                <Link to="/shop">Gastro Shop</Link>
              </li>
              <li className="menu__item">
                <Link to="/about">О нас</Link>
              </li>
              <li className="menu__item">
                <Link to="/blog">Блог</Link>
              </li>
            </ul>
          </div>
          <div className="nav__number header__block number__interact">
            +38 (068) 949 - 49 -19
          </div>
        </div>
        <div className="languages">
          <div className="language">ru</div>
          <div className="language">kg</div>
          <div className="language">en</div>
        </div>
      </div>
      <div className="container">
        <div className="header__content">
          <p ref={el => header__text0 = el} className="block__title">Detox программа – <br /><span>вкусное очищение</span><br /> организма </p>
          <p ref={el => header__text1 = el}>8 бутылочек <span>натуральных</span> смузи и фрешей.</p>
          <div ref={el => header__text2 = el} className="header__buy__info">
            <a href="#" className="button">Заказать</a>
            <p className="header__price">Пробный день всего: <br /> <span>427 грн</span></p>
          </div>
        </div>
      </div>
      <div className="sidebar__wrap">
        <div className="sidebar">
          <div ref={el => sideItem_1 = el} className="sidebar__item">Ккал</div>
          <div ref={el => sideItem_2 = el} className="sidebar__item"><img src={Vector_1} /></div>
          <div ref={el => sideItem_3 = el} className="sidebar__item"><img src={Vector_2} /></div>
          <div ref={el => sideItem_4 = el} className="sidebar__item"><img src={Vector_3} /></div>
          <div ref={el => sideItem_5 = el} className="sidebar__item"><img src={Vector_4} /></div>
          <div ref={el => sideItem_6 = el} className="sidebar__item">5<br /><img src={table} /></div>
        </div>
      </div>
      <div ref={el => green__elips = el} className="green__elips">
        <img src={Ellipse_100} width="90%" />
        <div ref={el => hero__wrap = el} className="hero__wrap">
          <img src={Ellipse_101} width="80%" />
          <div className="hero">
            <img src={DSC03710_1} width="80%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
