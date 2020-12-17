import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUmbrellaBeach, faHamburger, faFilm, faRunning, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';
const Cat = ({parametr}) => {
    console.log(parametr);
    switch (parametr) {
        case 1: return <FontAwesomeIcon icon={faMoneyBillAlt} />;
        case 2: return <FontAwesomeIcon icon={faRunning} />;
        case 3: return <FontAwesomeIcon icon={faHamburger} />;
        case 4: return <FontAwesomeIcon icon={faFilm} />;
        case 5: return <FontAwesomeIcon icon={faUmbrellaBeach} />;
        default: return null;
        }


}

export default Cat;
