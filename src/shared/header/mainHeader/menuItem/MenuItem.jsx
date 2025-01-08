import React from 'react';
import PropTypes from 'prop-types';


const MenuItem = ({item}) => {
    const {name,recipe,price,image} = item;
    return (
        <div>
            <div className='flex space-x-4'>
                <img className='w-[100px] rounded-br-3xl rounded-tr-3xl rounded-bl-3xl' src={image} alt="" />
                <div>
                    <h3 className='text-xl uppercase'>{name}</h3>
                    <p className='text-base'>{recipe}</p>
                </div>
                <p className='text-lg font-semibold text-orange-500 '>${price}</p>
            </div>
            
        </div>
    );
};


MenuItem.propTypes = {

};


export default MenuItem;
