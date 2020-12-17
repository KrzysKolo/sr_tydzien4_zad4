import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faHamburger, faFilm, faSwimmer } from '@fortawesome/free-solid-svg-icons';
const Cat = (props) => {
    console.log(props);
    let cat = {...props};
     switch ({props}) {
        case 'props: 1': return  <FontAwesomeIcon icon={faCartArrowDown} />
        case "props: 2": return <FontAwesomeIcon icon={faHamburger} />
        case "props: 3": return <FontAwesomeIcon icon={faFilm} />
        case "props: 4": return <FontAwesomeIcon icon={faSwimmer} />
        default: return null
        }


}

export default Cat;
