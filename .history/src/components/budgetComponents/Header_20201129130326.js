import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';

const SectionHeader = styled.header`
    align-items: center;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2%;
`;
const DivHeader = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 0.5rem;
`;
const H1Header = styled.h1`
    font-size: 1.25rem;
    margin-left: .5rem;

`;
const Header = () => {
    return (
        <SectionHeader>
            <DivHeader>
                <FontAwesomeIcon icon={faWallet}/>
                <H1Header>fdfdf</H1Header>
            </DivHeader>
            <h5>adadadadads</h5>
        </SectionHeader>
    )
}

export default Header;
