import React, {useEffect, useRef} from "react";
import "../App.css";
import "./styles/Advantages.css";
import iconSet from "../icomoon/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";
import Ellipse_115 from '../assets/Ellipse_115.png';
import gsap from "../../node_modules/gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Advantages = () => {

  gsap.registerPlugin(ScrollTrigger);


  let advantages = useRef(null);
  useEffect(() => {
    
    gsap.from(advantages, {x: -350, opacity: -1});
    gsap.to(advantages, {
      x: 0, opacity: 1, duration: 1, delay: .1, repeat: 0, scrollTrigger: {
        trigger: advantages
    }});

  }, [])

  return (
    <div className="container__custom">
      <div ref={el => advantages = el} className="advantages">
        <div className="advantage">
          <IcomoonReact iconSet={iconSet} size={100} icon="eco" />{" "}
          <p className="card__content">Бережём природу. Эко-тара и проборы.</p>
        </div>
        <div className="advantage">
          <IcomoonReact iconSet={iconSet} size={100} icon="Group-213" />{" "}
          <p className="card__content">
            28 дней без повторения, более 300 блюд!
          </p>
        </div>
        <div className="advantage">
          <IcomoonReact iconSet={iconSet} size={100} icon="time" />{" "}
          <p className="card__content">
            Бесплатно заменяем блюда и ингредиенты.
          </p>
        </div>
        <div className="advantage">
          <IcomoonReact iconSet={iconSet} size={100} icon="night" />{" "}
          <p className="card__content">
            Готовим ночью, упаковываем отправляем Вам!
          </p>
        </div>
        <div className="advantage">
          <IcomoonReact iconSet={iconSet} size={100} icon="Group-215" />{" "}
          <p className="card__content">
            Ежедневная удобная и бесплатная доставка <br />с 6:00 до 10:00
          </p>
        </div>
        <div className="advantage">
          <IcomoonReact iconSet={iconSet} size={90} icon="Group-214" />{" "}
          <p className="card__content">
            Сохраняем Вашу энергию и до 14 часов в неделю <br />
            освобождая от готовки!
          </p>
        </div>
      </div>
      <div className="advantages__elips">
        <img src={Ellipse_115} />
      </div>
    </div>
  );
};

export default Advantages;
