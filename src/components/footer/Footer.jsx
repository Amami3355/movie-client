import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Footer = () => (
  <Container fluid style={{position: 'absolute', left: 0, bottom: 0, width: '100%',
  height: 50, background: '#333', color:'#fff' }}>
    <Row>
      <p>Mon footer</p>
    </Row>
  </Container>
);

export default Footer;

