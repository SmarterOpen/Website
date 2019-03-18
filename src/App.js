import React, {Component} from 'react';
import {Jumbotron, Card, CardDeck, CardColumns, Button} from 'react-bootstrap';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Jumbotron className="header-jumbotron" fluid>
            <div className="header-image-container">
              <img className="header-image" src="/img/skyline.png" alt="skyline"/>
              <div className="centered">
                <h1 className="header-text">Welcome to Birmingham, Smarter</h1>
                <h4 className="header-text">At SmarterBham we are building an open smart city, one project at a time.</h4>
              </div>
            </div>
          </Jumbotron>
          <div>
            <h2>About SmarterBham</h2>
          </div>
          <div className="body-section">
            <p>
            Imagine a city driven by information.  A place where decision making is supported by a city-wide sensor network
             that provides real time data about the state of things.  Imagine the platform that runs the network, 
             built and owned by the citizens, measuring the things that we think are important and giving us the insights we 
             need to make our city the best it can be.   The SmarterBham project was born out of a recognition that smart cities
              need grassroots participation.  We can combine open hardware designs with open networks, open platforms and open data
              policies to build a participatory smart cities future.
            </p>
          </div>
          <div>
            <h2>How to Get Involved</h2>
          </div>
          <div className="card-body">
            <CardDeck className="card-body">
              <Card className="sbham-card">
                <Card.Img variant="top" src="img/groupsio.png" />
                <Card.Body>
                  <Card.Title>Mailing List</Card.Title>
                  <Card.Text>
                    We use Groups.io to manage our mailing list.  We don't share your email without permission, and the message volume is
                    kept to a manageable level, promise!
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Card.Link href="https://groups.io/g/smarterbham" target="new"><Button variant="primary">Join the List</Button></Card.Link>
                </Card.Footer>
              </Card>
              <Card className="sbham-card">
                <Card.Img variant="top" src="img/base.jpeg" />
                <Card.Body>
                  <Card.Title>Meetups</Card.Title>
                  <Card.Text>
                    SmarterBham is proud to be part of the BASE meetup group, along with many of Birmingham's most attended events.
                    Join BASE205 to get notified when we schedule a new meetup.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Card.Link href="https://www.meetup.com/base205/" target="new"><Button variant="primary">Join the Meetup</Button></Card.Link>
                </Card.Footer>
              </Card>
              <Card className="sbham-card">
                <Card.Img variant="top" src="img/github.png" />
                <Card.Body>
                  <Card.Title>Resources</Card.Title>
                  <Card.Text>
                    We host all of our source code, device designs, project cookbooks and other assets on Github.  Feel free to fork anything
                    you find there for use in your own city!
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Card.Link href="https://github.com/SmarterOpen" target="new"><Button variant="primary">Fork the Repo</Button></Card.Link>
                </Card.Footer>
              </Card>
              <Card className="sbham-card">
                <Card.Img variant="top" src="img/ttn.png" />
                <Card.Body>
                  <Card.Title>Open Network</Card.Title>
                  <Card.Text>
                    SmarterBham is responsible for the deployment and maintenance of the Birmingham, AL Things Network community.  This community
                    provides a free and open access LoRaWAN network that you can use for your own smart cities applications.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Card.Link href="https://www.thethingsnetwork.org/community/birmingham-al/" target="new"><Button variant="primary">Get Access to TTN</Button></Card.Link>
                </Card.Footer>
              </Card>
              <Card className="sbham-card">
                <Card.Img variant="top" src="img/slack.png" />
                <Card.Body>
                  <Card.Title>Chat</Card.Title>
                  <Card.Text>
                    If email isn't your thing and you prefer more real time collaboration, we use the #SmarterBham channel on the Magic City Tech
                    Slack as our official chat venue.  
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Card.Link href="http://magiccitytech.org/" target="new"><Button variant="primary">Chat on Slack</Button></Card.Link>
                </Card.Footer>
              </Card>
            </CardDeck>
          </div>
          <div>
            <h2>
              Our Partners
            </h2>
          </div>
          <div className="cards-section">
            <CardDeck className="card-body">
              <Card className="sbham-card">
                <a href="https://gaspgroup.org"><Card.Img variant="top" src="img/gasp.png"/></a>
                <Card.Body>
                  <Card.Title>Gasp, Inc.</Card.Title>
                  <Card.Text>
                    Gasp's mission is to advance healthy air and environmental justice in the 
                    greater-Birmingham area through education, advocacy, and collaboration.  SmarterBham
                    works with Gasp on air quality monitoring using the open smart cities platform.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="sbham-card">
                <a href="https://www.redmountainmakers.org/"><Card.Img variant="top" src="img/rmm.png"/></a>
                <Card.Body>
                  <Card.Title>Red Mountain Makers</Card.Title>
                  <Card.Text> 
                    Red Mountain Makers is a nonprofit makerspace in Birmingham Alabama dedicated to bringing a community 
                    together to learn, play, and grow in STEAM areas.  
                    Their mission is to provide a collaborative environment that promotes discovery, 
                    creativity, and exploration of STEAM (Science, Technology, Engineering, Art, Mathematics). 
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="sbham-card">
                <a href="https://conserv.io/"><Card.Img variant="top" src="img/conserv.png"/></a>
                <Card.Body>
                  <Card.Title>Conserv.io</Card.Title>
                  <Card.Text> 
                    Conserv.io creates better tools for preservation professionals including their flagship Smart Conservation
                    Platform, a conservation-focused, solution-as-a-service environmental monitoring solution 
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          </div>
          <div>
            <h2>In The News</h2>
          </div>
          <div className="body-section">
            <div className="video-responsive">
              <iframe  src="https://player.vimeo.com/video/315325849" width="640" height="360" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>
              <p><a href="https://vimeo.com/315325849">Smarter Birmingham Air Quality Sensor Project</a> from <a href="https://vimeo.com/gaspgroup">GASP</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
