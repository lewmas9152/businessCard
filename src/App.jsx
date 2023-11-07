import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="container">
        <div className="card">
          <img src="/images/myImage.jpg" alt="myImage" className="myImage" />
          <div className="content">
            <h3>Njuguna Samwel</h3>
            <p className="proffesion">Frontend Developer</p>
            <a href="">SamwelNjuguna.website</a>
            <div className="socials">
              <button className="email">
                <img src="/images/email.svg" alt="emailIcon" />
                Email
              </button>

              <button className="linkedin">
                <img src="/images/linkedin.svg" alt="emailIcon" />
                LinkedIn
              </button>
            </div>

            <section>
              <h4>About</h4>
              <p className="about">
                I am a frontend developer with a particular interest in making
                things simple and automating daily tasks. I try to keep up with
                security and best practices, and am always looking for new
                things to learn.
              </p>
            </section>

            <section>
              <h4>Interests</h4>
              <p className="interests">
                Food expert. Music scholar. Reader. Internet fanatic. Bacon
                buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee
                fanatic.
              </p>
            </section>
          </div>
          <footer>
            <img src="/images/twitter.svg" alt="twitterIcon"  className="icon"/>
            <img src="/images/facebook.svg" alt="facebookIcon"  className="icon"/>
            <img src="/images/instagram.svg" alt="instagramIcon"  className="icon"/>
            <img src="/images/github.svg" alt="githubIcon"  className="icon"/>
            
          </footer>
        </div>
      </main>
    </>
  );
}

export default App;
