import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faUmbrellaBeach, faHamburger, faTheaterMasks, faRunning, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';
const Cat = ({parametr}) => {
    console.log(parametr);
    switch (parametr) {
        case 1: return <FontAwesomeIcon icon={faMoneyBillAlt} />;
        case 2: return <FontAwesomeIcon icon={faRunning} />;
        case 3: return <FontAwesomeIcon icon={faHamburger} />;
        case 4: return <FontAwesomeIcon icon={faTheaterMasks} />;
        case 5: return <FontAwesomeIcon icon={faUmbrellaBeach} />;
        case 6: return <FontAwesomeIcon icon={faShoppingBasket} />;
        default: return null;
        }


}

export default Cat;
