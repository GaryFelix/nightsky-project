import Telescope from "../../images/bg-2-scroll-img-removebg-preview.png";
import ScrollDown from "../../images/scroll-down-img__1_-removebg-preview.png";
import Card1 from '../../images/grid1-img.png';
import Card2 from '../../images/grid2-img.png';
import Card3 from '../../images/grid3-img.png';
import Card4 from '../../images/grid4-img.png';
import "./style.css";
import { useState } from "react";



export const Home = () => {

    const[visible, setVisible] = useState(false);
    const changeVisible = () => {
        if(window.scrollY > 600){
            setVisible(true);
        }else{
            setVisible(false);
        }
    }

    window.addEventListener('scroll', changeVisible);

  return (
    <div>
      <section className="hero1">
        <div id="heading">
          <h2>Explore the Nightsky</h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
          <img src={Telescope} alt="" id="telescope" draggable="false" />
        </div>
      <div className="scroll-img">
      <img
          src={ScrollDown}
          alt=""
          id="scroll-img"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: document.querySelector("#hero2").offsetTop,
              behavior: "smooth",
            });
          }}
          draggable="false"
        />
      </div>
      </section>


      <section id="hero2">
        <div className="hero2-heading"> 
          <h2>Discover our experiences</h2>
          <p>
          Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div className="cards">
            <div className={visible ? "card card1": "card"}>
                <img src={Card1} alt="" draggable="false" />
                <h4>Nightfire Camping</h4>
                <p>Velit officia consequat duis enim velit mollit.</p>
            </div>
            <div className={visible ? "card card2": "card"}>
                <img src={Card2} alt="" draggable="false" />
                <h4>Nightfire Camping</h4>
                <p>Velit officia consequat duis enim velit mollit.</p>
            </div>
            <div className={visible ? "card card3": "card"}>
                <img src={Card3} alt="" draggable="false" />
                <h4>Nightfire Camping</h4>
                <p>Velit officia consequat duis enim velit mollit.</p>
            </div>
            <div className={visible ? "card card4": "card"}>
                <img src={Card4} alt="" draggable="false" />
                <h4>Nightfire Camping</h4>
                <p>Velit officia consequat duis enim velit mollit.</p>
            </div>
        </div>
      </section>
    </div>
  );
};
