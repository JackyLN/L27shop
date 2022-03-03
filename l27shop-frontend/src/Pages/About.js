import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { Routes, Route, Link } from "react-router-dom";

import Footer from '../Components/Footer';
import pic5 from '../image/pic5.png';
import pic6 from '../image/pic6.png';
import pic7 from '../image/pic7.png';

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <Button variant="warning">Click me This is About</Button>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic5}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic6}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic7}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Footer pageName="react" number="10"/>
    </>
  );
}

export default About;