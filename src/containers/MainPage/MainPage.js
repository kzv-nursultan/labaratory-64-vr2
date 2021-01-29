import React from 'react';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import GetPosts from '../GetPosts/GetPosts';

const MainPage = () => {
    return (
        <div>
            <NavBar/>
           <div className="container mt-2">
                <GetPosts/>
           </div>
           <Footer/>
        </div>
    );
};

export default MainPage;