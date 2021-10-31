import React from 'react';
import { Container } from 'react-bootstrap';
import album1 from '../../images/album/album1.jpg';
import album2 from '../../images/album/album2.jpg';
import album3 from '../../images/album/album3.jpg';
import album4 from '../../images/album/album4.jpg';
import album5 from '../../images/album/album5.jpg';
import album6 from '../../images/album/album6.jpg';
import './Album.css';

const Album = () => {
    return (
        <div className="album-area">
            <div className="album-tittal">
                <h4>CREATE YOUR JOURNEY ALBUM</h4>
                <h6>STORE IN YOUR GALLERY</h6>
            </div>
            <div>
                <Container>
                    <img src={album1} alt="" style={{width: '350px', height: '300px', padding: '10px'}}/>
                    <img src={album2} alt="" style={{width: '350px', height: '300px', padding: '10px'}}/>
                    <img src={album3} alt="" style={{width: '350px', height: '300px', padding: '10px'}}/>
                    <img src={album4} alt="" style={{width: '350px', height: '300px', padding: '10px'}}/>
                    <img src={album5} alt="" style={{width: '350px', height: '300px', padding: '10px'}}/>
                    <img src={album6} alt="" style={{width: '350px', height: '300px', padding: '10px'}}/>
                </Container>
            </div>
        </div>
    );
};

export default Album;