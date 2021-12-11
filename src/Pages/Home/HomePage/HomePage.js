import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Feature from '../Feature/Feature';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Services from '../Services/Services';
import Testomonial from '../Testomonial/Testomonial';

const HomePage = () => {
    return (
        <div>
           <Navbar></Navbar>
            <Banner></Banner>
            <Services></Services>
            <Feature></Feature>
            <Testomonial></Testomonial>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;