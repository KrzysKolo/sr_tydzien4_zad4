import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillWave, faCartArrowDown, faHamburger, faFilm, faSwimmer } from '@fortawesome/free-solid-svg-icons';
const Cat = (cat) => {
    console.log(cat);
    switch (cat) {
        case '0' : return <FontAwesomeIcon icon={faMoneyBillWave} />
        case '1': return  <FontAwesomeIcon icon={faCartArrowDown} />
        case "2": return <FontAwesomeIcon icon={faHamburger} />
        case "3": return <FontAwesomeIcon icon={faFilm} />
        case "4": return <FontAwesomeIcon icon={faSwimmer} />
        default: return null
        }


}

export default Cat;
