import React from 'react';
import '../../App.css';
import 'mdbreact/dist/css/mdb.css';
import './App.js';
import { Col, Container, Row, Footer } from 'mdbreact';

class FooterPage extends React.Component {
    render(){
        return(
            <Footer color="elegant-color-dark" className="font-small pt-4 mt-4">
                <Container className="text-left">
                    <Row>
                        <Col sm="12">
                               <a href="http://mariechiaverini.fr/EN#projects">Linkedin</a>
                               <br></br>
                               <a href="https://github.com/DargieDChouwy">Github</a>
                               <br></br>
                               <a href="http://mariechiaverini.fr/EN#projects">Portfolio</a>
                               <br></br>
                        </Col>
                    </Row>
                </Container>
                <div className="footer-copyright text-center">
                    <Container fluid>
                        By Mawie
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;