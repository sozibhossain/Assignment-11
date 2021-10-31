import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './User.css';

const Users = () => {
    const [users, setUsers] = useState([]);


    useEffect( () => {
        fetch('http://localhost:5000/user')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[]);

    // delete an user

    const handleDeleteUser = id => {
        const proceed = window.confirm('Are uyou sure, you want to delete?');
        if(proceed){
            const url = `http://localhost:5000/user/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount >0){
                    alert('Deleted successfully');
                    const remainingUser = users.filter(user => user._id !==id);
                    setUsers(remainingUser);
                }
            });
        }
    }

    return (
        <div>
            <div className="total-user">
                <h3>Users Availble: {users.length}</h3>
            </div>

            <div className="user-area">
                <ul>
                    {
                        users.map(user => <li
                            key={user._id}
                        >{user.name} :: {user.email}
                            <Link to={`/updeteUser/${user._id}`}><Button style={{marginRight: '10px'}}>Update</Button></Link>
                            <Button onClick={() => handleDeleteUser(user._id)}>Delete</Button>
                        </li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Users;