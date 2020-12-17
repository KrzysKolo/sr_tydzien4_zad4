import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';

const SectionHeader = styled.header`
    display: grid;
    grid-template-rows: 50% 50%;
         grid-row-start:1;
        grid-row-end:3;
        grid-column-start:1;
        grid-column-end:5;
    border: 1px solid red;
`;
const Header = () => {
    return (
        <SectionHeader>
            <FontAwesomeIcon icon={faWallet}/>
            <h3>fdfdf</h3>
        </SectionHeader>
    )
}

export default Header;
