import React from 'react';
import Header from '../Header/Header';
import Section from '../Section/Section';
import './App.scss'

import bgImg from '../../assets/images/bg-intro-desktop.svg'
import bgImgMb from '../../assets/images/bg-intro-mobile.svg'
import bgImg2 from '../../assets/images/image-mockups.png'


function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Section seClass="a">
          <div className="container">
            <div>
              <img className="imgBg mb_hide" src={bgImg} />
              <img className="imgBgMb tb_hide dt_hide" src={bgImgMb} />
              <img className="imgBg2" src={bgImg2} />
            </div>
            <div>text here</div>
          </div>
        </Section>
        <Section seClass="b">
          <div className="container">
            sdswdd
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
