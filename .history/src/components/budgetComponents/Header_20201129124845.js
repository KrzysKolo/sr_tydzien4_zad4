import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';

const SectionHeader = styled.header`
    display: grid;
    grid-template-rows: 50% 50%;
    grid-auto-flow: row;
    justify-content: center;
    justify-items: center;
    align-items: center;
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
