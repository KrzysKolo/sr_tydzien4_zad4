import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faHamburger, faFilm, faSwimmer } from '@fortawesome/free-solid-svg-icons';
const Cat = ({parametr}) => {
    console.log(parametr);
    switch (parametr) {
        case 1: return <FontAwesomeIcon icon={faCartArrowDown} />;
        case 2: return <FontAwesomeIcon icon={faSwimmer} />;
        case 3: return <FontAwesomeIcon icon={faHamburger} />;
        case 4: return <FontAwesomeIcon icon={faFilm} />;
        default: return null;
        }


}

export default Cat;
