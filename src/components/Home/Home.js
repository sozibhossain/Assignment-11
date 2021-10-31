import React from 'react';
import Album from '../Album/Album';
import LatestTips from '../LatestTips/LatestTips';
import Packages from '../Packages/Packages';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider/>
            <Packages/>
            <Album/>
            <LatestTips/>
        </div>
    );
};

export default Home;