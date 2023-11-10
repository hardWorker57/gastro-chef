import React from "react";
import Website_banner_4 from "./assets/Website_banner_4.png";
import кирилл_фартук_1 from "./assets/кирилл_фартук_1.png";
import Ellipse_100 from "./assets/Ellipse_100.png";
import Ellipse_101 from "./assets/Ellipse_101.png";
import Vector_1 from './assets/Vector_1.png';
import Vector_2 from './assets/Vector_2.png';
import Vector_3 from './assets/Vector_3.png';
import Vector_4 from './assets/Vector_4.png';
import table from './assets/table.png';
import iconSet from "./icomoon/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";
import Ellipse_115 from './assets/Ellipse_115.png';
import dish_1 from './assets/dish_1.png';
import dish_2 from './assets/dish_2.png';
import dish_3 from './assets/dish_3.png';
import dish_4 from './assets/dish_4.png';
import dish_5 from './assets/dish_5.png';
import dish_6 from './assets/dish_6.png';
import "./Header.css";
import "./App.css"

const HeaderAbout = () => {
    return (
    <div className="header">
      <div className="header__container">
        <div className="nav">
          <div className="nav__menu">
            <div className="nav__circle">
              <Link to='/'><img src={Website_banner_4} /></Link>
              healthy ration
            </div>
            <ul className="menu header__block">
              <li className="menu__item">
                <a href="#">Програмы питания</a>
              </li>
              <li className="menu__item">
                <a href="#">Бизнес-ланчи</a>
              </li>
              <li className="menu__item">
                <a href="#">Gastro Shop</a>
              </li>
              <li className="menu__item">
                <a href="#">О нас</a>
              </li>
              <li className="menu__item">
                <a href="#">Блог</a>
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
          <p className="block__title">Detox программа – <br /><span>вкусное очищение</span><br /> организма </p>
          <p>8 бутылочек <span>натуральных</span> смузи и фрешей.</p>
          <div className="header__buy__info">
            <a href="#" className="button">Заказать</a>
            <p className="header__price">Пробный день всего: <br /> <span>427 грн</span></p>
          </div>
        </div>
      </div>
      <div className="sidebar__wrap">
        <div className="sidebar">
          <div className="sidebar__item">Ккал</div>
          <div className="sidebar__item"><img src={Vector_1} /></div>
          <div className="sidebar__item"><img src={Vector_2} /></div>
          <div className="sidebar__item"><img src={Vector_3} /></div>
          <div className="sidebar__item"><img src={Vector_4} /></div>
          <div className="sidebar__item">5<br /><img src={table} /></div>
        </div>
      </div>
      <div className="green__elips">
        <img src={Ellipse_100} width="90%" />
        <div className="hero__wrap">
          <img src={Ellipse_101} width="80%" />
          <div className="hero">
            <img src={кирилл_фартук_1} width="80%" />
          </div>
        </div>
      </div>
      <div className="container__custom">
        <div className="advantages">
          <div className="advantage">
            <IcomoonReact iconSet={iconSet} size={100} icon="eco" /> <p className="card__content">Бережём природу. Эко-тара и проборы.</p>
          </div>
          <div className="advantage">
            <IcomoonReact iconSet={iconSet} size={100} icon="Group-213" /> <p className="card__content">28 дней без повторения, более 300 блюд!</p>
          </div>
          <div className="advantage">
            <IcomoonReact iconSet={iconSet} size={100} icon="time" /> <p className="card__content">Бесплатно заменяем блюда и ингредиенты.</p>
          </div>
          <div className="advantage">
            <IcomoonReact iconSet={iconSet} size={100} icon="night" /> <p className="card__content">Готовим ночью, упаковываем отправляем Вам!</p>
          </div>
          <div className="advantage">
            <IcomoonReact iconSet={iconSet} size={100} icon="Group-215" /> <p className="card__content">Ежедневная удобная и бесплатная доставка <br />с 6:00 до 10:00</p>
          </div>
          <div className="advantage">
            <IcomoonReact iconSet={iconSet} size={90} icon="Group-214" /> <p className="card__content">Сохраняем Вашу энергию и до 14 часов в неделю <br />освобождая от готовки!</p>
          </div>
        </div>
        <div className="advantages__elips"><img src={Ellipse_115} /></div>
      </div>
      <div className="container">
        <div className="shedule">
          <div className="shedule__titles"><a href="#" className="button large__button">Программы питания</a> <br /><a href="#" className="button large__button inactive__btn">Специальные программы</a></div>
          <div className="shedule__regimes">
            <div className="shedule__regime">
              <div className="card__title">Express Fit</div>
              <div className="card__content">800 ккал</div>
            </div>
            <div className="shedule__regime">
              <div className="card__title">slim</div>
              <div className="card__content">1000 ккал</div>
            </div>
            <div className="shedule__regime">
              <div className="card__title">fitness</div>
              <div className="card__content">1300 ккал</div>
            </div>
            <div className="shedule__regime">
              <div className="card__title">balance</div>
              <div className="card__content">1600 ккал</div>
            </div>
            <div className="shedule__regime">
              <div className="card__title">balance +</div>
              <div className="card__content">1800 ккал</div>
            </div>
            <div className="shedule__regime">
              <div className="card__title">strong</div>
              <div className="card__content">2000 ккал</div>
            </div>
            <div className="shedule__regime">
              <div className="card__title">maxi fit</div>
              <div className="card__content">2400 ккал</div>
            </div>
          </div>
        </div>
        <div className="shedule__table">
          <div className="table__left">
            <div className="table__desc">
              <div className="table__desc__title">
                <div className="card__title big__title">fitness</div>
                <div className="card__content">1300 ккал</div>
              </div>
              <div className="content__strech">Программа здорового питания Express Fit. Идеально для: похудения в кратчайшие сроки, повышения энергии и сил, снижения веса при сидячем образе жизни.</div>
            </div>
            <div className="table__price">
              <div className="price__time table__price__item">
                <span className="content__strech">Тестовый день</span>
                <span className="content__strech">1 день</span>
                <span className="content__strech">от 7 дней</span>
                <span className="content__strech">от 14 дней</span>
                <span className="content__strech">от 30 дней</span>
                <span className="content__strech">Завтрак и ужин</span>
              </div>
              <div className="price__discount table__price__item">
                <s className="content__strech">510 грн</s>
                <span className="content__strech invisible">54</span>
                <s className="content__strech">510 грн</s>
                <s className="content__strech">510 грн</s>
                <s className="content__strech">510 грн</s>
                <span className="content__strech">-15%</span>
              </div>
              <div className="prices table__price__item">
                <span className="content__strech">357 грн</span>
                <span className="content__strech">510 грн</span>
                <span className="content__strech">490 грн</span>
                <span className="content__strech">470 грн</span>
                <span className="content__strech">445 грн</span>
                <span className="content__strech">433 грн</span>
              </div>
            </div>
            <a href="#" className="button">Заказать</a>
          </div>
          <div className="table__right">
            <div className="table__days header__block">
              <span>пн</span>
              <span>вт</span>
              <span>ср</span>
              <span>чт</span>
              <span>пт</span>
              <span>сб</span>
              <span>вс</span>
            </div>
            <div className="shedule__day header__block">
              <div className="day__item">
                <div className="day__block">
                  <div className="time__block">
                    <div className="block__title__custom">Завтрак</div>
                    <div className="block__content">7:00 - 9:00</div>
                  </div>
                  <div className="day__last__blocks">
                    <div className="day__menu__item">- Фриттата с сыром и кабачками</div> 
                    <p className="day__mass__item day__block__end">170гр</p>
                  </div>
                </div>
                <div className="day__block">
                  <div className="time__block">
                    <div className="block__title__custom">2-й завтрак</div>
                    <div className="block__content">10:00 - 12:00</div>
                  </div>
                  <div className="day__last__blocks">
                    <span className="day__menu__item">- Фермерский йогурт <br /> - Полезное печенье из сухофруктов и орехов</span>
                  <p className="day__mass__item day__block__end">200гр <br />2 шт</p>
                  </div>
                </div>
                <div className="day__block">
                  <div className="time__block">
                    <div className="block__title__custom">Обед</div>
                    <div className="block__content">13:00 - 15:00</div>
                  </div>
                  <div className="day__last__blocks">
                    <span className="day__menu__item">- Люля-кебаб из индейки <br /> - Летний салат с маслинами и сыром</span>
                  <p className="day__mass__item day__block__end">100гр <br />100гр</p>
                  </div>
                </div>
                <div className="day__block">
                  <div className="time__block">
                    <div className="block__title__custom">Полдник</div>
                    <div className="block__content">16:00 - 17:30</div>
                  </div>
                  <div className="day__last__blocks">
                    <span className="day__menu__item">- Творожное суфле с какао и вишей</span>
                  <p className="day__mass__item day__block__end">100гр</p>

                  </div>
                </div>
                <div className="day__block">
                  <div className="time__block">
                    <div className="block__title__custom">Ужин</div>
                    <div className="block__content">19:00 - 20:00</div>
                  </div>
                  <div className="day__last__blocks">
                    <div className="day__menu__item">- Рыбный терен <br />- Овощи гриль</div>
                    <div className="day__mass__item day__block__end">100гр <br /> 150гр</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dish__images">
          <div className="section__title">Фото блюд</div>
          <div className="dishes">
            <img src={dish_1} className="dish" />
            <img src={dish_2} className="dish" />
            <img src={dish_3} className="dish" />
            <img src={dish_4} className="dish" />
            <img src={dish_5} className="dish" />
            <img src={dish_6} className="dish" />
          </div>
      </div>
      <div className="container">
        <div className="order__faq">
          <div className="order__block order__faq__item">
            <div className="section__title">Оформить заказ</div>
            <div className="center__text">Обсудите все детали заказа по телефону <br />или сами укажите все подробности онлайн</div>
            <div className="order__name">
              <div className="form__title form__name">Имя</div>
              <input type="text" className="order__input" placeholder="Иван"/>
            </div>
            <div className="order__number">
              <div className="form__title form__number">Номер телефона</div>
              <input type="text" className="order__input" placeholder="097214063 2"/>
            </div>
            <div className="agreements">
              <div className="agreement">
                <div className="green__circle__wrap"><div className="green__circle"></div></div>
                <div className="agree__content">Тест-день! Получить скидку -30%?</div>
              </div>
              <div className="agreement">
                <div className="green__circle__wrap"><div className="green__circle"></div></div>
                <div className="agree__content">Согласен с <span>условиями сотрудничества</span></div>
              </div>
            </div>
            <a href="#" className="button btn__inactive">Заказ по телефону</a>
            <p className="block__title__custom">ИЛИ</p>
            <a href="#" className="button">Онлайн заказ</a>
          </div>
          <div className="faq__block order__faq__item">
            <div className="block__title__custom">Часто задаваемые вопросы</div>
            <div className="faq__wrap">
              <div className="faq">
                <div className="faq__item">Как осуществляется доставка правильного питания? <IcomoonReact iconSet={iconSet} size={30} icon="circle-right" /></div>
                <div className="faq__item">Можно ли менять время доставки\место? <IcomoonReact iconSet={iconSet} size={30} icon="circle-right" /></div>
                <div className="faq__item">Как и в чем приезжает еда? <IcomoonReact iconSet={iconSet} size={30} icon="circle-right" /></div>
                <div className="faq__item">Когда Вы готовите? <IcomoonReact iconSet={iconSet} size={30} icon="circle-right" /></div>
                <div className="faq__item">Какие продукты Вы используете? <IcomoonReact iconSet={iconSet} size={30} icon="circle-right" /></div>
                <div className="faq__item">Я буду есть одно и то же? <IcomoonReact iconSet={iconSet} size={30} icon="circle-right" /></div>
                <div className="faq__item">У меня аллергия и непереносимость определенных продуктов <IcomoonReact iconSet={iconSet} size={30} icon="circle-right" /></div>
                <div className="faq__item">В какой очередности все есть? <IcomoonReact iconSet={iconSet} size={30} icon="circle-right" /></div>
                <div className="faq__item">Можно ли замораживать программу? <IcomoonReact iconSet={iconSet} size={30} icon="circle-right" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default HeaderAbout;
