import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';

const PackagesShop = (props) => {
    const {name, _id, price, picture} =props.product;

    const history = useHistory();


    const handleDetails = (id) => {
        const uri = `/packgesDetails/${id}`
        history.push(uri)
    }

    return (
        <div>
            <div>
            <Card style={{ width: '22rem' }}>
                <Card.Img variant="top" src={picture}  style={{height: '300px'}}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title>$ {price} | Per Person</Card.Title>
                    <Button onClick={() => handleDetails(_id)} variant="primary">Book Now</Button>
                </Card.Body>
            </Card>
            </div>
            
        </div>
    );
};

export default PackagesShop;