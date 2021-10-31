import React from 'react';
import notfound from '../../images/notfound/notfound.jpg'

const NotFound = () => {
    return (
        <div className="p-5">
            <img src={notfound} alt="" style={{width: '700px'}}/>
        </div>
    );
};

export default NotFound;