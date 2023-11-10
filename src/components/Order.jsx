import React from "react";
import { useState } from "react";
import "../App.css"
import './styles/Order.css'
import iconSet from "../icomoon/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";

const Order = () => {
  
  const [accordionState, setAccordionState] = useState();
  const accordionToggle = (i) => {
    if (accordionState == i) {
      return setAccordionState(null);
    }
    setAccordionState(i);
  };
  
  return (
    <div className="container">
      <div className="order__faq">
        <div className="order__block order__faq__item">
          <div className="section__title">Оформить заказ</div>
          <div className="center__text">
            Обсудите все детали заказа по телефону <br />
            или сами укажите все подробности онлайн
          </div>
          <div className="order__name">
            <div className="form__title form__name">Имя</div>
            <input type="text" className="order__input" placeholder="Иван" />
          </div>
          <div className="order__number">
            <div className="form__title form__number">Номер телефона</div>
            <input
              type="text"
              className="order__input"
              placeholder="097214063 2"
            />
          </div>
          <div className="agreements">
            <div className="agreement">
              <div className="green__circle__wrap">
                <div className="green__circle"></div>
              </div>
              <div className="agree__content">
                Тест-день! Получить скидку -30%?
              </div>
            </div>
            <div className="agreement">
              <div className="green__circle__wrap">
                <div className="green__circle"></div>
              </div>
              <div className="agree__content">
                Согласен с <span>условиями сотрудничества</span>
              </div>
            </div>
          </div>
          <a href="#" className="button btn__inactive">
            Заказ по телефону
          </a>
          <p className="block__title__custom">ИЛИ</p>
          <a href="#" className="button">
            Онлайн заказ
          </a>
        </div>
        <div className="faq__block order__faq__item">
          <div className="block__title__custom">Часто задаваемые вопросы</div>
          <div className="faq__wrap">
            <div className="faq">
              <div className="faq__item__wrap">
                <div className="faq__item" onClick={() => accordionToggle(1)}>
                    Как осуществляется доставка правильного питания?{" "}
                    <IcomoonReact iconSet={iconSet} size={30} icon="circle-right" />
                </div>
                <div className={accordionState === 1 ? "accordion__content active" : "accordion__content"}>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae rem nam facilis ab corrupti possimus, ipsa placeat doloremque nisi sunt eligendi consectetur asperiores ut consequatur illo inventore, commodi blanditiis quaerat.</p>
                </div>
              </div>
              
              <div className="faq__item__wrap">
                <div className="faq__item" onClick={() => accordionToggle(2)}>
                    Можно ли менять время доставки\место?{" "}
                    <IcomoonReact iconSet={iconSet} size={30} icon="circle-right" />
                </div>
                <div className={accordionState === 2 ? "accordion__content active" : "accordion__content"}>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae rem nam facilis ab corrupti possimus, ipsa placeat doloremque nisi sunt eligendi consectetur asperiores ut consequatur illo inventore, commodi blanditiis quaerat.</p>
                </div>
              </div>
              
              <div className="faq__item__wrap">
                <div className="faq__item" onClick={() => accordionToggle(3)}>
                    Как и в чем приезжает еда?{" "}
                    <IcomoonReact iconSet={iconSet} size={30} icon="circle-right" />
                </div>
                <div className={accordionState === 3 ? "accordion__content active" : "accordion__content"}>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae rem nam facilis ab corrupti possimus, ipsa placeat doloremque nisi sunt eligendi consectetur asperiores ut consequatur illo inventore, commodi blanditiis quaerat.</p>
                </div>
              </div>
              
              <div className="faq__item__wrap">
                <div className="faq__item" onClick={() => accordionToggle(4)}>
                    Когда Вы готовите?{" "}
                    <IcomoonReact iconSet={iconSet} size={30} icon="circle-right" />
                </div>
                <div className={accordionState === 4 ? "accordion__content active" : "accordion__content"}>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae rem nam facilis ab corrupti possimus, ipsa placeat doloremque nisi sunt eligendi consectetur asperiores ut consequatur illo inventore, commodi blanditiis quaerat.</p>
                </div>
              </div>
              
              <div className="faq__item__wrap">
                <div className="faq__item" onClick={() => accordionToggle(5)}>
                    Какие продукты Вы используете?{" "}
                    <IcomoonReact iconSet={iconSet} size={30} icon="circle-right" />
                </div>
                <div className={accordionState === 5 ? "accordion__content active" : "accordion__content"}>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae rem nam facilis ab corrupti possimus, ipsa placeat doloremque nisi sunt eligendi consectetur asperiores ut consequatur illo inventore, commodi blanditiis quaerat.</p>
                </div>
              </div>
              
              <div className="faq__item__wrap">
                <div className="faq__item" onClick={() => accordionToggle(6)}>
                    Я буду есть одно и то же?{" "}
                    <IcomoonReact iconSet={iconSet} size={30} icon="circle-right" />
                </div>
                <div className={accordionState === 6 ? "accordion__content active" : "accordion__content"}>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae rem nam facilis ab corrupti possimus, ipsa placeat doloremque nisi sunt eligendi consectetur asperiores ut consequatur illo inventore, commodi blanditiis quaerat.</p>
                </div>
              </div>
              
              <div className="faq__item__wrap">
                <div className="faq__item" onClick={() => accordionToggle(7)}>
                    У меня аллергия и непереносимость определенных продуктов{" "}
                    <IcomoonReact iconSet={iconSet} size={30} icon="circle-right" />
                </div>
                <div className={accordionState === 7 ? "accordion__content active" : "accordion__content"}>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae rem nam facilis ab corrupti possimus, ipsa placeat doloremque nisi sunt eligendi consectetur asperiores ut consequatur illo inventore, commodi blanditiis quaerat.</p>
                </div>
              </div>
              
              <div className="faq__item__wrap">
                <div className="faq__item" onClick={() => accordionToggle(8)}>
                    В какой очередности все есть?{" "}
                    <IcomoonReact iconSet={iconSet} size={30} icon="circle-right" />
                </div>
                <div className={accordionState === 8 ? "accordion__content active" : "accordion__content"}>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae rem nam facilis ab corrupti possimus, ipsa placeat doloremque nisi sunt eligendi consectetur asperiores ut consequatur illo inventore, commodi blanditiis quaerat.</p>
                </div>
              </div>
              
              <div className="faq__item__wrap">
                <div className="faq__item" onClick={() => accordionToggle(9)}>
                    Можно ли замораживать программу?{" "}
                    <IcomoonReact iconSet={iconSet} size={30} icon="circle-right" />
                </div>
                <div className={accordionState === 9 ? "accordion__content active" : "accordion__content"}>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae rem nam facilis ab corrupti possimus, ipsa placeat doloremque nisi sunt eligendi consectetur asperiores ut consequatur illo inventore, commodi blanditiis quaerat.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
