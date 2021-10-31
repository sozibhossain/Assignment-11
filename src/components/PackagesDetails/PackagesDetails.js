import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const PackagesDetails = () => {
    const {_id} = useParams();

    const [details, setDetails] = useState([]);
    const [specificDetail, setSpecificDetail] = useState({});

    useEffect(() => {
        fetch("http://localhost:5000/products")
        .then(res => res.json())
        .then(data => setDetails(data))
    },[])

    useEffect(() => {
        if(details.length>0){
            const matchedData = details.find(detail => detail._id==_id)
            setSpecificDetail(matchedData);
        }
        
    },[details]);

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={specificDetail?.picture} />
                <Card.Body>
                    <Card.Title>{specificDetail?.name}</Card.Title>
                    <Card.Title>$ {specificDetail?.price}</Card.Title>
                    <Card.Text>{specificDetail?.details}</Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default PackagesDetails;