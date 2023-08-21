import React from 'react';
import './App.css';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6}>
            <img src="/pasfoto.jpg" alt="My " width="220" height="270" />
            
            </Col>
            <Col xs={12} md={6}>
            <h1 className="welcome-animation typing-effect" style={{ fontSize: '40px' }}>
  Welcome to My Portfolio
</h1>

            </Col>
          </Row>
        </Container>
      </header>
      <Container>
      <Row>
  <Col>
    <p style={{ margin: '30px' }}>
      <img src="/ser.png" alt="Certificate Logo" width="20" height="20" /> {' '}
      <a href="https://drive.google.com/drive/folders/1wvcQ8auFNAxluHtzxnPCNLApDoGyTlkC?usp=sharing">
        Certificate
      </a>
    </p>
    <p style={{ margin: '10px' }}>
      <img src="/lin.png" alt="LinkedIn Logo" width="20" height="20" /> {' '}
      <a href="https://www.linkedin.com/in/alvaro-nauw-2600231b2/">
        linkedin.com/in/alvaro-nauw
      </a>
    </p>
    <p style={{ margin: '10px' }}>
      <img src="/ig.png" alt="Instagram Logo" width="20" height="20" /> {' '}
      <a href="https://www.instagram.com/varoseptra_/">
        varoseptra_
      </a>
    </p>
  </Col>
</Row>

        <Row>
          <Col>
            <section className="about">
              <h2>-------------------------- About Me --------------------------</h2>
              <p style={{ margin: '20px', textAlign: 'justify' }}>
                My name is Alvaro Septra Dominggo Nauw, but people usually call me Varo. I come from a background in Telecommunication Engineering and I enjoy developing my skills in programming languages. I am also interested in AI technology.
                I joined Telkom in 2019 as part of the International Telecommunication Engineering program and graduated with a GPA of 3.48 in early 2023, completing my studies with a span of 3.5 years.
              </p>
            </section>
          </Col>
        </Row>
        <Row>
          <Col>
            <section className="abouts">
              <li style={{ margin: '20px', textAlign: 'justify' }}>
                I am constantly seeking new challenges and opportunities to expand my knowledge and skills. I believe that my experience and education have
                prepared me well for a career in the ever-evolving field of technology.
              </li>
            </section>
          </Col>
        </Row>
        <Row>
          <Col>
            <section className="experience">
              <h2>-------------------------- EXPERIENCE --------------------------</h2>

              <Card className="mb-4">
            
                <Card.Img variant="top" src="\phototelu.jpg" alt="Experience" width="330" height="500" />
                <Card.Body>
                  <Card.Title>Student in Telkom University</Card.Title>
                  <Card.Text>Universitas Telkom (2019-2023)</Card.Text>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      As an active student at Telkom University, I participated in several organizations, including the Cultural Unit of Students and the Practical Laboratory and Research Laboratory at the Electrical Engineering Faculty.
                    </ListGroup.Item>
                    <ListGroup.Item>
                      As an undergraduate student of Telecommunication Engineering, I focused on the specialization that I am interested in, which is signal processing.
                    </ListGroup.Item>
                    <ListGroup.Item>
                      For basic programming languages, I learned Python, JavaScript, and C from campus.
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>

              <Card className="mb-4">
                <Card.Img variant="top" src="photoimmapa.jpg" alt="Experience" width="330" height="500" />
                <Card.Body>
                  <Card.Title>IMMAPA (Ikatan Mahasiswa Maluku Papua)</Card.Title>
                  <Card.Text>Universitas Telkom (2019-2023)</Card.Text>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      Ikatan Mahasiswa Maluku dan Papua (IMMAPA) is one of the Cultural Units for students (UKM) at Telkom University, which serves as a place for students who have concerns, love, and interests in the culture of the eastern part of Indonesia, namely Maluku, Papua, and NTT. IMMAPA provides an opportunity for Telkom University students to contribute to the development of Eastern Indonesian culture by preserving and introducing the culture to others. Moreover, IMMAPA aims to create a sense of community among its members.
                    </ListGroup.Item>
                    <ListGroup.Item>
                      IMMAPA <a href="https://www.instagram.com/p/B1NcIPnATHm/?hl=id">member</a> (2019-present)
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Member of <a href="https://www.instagram.com/p/B9WhZtWpPxy/?hl=id">Internal Devision</a> IMMAPA (2019-2020)
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Member of Logistic Devision in <a href="https://www.instagram.com/p/B4_Ryr5HV32/">CENDRAWAKU 2019</a> event (2019-2020)
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Member of <a href="https://www.instagram.com/p/CRJBzwXJ7Du/?hl=id">Internal Devision</a> IMMAPA (2021-2022)
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>

              <Card className="mb-4">
                <Card.Img variant="top" src="photodaskom.jpg" alt="Experience" width="350" height="500" />
                <Card.Body>
                  <Card.Title>Laboratorium Dasar Komputer (DASKOM)</Card.Title>
                  <Card.Text>Practicum Assistant (2020-2022)</Card.Text>
                  <a href="https://www.daskomlab.com/">www.daskomlab.com</a>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      I served as a Basic Computer Laboratory assistant, teaching freshman students basic programming using the C programming language in the Electrical Engineering Faculty at Telkom University. I actively contributed to the laboratory in human resources, creative multimedia, and documentation. I have been recognized for my work as an assistant and was awarded the <a href="https://www.instagram.com/p/CJNJPQ8JGA2/">"Termacho Assistant"</a> title based on the results of polling conducted among the students I taught.
                    </ListGroup.Item>
                    <ListGroup.Item>
                      In addition, instead of teaching about algorithms and programming using the C programming language, my most significant contribution was editing videos required in the lab using tools I am proficient in, such as Adobe After Effects. I also contributed to managing the appearance of the Daskom Laboratory Instagram feed, using my skills in editing images with Adobe Photoshop.
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>

              <Card className="mb-4">
                <Card.Img variant="top" src="photoimv.jpg" alt="Experience" width="450" height="500" />
                <Card.Body>
                  <Card.Title>IMAGE PROCESSING AND VISION LABORATORY (IMV)</Card.Title>
                  <Card.Text>Laboratory Assistant IMV (2022-Present)</Card.Text>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      The Image Processing & Vision Laboratory (IMV Lab) is a research laboratory that operates under the Information & Signal Processing expertise group within the Telecommunication Engineering major at Telkom University. In 2021-2022, the IMV Lab focused its research on image processing and computer vision, particularly emphasizing integrating these areas with the upcoming 5G Network Technology at the national scale in Indonesia.
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>

            </section>
          </Col>
        </Row>
        <Row>
          <Col>
            <section className="projects">
              <h2>PROJECTS</h2>

              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>CERITA DARI TEMPAT MATAHARI TERBIT</Card.Title>
                  <Card.Text>Become a TOP 100 Innovilage 2020</Card.Text>
                  <a href="https://innovillage.id/lini-masa/portfolio/cerita-dari-tempat-matahari-terbit">Cerita dari tempat matahari</a>
                </Card.Body>
              </Card>

              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Project from Pertamina</Card.Title>
                  <Card.Text>Project from pertamina carried out by the IMV laboratory</Card.Text>
                </Card.Body>
              </Card>

            </section>
          </Col>
        </Row>
      </Container>
      <footer>
        <p>Copyright 2022</p>
      </footer>
    </div>
  );
}

export default App;

