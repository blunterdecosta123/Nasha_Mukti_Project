import React from "react";
import "./index.css";
import TypewriterComponent from "./typerwriter.js";
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

const Header = () => (
  <header>
    <nav>
      <div className="left">About Nasha Mukti</div>
      <div className="right">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Services</a></li>
          <li><a href="/">Projects</a></li>
          <li><a href="/">Contact Me</a></li>
        </ul>
      </div>
    </nav>
  </header>
);

const Main = () => (
  <main>
    <FirstSection />
    <hr />
    <SecondSection />
  </main>
);

const FirstSection = () => (
  <section className="firstsection">
    <div className="leftsection">
      Hi, this is<span className="purple"> NOADDICT </span>organisation
      <div>and it is passionate about</div><TypewriterComponent />
      <span id="element"></span>
      <div className="buttons">
        <button className="btn"><a href="https://staffskillstraining.co.uk/course/drug-alcohol-awareness/">Certification</a></button>
        <button className="btn"><a href="https://us.sagepub.com/sites/default/files/upm-assets/109531_book_item_109531.pdf" download>Awareness</a></button>
      </div>
    </div>
    <div className="rightsection">
      <img src="doc.jpeg" alt="" />
    </div>
  </section>
);

const SecondSection = () => (
  <section className="secondsection">
    <span className="text-grey">Work Organisation has done so far</span>
    <h1 className="text-grey">Achivements</h1>
    <div className="box">
      <div className="vertical">
        <img className="image-top" src="CONTACT-COMMUNITY-OUTREACH.webp" alt="" />
        <div className="vertical-title">Community Outreach</div>
        <div className="vertical-desc">
          <h4>NOADDICT (2012-Present)</h4>
          <br />
          We actively engage in community outreach programs to raise awareness about addiction, provide support to individuals and families affected by addiction, and promote a healthy lifestyle.
        </div>
        
      </div>

      <div className="vertical">
        <img className="image-top" src="counselling.jpeg" alt="" />
        <div className="vertical-title">Counselling Services</div>
        <div className="vertical-desc">
        <h4>NOADDICT (2014-Present)</h4>
              <br />
              Our dedicated team of counselors provides personalized counseling services to individuals seeking support on their journey to recovery, helping them navigate the challenges of addiction and regain control of their lives.
        </div>
      </div>

      <div className="vertical">
        <img className="image-top" src="Online-pulmonary-rehab-small-400x269-1.webp" alt="" />
        <div className="vertical-title">Rehabilitation Programs</div>
        <div className="vertical-desc">
        <h4>NOADDICT (2010-Present)</h4>
              <br />
        Our organization has been offering comprehensive rehabilitation programs aimed at helping individuals overcome addiction and lead fulfilling lives.
        </div>
        
      </div>

      <div className="vertical">
        <img className="image-top" src="awareness.jpeg" alt="" />
        <div className="vertical-title">Awareness Campaigns</div>
        <div className="vertical-desc">
        <h4>NOADDICT (2016-Present)</h4>
                <br />
                We organize and participate in awareness campaigns to educate the public about the dangers of addiction and promote healthy lifestyle choices.
        </div>
      </div>
      <div className="vertical">
        <img className="image-top" src="peer.png" alt="" />
        <div className="vertical-title">Peer Support Programs</div>
        <div className="vertical-desc">
        <h4>NOADDICT (2018-Present)</h4>
                <br/>
                Our peer support programs provide individuals in recovery with a supportive network of peers who understand their struggles and offer encouragement and guidance.
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer>
    <div className="footer">
      <div className="footerfirst">
        <h1>Nasha Mukti</h1>
      </div>
      <div className="footersecond">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Services</li>
        </ul>
      </div>
      <div className="footerthird">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Services</li>
        </ul>
      </div>
      <div className="footerfourth">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Services</li>
        </ul>
      </div>
    </div>
    <div className="footer-rights">
      Copyright &#169; www.SayNoToAlcohol.com | All Rights Reserved
    </div>
  </footer>
);

export default App;
