import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faHeart, faShareAlt, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const SectionHeader = styled.header`
    display: grid;
    grid-template-rows: 1fr;
    justify-content: center;
    align-items: center;
`;
const Header = () => {
    return (
        <SectionHeader>
            <FontAwesomeIcon icon={faEllipsisV}/>fdfdf
        </SectionHeader>
    )
}

export default Header;
