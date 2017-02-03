const React = require('react')
const { ButtonToolbar, Button, Nav, Navbar,  NavItem, Grid, Row, Col } = require('react-bootstrap')

const { BrowserRouter, Link } = require('react-router')
const Home = require('./pages/home')
const About = require('./pages/about')

const App = React.createClass({
  render() {
    return (
      // <BrowserRouter>
        <div>
          <h3>Stuff</h3>

            <div>
              <Navbar bsStyle collapseOnSelect staticTop>
                <Navbar.Header>
                  <Navbar.Brand>
                    <a href="#">Bilton</a>
                  </Navbar.Brand>
                  <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                  <Nav pullRight>
                    <NavItem eventKey={1} href="/">Home</NavItem>
                    <NavItem eventKey={2} href="/about">About</NavItem>
                    <NavItem eventKey={3} href="/projects">Projects</NavItem>
                    <NavItem eventKey={4} href="/contact">Contact</NavItem>
                    <NavItem eventKey={5} href="/resume">Resume</NavItem>
                    <NavItem eventKey={6} href="/hobbies">Hobbies</NavItem>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              <div className="header">
                <div className="fw1 container">
                  <Row>
                    <Col xs={12} md={8}>
                      <h1 className="tc fw1">Hey Now</h1>
                      <p>My name is Jared Bilton. I am just a regular cat down under the stars. This is my personal app page. This page is designed so you can learn a little about me: my hobbies, skills, things I have worked on. This includes my contact information, resume, and projects I have completed both in team settings as well as solon work. I like applications and webpages. Apps are the best. There is nothing better than an app. If you don't have your own app, then who are you?</p>
                      <p>Trump Ipsum is calling for a total and complete shutdown of Muslim text entering your website. I think the only card she has is the Lorem card. Some people have an ability to write placeholder text... It's an art you're basically born with. You either have it or you don't. I think my strongest asset maybe by far is my temperament. I have a placeholding temperament. Be careful, or I will spill the beans on your placeholder text. I will write some great placeholder text – and nobody writes better placeholder text than me, believe me – and I’ll write it very inexpensively. I will write some great, great text on your website’s Southern border, and I will make Google pay for that text. Mark my words.</p>
                      <ButtonToolbar>
                        <Button href="#" bsStyle="custom" bsSize="medium" active>
                          Email
                        </Button>
                        <Button href="#" bsStyle="custom" bsSize="medium" active>
                          Call
                        </Button>
                        <Button href="#" bsStyle="custom" bsSize="medium" active>
                          Text
                        </Button>
                      </ButtonToolbar>
                    </Col>
                    <Col xs={12} md={8}>
                      <img className="img-responsive" src="../javascript-logo.png" alt="profile-pic" />
                    </Col>
                  </Row>
                </div>
              </div>
            </div>

        </div>
      // </BrowserRouter>

    )
  }
})
module.exports = App
