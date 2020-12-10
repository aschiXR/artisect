import React from 'react';
import './App.css';
import YoutubeBackround from 'react-youtube-background';
import Navbar from "./Components/js/Navbar/Navbar";
import Hamburger from 'hamburger-react';


function App() {
  return (
    <div className="App">
      <header>
        <div className="Navbar sticky">
          <div className="Nav-container">
          <a href="http://artisect.com/">
            <img src="./images/logo-artisect.png" alt="Artisect logo" className="App-logo"/>
          </a>
          <button className="hamburger-react" onClick={function ToggleFunction() {
                                                        var burgerMenu = document.getElementById("Burger");
                                                          if (burgerMenu.style.right === "-185px") {
                                                            burgerMenu.style.right = "0px";
                                                          } else if (burgerMenu.style.right === "0px"){
                                                            burgerMenu.style.right = "-185px";
                                                          } else {
                                                            burgerMenu.style.right = "0px";
                                                          }
                                                        }}
                                                        >
                                                          <Hamburger />

          </button>
          <Navbar />
          </div>
        </div>
      </header>

      <body id="home">
        <YoutubeBackround className="Demo" videoId={"dkdv9Ol1F5M"}>
        </YoutubeBackround>

        <div className="App-about" id="about">
          <div className="column">
            <div><img src="./images/design-button-05.png" alt="icon-des"></img></div>
            <p>Visual design aims to shape and improve the user experience through considering the effects of illustrations, photography, typography, space, layouts, and color on the usability of products and on their aesthetic appeal.</p>
          </div>
          <div className="column">
            <div><img src="./images/coding-button-05.png" alt="icon-cod"></img></div>
            <p>Creating a web application and related automated tasks, require strong coding skills, with tools such as html(5), css(3), javascript, Python and related frameworks, which enables both cases, in order to achieve the best possible user experience for all contemporary digital platform, desktop, tablet, smartphone, etc.</p>
          </div>
          <div className="column">
            <div><img src="./images/vr-button-05.png" alt="icon-vr"></img></div>
            <p>Extended reality (VR/AR/MR) is a computer-generated scenario that simulates a realistic experience. The immersive environment can be similar to the real world in order to create a lifelike experience grounded in reality or sci-fi.</p>
          </div>
        </div>

        <div className="App-gallery">
          <div className="masonry-wrapper" id="gallery">
          </div>
        </div>
      </body>

      <footer className="App-footer">
        <div>
          <p>Copyright Artisect © 2015-2021. All logos and trademarks are property of their respective owners.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;