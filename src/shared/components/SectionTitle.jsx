import React from 'react';
import PropTypes from 'prop-types';


const SectionTitle = ({subHeading, heading }) => {
    return (
        <div>
            <div className='text-center'>
                    <p className='italic text-orange-500 text-lg'> {subHeading}</p>
                    <div className='w-1/4 mx-auto h-1 bg-gray-300 my-2'></div>
                    <h2 className='text-5xl'> {heading}</h2>
                    <div className='w-1/4 mx-auto h-1 bg-gray-300 my-3'></div>
                </div>
        </div>
    );
};


SectionTitle.propTypes = {

};


export default SectionTitle;
