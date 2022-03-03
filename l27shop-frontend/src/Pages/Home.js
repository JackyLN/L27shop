import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Routes, Route, Link } from "react-router-dom";

import Footer from '../Components/Footer';

function Home() {
  return (
    <Container>
      <Row>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>

      <Alert variant="primary">
        This is a primary alert—check it out!
      </Alert>
      <Button variant="danger">Click me This is Home</Button>

      <Footer pageName="hell" number="5"/>
    </Container>
  );
}


export default Home;
