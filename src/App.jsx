import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="container">
        <div className="card">
          <img src="images/myImage.jpg" alt="myImage" className="myImage" />
          <div className="content">
            <h3>Njuguna Samwel</h3>
            <p className="proffesion">Frontend Developer</p>
            <a href="https://lewmas9152.github.io/portfolio/" target="_blank">
              SamwelNjuguna.website
            </a>
            <div className="socials">
              <button className="email">
                <img src="images/email.svg" alt="emailIcon" />
                Email
              </button>

              <a href="https://www.linkedin.com/in/samwel-njuguna-1797a6240/">
                <button className="linkedin">
                  <img src="images/linkedin.svg" alt="emailIcon" />
                  LinkedIn
                </button>
              </a>
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
                Computer Scientist. Reader. Internet fanatic. Bacon buff.
                Entrepreneur. Travel geek. African culture fanatic. Coffee
                fanatic.
              </p>
            </section>
          </div>
          <footer>
            <a href="https://twitter.com/lewmas9152" target="_blank">
              {" "}
              <img
                src="images/twitter.svg"
                alt="twitterIcon"
                className="icon"
              />
            </a>
            <a href="https://www.facebook.com/patsam%20njugush" target="_blank">
              {" "}
              <img
                src="images/facebook.svg"
                alt="facebookIcon"
                className="icon"
              />
            </a>
            <a href="https://www.instagram.com/patsam_njugush/" target="_blank">
              <img
                src="images/instagram.svg"
                alt="instagramIcon"
                className="icon"
              />
            </a>
            <a href="https://github.com/lewmas9152" target="_blank">
              <img src="images/github.svg" alt="githubIcon" className="icon" />
            </a>
          </footer>
        </div>
      </main>
    </>
  );
}

export default App;
