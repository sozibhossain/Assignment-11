import React from 'react';
import { Button, Container } from 'react-bootstrap';
import blog1 from '../../images/blog/blog1.jpg';
import blog2 from '../../images/blog/blog2.jpg';
import blog3 from '../../images/blog/blog3.jpg';
import './Blog.css';

const Blog = () => {
    return (
        <div>
            <div className="blog-titail">
                <h3>Blog</h3>
            </div>
            <Container className="p-5">
                <div className="d-flex row pb-5">
                    <div className="col-lg-6">
                        <img src={blog1} alt="" style={{ width: '400px'}}/>
                    </div>
                    <div className="col-lg-6">
                        <h5>Visiting London on a Budget: Top City Views</h5>
                        <h6>Categories   -By Lorem Ipsum</h6>
                        <p>Susp endisse ullam corper a adipiscing class ullam corper inceptos nisl consequat eros congue.</p>
                        <Button>Read This </Button>
                    </div>
                </div>
                <div className="d-flex row pb-5">
                    
                    <div className="col-lg-6">
                        <h5>Visiting London on a Budget: Top City Views</h5>
                        <h6>Categories   -By Lorem Ipsum</h6>
                        <p>Susp endisse ullam corper a adipiscing class ullam corper inceptos nisl consequat eros congue.</p>
                        <Button>Read This </Button>
                    </div>
                    <div className="col-lg-6">
                        <img src={blog2} alt="" style={{ width: '400px'}}/>
                    </div>
                </div>
                <div className="d-flex row pb-5">
                    <div className="col-lg-6">
                        <img src={blog3} alt="" style={{ width: '400px'}}/>
                    </div>
                    <div className="col-lg-6">
                        <h5>Visiting London on a Budget: Top City Views</h5>
                        <h6>Categories   -By Lorem Ipsum</h6>
                        <p>Susp endisse ullam corper a adipiscing class ullam corper inceptos nisl consequat eros congue.</p>
                        <Button>Read This </Button>
                    </div>
                    
                </div>
            </Container>
        </div>
    );
};

export default Blog;