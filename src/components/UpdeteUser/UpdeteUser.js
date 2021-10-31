import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './UpdeteUser.css';

const UpdeteUser = () => {
    const [user,setUser] = useState({});
    const {id} = useParams();

    useEffect(() => {
        const url = `http://localhost:5000/user/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data));
    },[])
    return (
        <div>
            <div className="updete">
                <h2>UPDETE USER</h2>
            </div>
            <div className="updete-user">
                <h5>User Updete Name:  {user.name}</h5>
                <h5>User Updete Email:  {user.email}</h5>
            </div>
        </div>
    );
};

export default UpdeteUser;