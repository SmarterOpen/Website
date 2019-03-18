import React, {Component} from 'react';
import {Jumbotron, Card, CardDeck, Button} from 'react-bootstrap';

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
          <div className="card-body">
            <CardDeck fluid>
              <Card>
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
              <Card>
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
              <Card>
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
              <Card>
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
              <Card>
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
      </div>
    );
  }
}

export default App;
