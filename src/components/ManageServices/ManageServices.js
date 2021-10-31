import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import './ManageServices.css';

const ManageServices = () => {
    const [services, setServices] =useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    const handleDelete = id => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                alert('deleted')
                const remaining = services.filter(service => service._id !== id);
                setServices(remaining);
            }
            
        })
    }

    return (
        <div>
            <div className="manage-area">
                <h3>MANAGE SERVICES</h3>
            </div>
            <Container className="packages-area p-5">
                {
                    services.map(service => <div key={service._id}>
                        <Card style={{ width: '22rem' }}>
                        <Card.Img variant="top" src={service.picture} style={{height: '300px'}}/>
                            <Card.Body>
                                <Card.Title>{service.name}</Card.Title>
                                <Card.Title>$ {service.price}</Card.Title>
                                <Button onClick={() => handleDelete(service._id)}>Delete</Button>
                            </Card.Body>
                        </Card>
                        
                    </div>)
                }
            </Container>
        </div>
    );
};

export default ManageServices;