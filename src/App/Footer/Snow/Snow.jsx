import React from 'react';
import './Snow.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons';

const Snow = () => {
    return (
        
            <div className="flag">
                <FontAwesomeIcon icon={  faSnowflake } /> 
            </div>
        
    )
};

export default Snow;