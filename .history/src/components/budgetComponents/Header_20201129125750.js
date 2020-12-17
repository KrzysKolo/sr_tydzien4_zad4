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
    margin: 2% auto 2% 1%;
`;
const DivHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;`;
const Header = () => {
    return (
        <SectionHeader>
            <DivHeader>
                <FontAwesomeIcon icon={faWallet}/>
                <h3>fdfdf</h3>
            </DivHeader>
            <h5>adadadadads</h5>
        </SectionHeader>
    )
}

export default Header;
