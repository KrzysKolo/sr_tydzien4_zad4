import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faHamburger, faFilm, faSwimmer } from '@fortawesome/free-solid-svg-icons';
const Cat = (cat) => {
    console.log(cat);
    const {cate} = cat;
    console.log(cate);
    switch (cate) {
        case ({cat} === 1): return <p>{cat}</p>; break;
        case 2: return <FontAwesomeIcon icon={faHamburger} />;
        case 3: return <FontAwesomeIcon icon={faFilm} />;
        case 4: return <FontAwesomeIcon icon={faSwimmer} />;
        default: return null;
        }


}

export default Cat;