import React from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';

const Contacts = () => {
    return (
        <div>
            <NavBar/>
            <div className='container m-5 p-5'>
            <p>
            North America:
            Press@tesla.com
            </p>
            <p>
            Europe & Middle East:
            EUPress@tesla.com
            </p>
            <p>
            Australia and Asia:
            APACPress@tesla.com
            </p>
            <p>
            China:
            China-Press@tesla.com
            </p>
            <div>
                <h2>Боулдер, Walnut</h2>
                <p>
                    3333 Walnut St
                    Boulder CO, 80301
                </p>
                <p>
                    United States
                    Телефон: +1 303-245-0086
                </p>
            </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Contacts;