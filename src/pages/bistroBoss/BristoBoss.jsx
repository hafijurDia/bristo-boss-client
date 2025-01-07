import React from 'react';
import PropTypes from 'prop-types';
import bgImage from '../../assets/home/chef-service.jpg';

const BristoBoss = () => {
    const backgroundStyle = {
        backgroundImage: `url(${bgImage})`, // Use the imported image variable here
        backgroundSize: 'cover', // Ensures the background image covers the entire div
        backgroundPosition: 'center', // Centers the image
        height: '100vh', // Adjust the height as needed
        display: 'flex', // Enable Flexbox
        justifyContent: 'center', // Centers horizontally
        alignItems: 'center', // Centers vertically
    };

    return (
        <div className="background-image" style={backgroundStyle}>
            <div className="w-4/5 md:w-2/3 mx-auto p-10 bg-white text-center shadow-lg rounded-lg">
                <h3 className="text-4xl uppercase mb-4">Bistro Boss</h3>
                <p className="text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, 
                    libero accusamus laborum deserunt ratione dolor officiis praesentium! 
                    Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus 
                    incidunt quibusdam nemo.
                </p>
            </div>
        </div>
    );
};

BristoBoss.propTypes = {};

export default BristoBoss;
