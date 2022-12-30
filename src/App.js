import React from 'react';
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src="\pasfoto.jpg" alt="My Photo" width="165" height="200" />
      <h1 className="welcome-animation" style={{ fontSize: '60px' }}>Welcome to My Portfolio</h1>


      </header>
      <section className="about">
        <h2>About Me</h2>
        <p style={{margin: '50px'}}>
          Hallo Thank you for visiting and see my portfolio my name is Alvaro Septra Dominggo Nauw people usually call me VARO
          i'am 21 years old. I'm from sorong, Southwest Papua i'm a person that really have big intrest in Technology. I enter Telkom University in 2019 
          i take bachelor of Telecomunication Engineering (International Class), i take Telecomunication Engineering because what i think on that day that
          i wil learn about all the technology 
        </p>
      </section>
      <section className="experience">
      <div className="experience-bar">
         <img className="gmbrl" src="\int.jpg" alt="Experience Image"  width="450" height="300" style={{marginRight: '20px'}} />
         <img className="gmbrm" src="\S__6938631.jpeg" alt="Experience Image"  width="250" height="300" style={{marginRight: '20px'}} />
         <img className="gmbrr" src="\S__6971404.jpg" alt="Experience Image"  width="400" height="300" />
      </div>
        <h2>EXPERIENCE</h2>
        <ul>
          <li>
            <h3>Software Engineer</h3>
            <p>XYZ Company (2020-present)</p>
            <ul>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at porttitor sem. Aliquam erat volutpat.
              </li>
              <li>
                Donec placerat nisl magna, id volutpat elit posuere quis.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae.
              </li>
            </ul>
          </li>
          <li>
            
            <h3>Web Developer</h3>
            <p>ABC Company (2018-2020)</p>
            <ul>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at porttitor sem. Aliquam erat volutpat.
              </li>
              <li>
                Donec placerat nisl magna, id volutpat elit posuere quis.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae.
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <section className="projects">
      <div className="experience-bar"></div>
        <h2>PROJECTS</h2>
        <ul>
          <li>
            <h3>CERITA DARI TEMPAT MATAHARI TERBIT</h3>
            <p>
              Become a TOP 100 Innovilage 2020 
            </p>
            <a href="https://innovillage.id/lini-masa/portfolio/cerita-dari-tempat-matahari-terbit">Learn More</a>
          </li>
          <li>
            <h3>My Project 2</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              at porttitor sem. Aliquam erat volutpat.
            </p>
            <a href="#">Learn More</a>
          </li>
        </ul>
      </section>
      <footer>
        <p>Copyright 2022</p>
      </footer>
    </div>
  );
}

export default App;