import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons';
const Cat = ({cat}) => {

    return (
        <div>
        switch ({cat}) {
            case "0":
                <FontAwesomeIcon>{faTrashAlt}</FontAwesomeIcon>
              this.categoryIcon = '<i class="fas fa-money-bill-wave"></i>';
              console.log(this.categoryIcon);
              break;
            case "[ - ] Zakupy":
              this.categoryIcon = '<i class="fas fa-cart-arrow-down"></i>';
              console.log(this.categoryIcon);
              break;
            case "[ - ] Jedzenie":
              this.categoryIcon = '<i class="fas fa-hamburger"></i>';
              console.log(this.categoryIcon);
              break;
            case "[ - ] Kino":
              this.categoryIcon = '<i class="fas fa-film"></i>';
              console.log(this.categoryIcon);
              break;
            case "[ - ] Basen":
              this.categoryIcon = '<i class="fas fa-swimmer"></i>';
              console.log(this.categoryIcon);
              break;
          }
        </div>
    )
}

export default Cat;
