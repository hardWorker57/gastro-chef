import React from "react";
import '../App.css'
import './styles/Dishes.css'
import dish_1 from '../assets/dish_1.png';
import dish_2 from '../assets/dish_2.png';
import dish_3 from '../assets/dish_3.png';
import dish_4 from '../assets/dish_4.png';
import dish_5 from '../assets/dish_5.png';
import dish_6 from '../assets/dish_6.png';

const Dishes = () => {
  return (
    <div className="Dishes">
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
    </div>
  );
};

export default Dishes;
