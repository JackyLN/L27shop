import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Routes, Route, Link } from "react-router-dom";

import Footer from '../Components/Footer';
import ItemCard from '../Components/ItemCard/ItemCard';
import MyCardGroup from '../Components/CardGroup/MyCardGroup';

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

      {/* This is a test for MyCardGroup Compnents and ItemCard */}
      <Row>
        <Col><ItemCard itemName="Product1" itemPrice="$10" itemImage="https://i.picsum.photos/id/257/200/200.jpg?hmac=k0qf_n518If39xOB7qmdqgZZNQ38WdbfQXdF30TSPCw" /></Col>
        <Col><ItemCard itemName="Product1" itemPrice="$10" itemImage="https://i.picsum.photos/id/257/200/200.jpg?hmac=k0qf_n518If39xOB7qmdqgZZNQ38WdbfQXdF30TSPCw" /></Col>
        <Col><ItemCard itemName="Product1" itemPrice="$10" itemImage="https://i.picsum.photos/id/257/200/200.jpg?hmac=k0qf_n518If39xOB7qmdqgZZNQ38WdbfQXdF30TSPCw" /></Col>
      </Row>
      <Container>
      <MyCardGroup />
      </Container>
      
      
      
      {/* <Footer pageName="hell" number="5"/> */}
    </Container>
  );
}


export default Home;
