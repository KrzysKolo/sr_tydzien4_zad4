import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillWave, faCartArrowDown, faHamburger, faFilm, faSwimmer } from '@fortawesome/free-solid-svg-icons';
const Cat = (props) => {
  const checkCategory = (props) =>{
        switch (props) {
            case "0":
                <FontAwesomeIcon icon={faMoneyBillWave} />
                break;
            case "1":
                <FontAwesomeIcon icon={faCartArrowDown} />
              break;
            case "2":
                <FontAwesomeIcon icon={faHamburger} />
              break;
            case "3":
                <FontAwesomeIcon icon={faFilm} />
              break;
            case "4":
                <FontAwesomeIcon icon={faSwimmer} />
              break;
          }
    }
    return (

            checkCategory()

    )
}

export default Cat;
