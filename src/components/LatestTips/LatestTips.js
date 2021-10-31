import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import latest1 from '../../images/latest/latest1.jpg';
import latest2 from '../../images/latest/latest2.jpg';
import latest3 from '../../images/latest/latest3.jpg';
import './LatestTips.css';


const LatestTips = () => {
    return (
        <div className="latest-area">
            <div className="latest-tittel">
                <h2>LATEST TIPS & ARTICLES</h2>
                <h6>NEWS & ARTICLES</h6>
            </div>
            <div>
                <Container className="latest-fo">
                    <Card style={{ width: '22rem' }}>
                        <Card.Img variant="top" src={latest1} />
                        <Card.Body>
                            <Card.Title>TAKE ONLY MEMORIES, LEAVE ONLY FOOTPRINTS.</Card.Title>
                            <Card.Text>
                            Susp endisse ullam corper a adipiscing class ullam corper inceptos
                            </Card.Text>
                            <Button variant="primary">Read more</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '22rem' }}>
                        <Card.Img variant="top" src={latest2} />
                        <Card.Body>
                            <Card.Title>LIFE IS EITHER A DARING ADVENTURE NEW EYES.</Card.Title>
                            <Card.Text>
                            Susp endisse ullam corper a adipiscing class ullam corper inceptos
                            </Card.Text>
                            <Button variant="primary">Read more</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '22rem' }}>
                        <Card.Img variant="top" src={latest3} />
                        <Card.Body>
                            <Card.Title>LEVERAGE AGILE FRAMEWORKS TO PROVIDE A ROBUST</Card.Title>
                            <Card.Text>
                            Susp endisse ullam corper a adipiscing class ullam corper inceptos
                            </Card.Text>
                            <Button variant="primary">Read more</Button>
                        </Card.Body>
                    </Card>
                </Container>
            </div>

        </div>
    );
};

export default LatestTips;