import React, { useRef, useEffect } from "react";
import "./Alumini.css";
import profile from "../../assets/profile.png";
import VanillaTilt from "vanilla-tilt";
import Nav from "../layout/Nav";
import devraj from "../../assets/alumini/2022/devraj.jpg";
import ankan from "../../assets/alumini/2022/ankan.jpg";
import jintu from "../../assets/alumini/2022/jintu.jpg";
import sam from "../../assets/alumini/2022/sam.jpg";
import srijeeta from "../../assets/alumini/2022/srijeeta.JPG";
import vraj from "../../assets/alumini/2022/vraj.jpg";
import yathansh from "../../assets/alumini/2022/yathansh.jpg";
import abishek from "../../assets/alumini/2021/abishek.jpg";
import akhil from "../../assets/alumini/2021/akhil.jpg";
import anu from "../../assets/alumini/2021/anu.jpeg";
import baidik from "../../assets/alumini/2021/baidik.jpg";
import deap from "../../assets/alumini/2021/deap.jpg";
import hemant from "../../assets/alumini/2021/hemant.jpg";
import kumar from "../../assets/alumini/2021/kumar.jpg";
import richik from "../../assets/alumini/2021/richik.jpg";
import rijwan from "../../assets/alumini/2021/rijwan.jpg";
import sannidhya from "../../assets/alumini/2021/sannidhya.jpeg";
import soumya from "../../assets/alumini/2021/soumya.jpg";
import subhradeep from "../../assets/alumini/2021/subhradeep.jpg";
import adrija from "../../assets/alumini/2020/adrija.jpg";
import ahona from "../../assets/alumini/2020/ahona.jpg";
import debojyoti from "../../assets/alumini/2020/debojyoti.jpg";
import rahul from "../../assets/alumini/2020/rahul.jpg";
import rishi from "../../assets/alumini/2020/rishi.jpg";
import ronojit from "../../assets/alumini/2020/ronojit.jpg";
import sarnava from "../../assets/alumini/2020/sarnava.jpg";
import souman from "../../assets/alumini/2020/souman.jpeg";
import sourav from "../../assets/alumini/2020/sourav.jpg";
import abhishek from "../../assets/alumini/2019/abhishek.jpg";
import arnav from "../../assets/alumini/2019/arnav.jpg";
import gaurav from "../../assets/alumini/2019/gaurav.jpg";
import mayukh from "../../assets/alumini/2019/mayukh.jpg";
import melonica from "../../assets/alumini/2019/melonica.jpg";
import paramartha from "../../assets/alumini/2019/paramartha.jpg";
import rohith from "../../assets/alumini/2019/rohith.jpg";
import sudeshna from "../../assets/alumini/2019/sudeshna.jpg";
import ujani from "../../assets/alumini/2019/ujani.jpg";
import annyesha from "../../assets/alumini/2018/annyesha.jpg";
import arijit from "../../assets/alumini/2018/arijit.jpg";
import dipankar from "../../assets/alumini/2018/dipankar.jpg";
import pavitra from "../../assets/alumini/2018/pavitra.jpg";
import priyam from "../../assets/alumini/2018/priyam.jpg";
import satadal from "../../assets/alumini/2018/satadal.jpg";
import shramana from "../../assets/alumini/2018/shramana.jpg";
import surjo from "../../assets/alumini/2018/surjo.jpg";
import anjali from "../../assets/alumini/2017/anjali.jpg";
import ankur from "../../assets/alumini/2017/ankur.jpg";
import manoj from "../../assets/alumini/2017/manoj.jpg";
import pratim from "../../assets/alumini/2017/pratim.jpg";
import preeti from "../../assets/alumini/2017/preeti.jpg";
import sid from "../../assets/alumini/2017/sid.jpg";
import ankit from "../../assets/alumini/2016/ankit.jpg";
import kaustuva from "../../assets/alumini/2016/kaustuva.jpg";
import sankarshan from "../../assets/alumini/2016/sankarshan.jpg";
import soumyaa from "../../assets/alumini/2016/soumyaa.jpg";
import vishal from "../../assets/alumini/2016/vishal.jpg";
import ajay from "../../assets/alumini/2015/ajay.jpg";
import atreyee from "../../assets/alumini/2015/atreyee.jpg";
import avinav from "../../assets/alumini/2015/avinav.jpg";
import harshit from "../../assets/alumini/2015/harshit.jpg";
import rana from "../../assets/alumini/2015/rana.jpg";
import samya from "../../assets/alumini/2015/samya.jpg";
import shakeel from "../../assets/alumini/2015/shakeel.jpg";
import shubham from "../../assets/alumini/2015/shubham.jpg";

import aaghran from "../../assets/alumini/2014/aaghran.jpg";
import adil from "../../assets/alumini/2014/adil.jpg";
import garima from "../../assets/alumini/2014/garima.jpg";
import kartikeya from "../../assets/alumini/2014/kartikeya.jpg";
import sayan from "../../assets/alumini/2014/sayan.jpg";
import shashi from "../../assets/alumini/2014/shashi.jpg";
import subhrangshu from "../../assets/alumini/2014/subhrangshu.jpg";
import swami from "../../assets/alumini/2014/swami.jpg";

import MetaData from "../layout/MetaData";

const Alumini = () => {
  const options = {
    scale: 1,
    speed: 1000,
    max: 10,
  };
  const tilt = useRef(null);
  const tilt2 = useRef(null);
  const tilt3 = useRef(null);
  const tilt4 = useRef(null);
  const tilt5 = useRef(null);
  const tilt6 = useRef(null);
  const tilt7 = useRef(null);
  const tilt8 = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
    VanillaTilt.init(tilt2.current, options);
    VanillaTilt.init(tilt3.current, options);
    VanillaTilt.init(tilt4.current, options);
    VanillaTilt.init(tilt5.current, options);
    VanillaTilt.init(tilt6.current, options);
    VanillaTilt.init(tilt7.current, options);
    VanillaTilt.init(tilt8.current, options);
    // eslint-disable-next-line
  }, []);

  return (
    <>
    <MetaData title="Alumini" />
      <Nav />
      <div className="aluminisectionhighesttag">
      <div className="spaceProviderForAluminifirstsection"></div>
      <section id="2022">
        <div class="aluminiStrengthContainer">
          <h1 class="alumini-title">Class of 2022</h1>
          <div class="aluminiStrengthBasket">
            <div class="aluminiStrengthCard" ref={tilt} {...options}>
              <div class="aluminiStrengthContent">
                <img src={devraj} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Devraj Kakoty</h3>
                <h4>Computer Science and Engineering</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt2} {...options}>
              <div class="aluminiStrengthContent">
                <img src={yathansh} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Yathansh Jain</h3>
                <h4>Computer Science and Engineering</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt3} {...options}>
              <div class="aluminiStrengthContent">
                <img src={vraj} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Vraj Karthik Desai</h3>
                <h4>Mechanical Engineering</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt4} {...options}>
              <div class="aluminiStrengthContent">
                <img src={srijeeta} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Srijeeta Das</h3>
                <h4>Computer Science and Engineering</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt5} {...options}>
              <div class="aluminiStrengthContent">
                <img src={ankan} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Ankan Chakraborty</h3>
                <h4>Mechanical Engineering</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt6} {...options}>
              <div class="aluminiStrengthContent">
                <img src={sam} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Samujjal Suni Mochari</h3>
                <h4>Electronics and Communication Engineering</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt7} {...options}>
              <div class="aluminiStrengthContent">
                <img src={jintu} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Jintu Moni Nath</h3>
                <h4>Biotechnolgy</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="2021">
        <div class="aluminiStrengthContainerwhite">
          <h1 class="alumini-title">Class of 2021</h1>
          <div class="aluminiStrengthBasketwhite">
            <div class="aluminiStrengthCard" ref={tilt} {...options}>
              <div class="aluminiStrengthContent">
                <img src={hemant} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Hemant Beniwal</h3>
                <h4>Computer Science and Engineering</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt2} {...options}>
              <div class="aluminiStrengthContent">
                <img src={baidik} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Baidik Sarbadhyaksha</h3>
                <h4>Information Technology</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt3} {...options}>
              <div class="aluminiStrengthContent">
                <img src={abishek} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Abishek Gupta</h3>
                <h4>Civil Enginnering</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt4} {...options}>
              <div class="aluminiStrengthContent">
                <img src={richik} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Richik Ghosh</h3>
                <h4>Mechanical Engineering</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt5} {...options}>
              <div class="aluminiStrengthContent">
                <img src={soumya} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Soumya Ranjan</h3>
                <h4>Electronics and Communication Engineering</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt6} {...options}>
              <div class="aluminiStrengthContent">
                <img src={akhil} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Akhil Boyina</h3>
                <h4>Chemical Engineering</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt7} {...options}>
              <div class="aluminiStrengthContent">
                <img src={deap} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Deap Nandi</h3>
                <h4>Electrical Engineering</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt8} {...options}>
              <div class="aluminiStrengthContent">
                <img src={subhradeep} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Subhradeep Barman</h3>
                <h4></h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt8} {...options}>
              <div class="aluminiStrengthContent">
                <img src={sannidhya} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Sannidhya Bagchi</h3>
                <h4>Chemical Enginnering</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt8} {...options}>
              <div class="aluminiStrengthContent">
                <img src={rijwan} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Rijwan Karim</h3>
                <h4>Chemical Enginnering</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt8} {...options}>
              <div class="aluminiStrengthContent">
                <img src={kumar} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Kumar Siddhant</h3>
                <h4>Mechanical Enginnering</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt8} {...options}>
              <div class="aluminiStrengthContent">
                <img src={anu} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Anu Aruna</h3>
                <h4>Chemical Enginering</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="2020">
        <div class="aluminiStrengthContainer">
          <h1 class="alumini-title">Class of 2020</h1>
          <div class="aluminiStrengthBasket">
            <div class="aluminiStrengthCard" ref={tilt} {...options}>
              <div class="aluminiStrengthContent">
                <img src={sarnava} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Sarnava Konar</h3>
                <h4>Electronics and Communication Engineering</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt2} {...options}>
              <div class="aluminiStrengthContent">
                <img src={sourav} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Sourav Bhattacharjee</h3>
                <h4>Information Technology</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt3} {...options}>
              <div class="aluminiStrengthContent">
                <img src={ronojit} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Ronojit Roy</h3>
                <h4>Electronics and Communication Engineering</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt4} {...options}>
              <div class="aluminiStrengthContent">
                <img src={adrija} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Adrija Bhowmik</h3>
                <h4>Computer Science and Engineering</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt5} {...options}>
              <div class="aluminiStrengthContent">
                <img src={souman} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Souman Pani</h3>
                <h4>Mechanical Enginnering</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt6} {...options}>
              <div class="aluminiStrengthContent">
                <img src={rahul} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Rahul Ghosh</h3>
                <h4>Mechanical Enginnering</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt7} {...options}>
              <div class="aluminiStrengthContent">
                <img src={debojyoti} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Debojyoti Mandal</h3>
                <h4>Material and Metallurjy Enginnering</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt8} {...options}>
              <div class="aluminiStrengthContent">
                <img src={rishi} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Rishi Agarwal</h3>
                <h4>Mechanical Enginnering</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt8} {...options}>
              <div class="aluminiStrengthContent">
                <img src={ahona} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Ahona Mitra</h3>
                <h4>Mechanical Enginnering</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="2019">
        <div class="aluminiStrengthContainerwhite">
          <h1 class="alumini-title">Class of 2019</h1>
          <div class="aluminiStrengthBasketwhite">
            <div class="aluminiStrengthCard" ref={tilt} {...options}>
              <div class="aluminiStrengthContent">
                <img src={rohith} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Rohith Sajja</h3>
                <h4>Computer Science and Engineering</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt2} {...options}>
              <div class="aluminiStrengthContent">
                <img src={mayukh} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Mayukh Bhattacharya</h3>
                <h4>Information Technology</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt3} {...options}>
              <div class="aluminiStrengthContent">
                <img src={sudeshna} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Sudeshna Sen</h3>
                <h4>Electronics and Communication Engineering</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt4} {...options}>
              <div class="aluminiStrengthContent">
                <img src={ujani} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Ujani Hazra</h3>
                <h4>Biotechnolgy</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt5} {...options}>
              <div class="aluminiStrengthContent">
                <img src={arnav} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Arnav Sharma</h3>
                <h4>Computer Science and Engineering</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt6} {...options}>
              <div class="aluminiStrengthContent">
                <img src={gaurav} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Gaurav Badhan</h3>
                <h4>Mechanical Enginnering</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt7} {...options}>
              <div class="aluminiStrengthContent">
                <img src={abhishek} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Abhisek Kumar Shah</h3>
                <h4>Electrical Enginnering</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt8} {...options}>
              <div class="aluminiStrengthContent">
                <img src={paramartha} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Paramartha Sengupta</h3>
                <h4>Chemical Engineering</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt8} {...options}>
              <div class="aluminiStrengthContent">
                <img src={melonica} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Melonica Mahapatra</h3>
                <h4>Materials and Metallurgy Enginnering</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="2018">
        <div class="aluminiStrengthContainer">
          <h1 class="alumini-title">Class of 2018</h1>
          <div class="aluminiStrengthBasket">
            <div class="aluminiStrengthCard" ref={tilt} {...options}>
              <div class="aluminiStrengthContent">
                <img src={surjo} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Surjo Samanta</h3>
                <h4>Electronics and Communication Engineering</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt2} {...options}>
              <div class="aluminiStrengthContent">
                <img src={arijit} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Arijit Chaterjee</h3>
                <h4>Computer Science and Engineering</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt3} {...options}>
              <div class="aluminiStrengthContent">
                <img src={shramana} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Shramana Patra</h3>
                <h4>Information Technology</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt4} {...options}>
              <div class="aluminiStrengthContent">
                <img src={annyesha} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Annyesha Sarkar</h3>
                <h4>Chemical Engineering</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt5} {...options}>
              <div class="aluminiStrengthContent">
                <img src={satadal} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Satadal Majumdar</h3>
                <h4>Electrical Engineering</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt6} {...options}>
              <div class="aluminiStrengthContent">
                <img src={priyam} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Priyam Saikia</h3>
                <h4>Civil Engineering</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt7} {...options}>
              <div class="aluminiStrengthContent">
                <img src={pavitra} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Pavitra Singh</h3>
                <h4>Biotechnolgy</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt8} {...options}>
              <div class="aluminiStrengthContent">
                <img src={dipankar} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Dipankar Swargiary</h3>
                <h4>Chemical Engineering</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="2017">
        <div class="aluminiStrengthContainerwhite">
          <h1 class="alumini-title">Class of 2017</h1>
          <div class="aluminiStrengthBasketwhite">
            <div class="aluminiStrengthCard" ref={tilt} {...options}>
              <div class="aluminiStrengthContent">
                <img src={pratim} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Pratim Sarkar</h3>
                <h4>Infomation Technology</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt2} {...options}>
              <div class="aluminiStrengthContent">
                <img src={manoj} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Manoj Baishya</h3>
                <h4>Chemical Engineering</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt3} {...options}>
              <div class="aluminiStrengthContent">
                <img src={preeti} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Preeti Poonam Pati</h3>
                <h4>Mechanical Engineering</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt4} {...options}>
              <div class="aluminiStrengthContent">
                <img src={ankur} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Ankur Bhattacharjee</h3>
                <h4>Materials and Metallurgy Engineering</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt5} {...options}>
              <div class="aluminiStrengthContent">
                <img src={anjali} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Kumari Anjali</h3>
                <h4>Electrical Engineering</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt6} {...options}>
              <div class="aluminiStrengthContent">
                <img src={sid} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Siddhartha Gupta</h3>
                <h4>Electronics and Communication Enginnering</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="2016">
        <div class="aluminiStrengthContainer">
          <h1 class="alumini-title">Class of 2016</h1>
          <div class="aluminiStrengthBasket">
            <div class="aluminiStrengthCard" ref={tilt} {...options}>
              <div class="aluminiStrengthContent">
                <img src={kaustuva} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Koustuva Ghosh</h3>
                <h4>Information Technolgy</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt2} {...options}>
              <div class="aluminiStrengthContent">
                <img src={sankarshan} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Sankarshan Purkayastha</h3>
                <h4>Computer Science and Engineering</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt3} {...options}>
              <div class="aluminiStrengthContent">
                <img src={ankit} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Ankit Verma</h3>
                <h4>Computer Science and Engineering</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt4} {...options}>
              <div class="aluminiStrengthContent">
                <img src={vishal} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Vishal Anand Gupta</h3>
                <h4>Electrical Engineering</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt5} {...options}>
              <div class="aluminiStrengthContent">
                <img src={soumyaa} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Soumya Choudhuri</h3>
                <h4>Civil Engineering</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="2015">
        <div class="aluminiStrengthContainerwhite">
          <h1 class="alumini-title">Class of 2015</h1>
          <div class="aluminiStrengthBasketwhite">
            <div class="aluminiStrengthCard" ref={tilt} {...options}>
              <div class="aluminiStrengthContent">
                <img src={ajay} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Ajay Singh</h3>
                <h4>Computer Science and Engineering</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt2} {...options}>
              <div class="aluminiStrengthContent">
                <img src={atreyee} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Atreyee Kundu</h3>
                <h4>Electrical Engineering</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt3} {...options}>
              <div class="aluminiStrengthContent">
                <img src={avinav} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Avinav Prakash</h3>
                <h4>Civil Engineering</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt4} {...options}>
              <div class="aluminiStrengthContent">
                <img src={harshit} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Harshit Agarwal</h3>
                <h4>Computer Science and Engineering</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt5} {...options}>
              <div class="aluminiStrengthContent">
                <img src={samya} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Samya Ghoshal</h3>
                <h4>Mechanical Engineering</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt6} {...options}>
              <div class="aluminiStrengthContent">
                <img src={rana} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Rana Mahesh Pratap Singh</h3>
                <h4>Mechanical Engineering</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt7} {...options}>
              <div class="aluminiStrengthContent">
                <img src={shakeel} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Syed Shakeel Imdada</h3>
                <h4>Mechanical Engineering</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt8} {...options}>
              <div class="aluminiStrengthContent">
                <img src={shubham} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Shubham Sinha</h3>
                <h4>Mechanical Engineering</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="2014">
        <div class="aluminiStrengthContainer">
          <h1 class="alumini-title">Class of 2014</h1>
          <div class="aluminiStrengthBasket">
            <div class="aluminiStrengthCard" ref={tilt} {...options}>
              <div class="aluminiStrengthContent">
                <img src={aaghran} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Aaghran Ghosh</h3>
                <h4>Information Technology</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt2} {...options}>
              <div class="aluminiStrengthContent">
                <img src={adil} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Adil Mirza</h3>
                <h4>Electrical Engineering</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt3} {...options}>
              <div class="aluminiStrengthContent">
                <img src={garima} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Garima Das</h3>
                <h4>Mechanical Engineering</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt4} {...options}>
              <div class="aluminiStrengthContent">
                <img src={kartikeya} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Kartikeya Singh</h3>
                <h4>Computer Science and Engineering</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt5} {...options}>
              <div class="aluminiStrengthContent">
                <img src={shashi} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Shashi Das</h3>
                <h4>Mechanical Enginnering</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt6} {...options}>
              <div class="aluminiStrengthContent">
                <img src={subhrangshu} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Subhrangshu Mukherjee</h3>
                <h4>Mechanical Enginnering</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt7} {...options}>
              <div class="aluminiStrengthContent">
                <img src={swami} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Swaminathan Iyer</h3>
                <h4>Information Technology</h4>
              </div>
            </div>
            <div class="aluminiStrengthCard" ref={tilt8} {...options}>
              <div class="aluminiStrengthContent">
                <img src={sayan} alt="aniket" />
                {/* <img src={profile} alt="aniket" /> */}
                <h3>Sayan Samanta</h3>
                <h4>Materials and Metallurgy Engineering</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="footer">
        <div class="footer-container">
          <div class="footer-row">
            <div class="footer-col">
              <div class="social-icon">
                <a href="https://www.facebook.com/search/top?q=quizinc">
                  <i class="fa fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/quizincnitdgp/">
                  <i class="fa fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/company/quizinc/">
                  <i class="fa fa-linkedin"></i>
                </a>
              </div>
              <br />
            </div>
            <div class="copyright">
              <h2>All rights reserved. Copyright © QuizInc 2022</h2>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Alumini;
