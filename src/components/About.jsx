import React, { useEffect, useRef } from "react";
import "../Header.css";
import "../App.css";
import "./styles/About.css"
import pack from "../assets/pack.png"
import team from "../assets/team.png"
import food_picture from "../assets/food_picture.png"
import iconSet from "../icomoon/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";
import SplitType from "split-type";
import gsap from "gsap";

const About = () => {

  let textRef = useRef(null)
  let text = new SplitType(textRef)
  useEffect(() => {
    gsap.from(text.words, { y: '100%', stagger: 0.1 })
    gsap.to(text.words, { y: '0%'})
  }, [])

  return (
    <div className="About-wrapper">
      <div className="about__container_basic">
        <div className="about__blocks">
          <div className="about__block"><img src={pack} alt="" width={700} /></div>
          <div className="about__block article">
            <div ref={el => textRef = el} className="article__title">История GastroChef началась более 6-ти лет назад... </div>
            <p>Долгое время я наблюдал как людям не хватает времени для правильного и здорового питания, какое правильного, просто питания регулярного. </p>
            <p>Они могли позавтракать, в обед съесть что-то типа шаурмы или снэка, а вечером в силу голода наесться, что плохо сказывалось на их обмене веществ и естественно здоровье. </p>
            <p>Желание хоть как-то изменить ситуацию и помочь людям не давало мне покоя и я решил открыть доставку еды правильного питания. </p>
            <p>Я со своим 17-и летним опытом в спорте и проф. образованием, вместе с диетологом разработали рационы правильного питания с подсчетом калорий (КБЖУ).</p>
            <br />
            <div className="article__title">Знакомтесь! Команда GastroChef!</div>
          </div>
        </div>
      </div>
      <div className="about__blocks about__blocks_second"><img src={team} alt="" /></div>
      <div className="about__container">
        <div className="about__blocks about__blocks_third">
          <div className="about__block article custom_article">
            <div className="article__title">«GastroChef - легко для занятых»</div>
            <p>GastroChef - правильное питание с доставкой на дом, создано что бы облегчить жизнь, освободить время от готовки, от ненужных перекусов, фастфудов и дать возможность чувствовать себя легко и полным энергии, сил, для новых свершений и побед.</p>
            <p>Все продукты для приготовления правильного питания закупаются только с сертификатами, а рационы готовятся на современной и безопасной кухне ночью перед приездом к Вам!</p>
            <p className="bold_text">Друзья, если у Вас остались вопросы Вы с легкостью можете позвонить нам или написать мне лично в Инстаграм или Фейсбук.</p>
            <div className="article__title">С уважением, Кобылинский Кирилл.</div>
            <p className="article__contact">
              <div className="contact__icon"><IcomoonReact iconSet={iconSet} size={20} color='white' icon="instagram" className='contact__icon__item' /></div>
              <div className="contact__icon"><IcomoonReact iconSet={iconSet} size={20} color='white' icon="facebook" className='contact__icon__item' /></div>
              - Я в социальных сетях</p>
          </div>
          <div className="about_block"><img src={food_picture} alt="" width={800} /></div>
        </div>
      </div>
    </div>
  );
};

export default About;
