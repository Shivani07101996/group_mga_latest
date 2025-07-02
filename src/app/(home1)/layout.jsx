import React from 'react';
import Footer from '../Components/Footer/Footer';
import WowInit from '../Components/Common/WowInit';

const DefalultLayout = ({ children }) => {
    return (
        <div className='main-page-area'>
            <WowInit />
            {children}
            <Footer></Footer>
        </div>
    );
};

export default DefalultLayout;