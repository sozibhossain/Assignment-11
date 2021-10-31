import React, { useRef } from 'react';
import './AddUser.css';

const AddUser = () => {
    const nameRef = useRef();
    const emailRef = useRef();

    const handleAddUser = e => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;

        const newUser = {name, email};
        fetch('http://localhost:5000/user', {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('User added successefully.')
                e.target.reset();
            }
        })

        e.preventDefault();
    }

    return (
        <div>
            <div className="adduser">
                <h3>Please Add an User</h3>
            </div>

            <div className="adduser-area">
                <form onSubmit={handleAddUser}>
                    <input type="text" ref={nameRef}/>
                    <input type="email" name="" id="" ref={emailRef}/>
                    <input type="submit" value="Add"/>

                </form>
            </div>
        </div>
    );
};

export default AddUser;