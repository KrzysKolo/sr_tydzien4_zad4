import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';

const SectionHeader = styled.header`
    display: grid;
    grid-template-rows: 1fr;
    grid-auto-flow: row;
    justify-content: center;
    align-items: center;
    border: 1px solid red;
`;
const Header = () => {
    return (
        <SectionHeader>
            <FontAwesomeIcon icon={faWallet}/>fdfdf
        </SectionHeader>
    )
}

export default Header;
