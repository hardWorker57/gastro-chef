import React from "react";
import "../App.css"
import "./styles/Table.css"
import { useState } from "react";

const Table = () => {

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (i) => {
    setToggleState(i);
  };

  return (
    <div className="container">
      <div className="shedule">
        <div className="shedule__titles">
          <a href="#" className="button large__button">Программы питания</a>{" "}
          <br />
          <a href="#" className="button large__button inactive__btn">Специальные программы</a>
        </div>
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
            <div className="content__strech">
              Программа здорового питания Express Fit. Идеально для: похудения в
              кратчайшие сроки, повышения энергии и сил, снижения веса при
              сидячем образе жизни.
            </div>
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
            <span className={toggleState === 1 ? "tabs tabs__active" : "tabs"} onClick={() => toggleTab(1)}>пн</span>
            <span className={toggleState === 2 ? "tabs tabs__active" : "tabs"} onClick={() => toggleTab(2)}>вт</span>
            <span className={toggleState === 3 ? "tabs tabs__active" : "tabs"} onClick={() => toggleTab(3)}>ср</span>
            <span className={toggleState === 4 ? "tabs tabs__active" : "tabs"} onClick={() => toggleTab(4)}>чт</span>
            <span className={toggleState === 5 ? "tabs tabs__active" : "tabs"} onClick={() => toggleTab(5)}>пт</span>
            <span className={toggleState === 6 ? "tabs tabs__active" : "tabs"} onClick={() => toggleTab(6)}>сб</span>
            <span className={toggleState === 7 ? "tabs tabs__active" : "tabs"} onClick={() => toggleTab(7)}>вс</span>
          </div>
          <div className="shedule__day header__block">
            <div className={toggleState === 1 ? "day__item day__item__active" : "day__item"}>
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

            <div className={toggleState === 2 ? "day__item day__item__active" : "day__item"}>
              <div className="day__block">
                <div className="time__block">
                  <div className="block__title__custom">Завтрак</div>
                  <div className="block__content">7:00 - 9:00</div>
                </div>
                <div className="day__last__blocks">
                  <div className="day__menu__item">- Лазанья</div>
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

            <div className={toggleState === 3 ? "day__item day__item__active" : "day__item"}>
              <div className="day__block">
                <div className="time__block">
                  <div className="block__title__custom">Завтрак</div>
                  <div className="block__content">7:00 - 9:00</div>
                </div>
                <div className="day__last__blocks">
                  <div className="day__menu__item">- Протеиновый коктейль</div>
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

            <div className={toggleState === 4 ? "day__item day__item__active" : "day__item"}>
              <div className="day__block">
                <div className="time__block">
                  <div className="block__title__custom">Завтрак</div>
                  <div className="block__content">7:00 - 9:00</div>
                </div>
                <div className="day__last__blocks">
                  <div className="day__menu__item">- Мясо по франуцзски</div>
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

            <div className={toggleState === 5 ? "day__item day__item__active" : "day__item"}>
              <div className="day__block">
                <div className="time__block">
                  <div className="block__title__custom">Завтрак</div>
                  <div className="block__content">7:00 - 9:00</div>
                </div>
                <div className="day__last__blocks">
                  <div className="day__menu__item">- Запеканка</div>
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

            <div className={toggleState === 6 ? "day__item day__item__active" : "day__item"}>
              <div className="day__block">
                <div className="time__block">
                  <div className="block__title__custom">Завтрак</div>
                  <div className="block__content">7:00 - 9:00</div>
                </div>
                <div className="day__last__blocks">
                  <div className="day__menu__item">- Фриттата с сыром и овощвми</div>
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

            <div className={toggleState === 7 ? "day__item day__item__active" : "day__item"}>
              <div className="day__block">
                <div className="time__block">
                  <div className="block__title__custom">Завтрак</div>
                  <div className="block__content">7:00 - 9:00</div>
                </div>
                <div className="day__last__blocks">
                  <div className="day__menu__item">- Феттучини</div>
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
  );
};

export default Table;
