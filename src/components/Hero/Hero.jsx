import React from "react";
import Header from "../Header/Header";
import './Hero.css'
import hero_image from "../../img/hero_image.png";
import hero_image_back from "../../img/hero_image_back.png";
import Heart from "../../img/heart.png";
import Calories from "../../img/calories.png";
import { motion } from 'framer-motion';
import NumberCounter from 'number-counter';
const Hero = () => {
    const transition = { type: 'spring', duration: 3 };
    const mobile = window.innerWidth <= 768 ? true : false;
    return (
        <div className="hero" id="home">
            <div className="blur blur-h"></div>
            <div className="left-h">
                <Header />

                <div className="ad">
                    <motion.div
                        initial={{ left: mobile ? '165px' : '238px' }}
                        whileInView={{ left: '8px' }}
                        transition={{ ...transition, type: 'tween' }}
                    ></motion.div>
                    <span>The best fitness club in the town</span>
                </div>

                <div className="txt">
                    <div>
                        <span className="stroke-text">Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>body</span>
                    </div>
                    <div>
                        <span>In here we will help you shape and build your body</span>
                    </div>
                </div>
                <div className="figures">
                    <div>
                        <span>
                            <NumberCounter end={140} start={100} delay='4' preFix="+" />
                        </span>
                        <span>Expert trainers</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={978} start={800} delay='4' preFix="+" />
                        </span>
                        <span>Members joined</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={50} start={0} delay='4' preFix="+" />
                        </span>
                        <span>Fitness programs</span>
                    </div>
                </div>
                <div className="btns">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>
            <div className="right-h">
                <button className="btn">Join Now</button>

                <motion.div
                    initial={{ right: "-1rem" }}
                    whileInView={{ right: "4rem" }}
                    transition={transition}
                    className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>
                <img src={hero_image} alt="" className="hero-image" />
                <motion.img
                    initial={{ right: '11rem' }}
                    whileInView={{ right: '20rem' }}
                    transition={transition}
                    src={hero_image_back} alt="" className="hero-image-back" />
                <motion.div
                    initial={{ right: "37rem" }}
                    whileInView={{ right: "28rem" }}
                    transition={transition}
                    className="calories">
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calories burnt</span>
                        <span>220kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero