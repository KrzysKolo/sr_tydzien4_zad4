import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';

const SectionHeader = styled.header`
    align-items: center;
    color: rgb(127, 5, 80);
    display: flex;
    font-size: 2.2rem;
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
    color: #14161f;
    font-size: 2rem;
    margin-left: .5rem;
`;
const H2Header = styled.h2`
    color: #14161f;
    font-size: 1.25rem;
`;
const Header = () => {
    return (
        <SectionHeader>
            <DivHeader>
                <FontAwesomeIcon icon={faWallet}/>
                <H1Header>Budget</H1Header>
            </DivHeader>
            <H2Header>Personal finance manager.</H2Header>
        </SectionHeader>
    )
}

export default Header;
