import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet. faEllipsisV, faHeart, faShareAlt, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const SectionHeader = styled.header`
    display: grid;
    grid-template-rows: 1fr;
    justify-content: center;
    align-items: center;
`;
const Header = () => {
    return (
        <SectionHeader>
            <FontAwesomeIcon icon={faWallet}/>fdfdf
        </SectionHeader>
    )
}

export default Header;
