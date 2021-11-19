import React, { Component } from 'react'
import Atta from '../Component/atta.jpg'
import Acc from '../Component/acc.jpg'
import Care from '../Component/care.jpg'
import Kid from '../Component/kid.jpg'
import Cos from '../Component/cos.jpg'
import Dress from '../Component/dress.jpg'
import Ele from '../Component/ele.jpg'
import Foot from '../Component/foot.jpg'
import PC from '../Component/pc.jpg'
import Veg from '../Component/veg.jpg'
import {Card , Button, Container, Row, Col} from 'react-bootstrap'



export default class MyCard extends Component {
    render() {
        return (
            //<div >
                <Container >
                    <h1><strong><u>Products</u></strong></h1>
                    <Row>
                        <Col>
                            <Card className="card">
                                <Card.Img src={Atta} className="card1"/>
                                    <Card.Body>
                                        <Card.Title>Ashirvaad Atta</Card.Title>
                                        <Card.Text>45.00 INR</Card.Text>
                                        <Button variant="primary">Add to Cart</Button>
                                    </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="card">
                                <Card.Img varient="top-middle" src={Acc} className="card1"/>
                                    <Card.Body>
                                        <Card.Title>Perfume</Card.Title>
                                        <Card.Text>2000.00 INR</Card.Text>
                                        <Button variant="primary">Add to Cart</Button>
                                    </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="card">
                                <Card.Img src={Care} className="card1"/>
                                    <Card.Body>
                                        <Card.Title>Personal Care</Card.Title>
                                        <Card.Text>2500.00 INR</Card.Text>
                                        <Button variant="primary">Add to Cart</Button>
                                    </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="card">
                                <Card.Img src={Kid} className="card1"/>
                                    <Card.Body>
                                        <Card.Title>Kid's Dress Set</Card.Title>
                                        <Card.Text>999.00 INR</Card.Text>
                                        <Button variant="primary">Add to Cart</Button>
                                    </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="card">
                                <Card.Img src={Cos} className="card1"/>
                                    <Card.Body>
                                        <Card.Title>Body Lotion</Card.Title>
                                        <Card.Text>299.00 INR</Card.Text>
                                        <Button variant="primary">Add to Cart</Button>
                                    </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="card">
                                <Card.Img src={Dress} className="card1"/>
                                    <Card.Body>
                                        <Card.Title>ShopPlus Women Dress</Card.Title>
                                        <Card.Text>499.00 - 1299.00 INR</Card.Text>
                                        <Button variant="primary">Add to Cart</Button>
                                    </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="card">
                                <Card.Img src={Ele} className="card1"/>
                                    <Card.Body>
                                        <Card.Title>Dell Laptop</Card.Title>
                                        <Card.Text>44,999.00 INR</Card.Text>
                                        <Button variant="primary">Add to Cart</Button>
                                    </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="card">
                                <Card.Img src={Foot} className="card1"/>
                                    <Card.Body>
                                        <Card.Title>Mens Formal</Card.Title>
                                        <Card.Text>1445.00 INR</Card.Text>
                                        <Button variant="primary">Add to Cart</Button>
                                    </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="card">
                                <Card.Img src={PC} className="card1"/>
                                    <Card.Body>
                                        <Card.Title>Apple MacBookPro</Card.Title>
                                        <Card.Text>1,10,049.00 INR</Card.Text>
                                        <Button variant="primary">Add to Cart</Button>
                                    </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="card">
                                <Card.Img src={Veg} className="card1"/>
                                    <Card.Body>
                                        <Card.Title>Vegetables and Fruits</Card.Title>
                                        <Card.Text>Starting From 20.00 INR</Card.Text>
                                        <Button variant="primary">Add to Cart</Button>
                                    </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                
            //</div>
        )
    }
}
