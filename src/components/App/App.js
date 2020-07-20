import React from 'react';
import Header from '../Header/Header';
import Section from '../Section/Section';
import Button from '../Button/Button'
import './App.scss'

import bgImg from '../../assets/images/bg-intro-desktop.svg'
import bgImgMb from '../../assets/images/bg-intro-mobile.svg'
import bgImg2 from '../../assets/images/image-mockups.png'
import Advantages from '../Advantages/Advantages';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Section seClass="a">
          <div className="container">
            <div className="images">
              <img className="imgBg mb_hide" src={bgImg} />
              <img className="imgBgMb tb_hide dt_hide" src={bgImgMb} />
              <img className="imgBg2" src={bgImg2} />
            </div>
            <div className="content_first">
              <h1>Next generation<br />digital banking</h1>
              <p>
                Take yout financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
              </p>
              <Button text="Request Invite" />
            </div>
          </div>
        </Section>
        <Section seClass="b">
          <div className="container adv">
            <div className="content_second">
              <h2>Why choose Easybank?</h2>
              <p>
                We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.
            </p>
            </div>
            <div className="advantages">
              <Advantages />
            </div>
          </div>
        </Section>
        <Section seClass="a">
          alo
      </Section>
      </div>
    </div>
  );
}

export default App;
