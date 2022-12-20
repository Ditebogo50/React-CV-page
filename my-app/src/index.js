import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './custom.css'
import reportWebVitals from './reportWebVitals';


function Header(props) {

  return (
    <>
      <header class="site-header">
        <div class="site-identity">
          <a href="https://www.linkedin.com/in/suzan-louw/"><img src={require("./assets/link.jpg")} alt="Best Clothing" /></a>
          <a href="https://github.com/Ditebogo50?tab=repositories"><img src={require("./assets/git.jpg")} alt="Best Clothing" /></a>


        </div>
        <nav class="site-navigation">
          <ul class="nav">

            <li><a href="https://suzanlouw.wordpress.com/about-me/">About</a></li>
            <li><a href="https://suzanlouw.wordpress.com/portfolio/">Portfolio</a></li>

            <li><a href={require("./assets/resume.docx")}>Resume</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
    </>
  );
}

function Body() {
  return (
    <>
      <div class="about-section">
        <h1>I am Suzan Louw</h1>
        <h4>I am full-stack web developer with a background in marketing and auditing and a love for problem-solving. </h4>
        <h4>My past work and education have provided me with foundations in critical thinking and business
          mindset that help me as a developer.</h4>
        <h4>Worked on projects using Javascript, HTML, CSS, React, Java, Python, Flask and PHP amongst other languages & frameworks.</h4>
        <h4 class="resbut"><a href={require("./assets/resume.docx")} >Click to download my Resume</a></h4>
      </div>


    </>
  );

}

function Web() {
  return (
    <>
      <Header />
      <Body />
    </>

  );
}

//render the element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Web />);
