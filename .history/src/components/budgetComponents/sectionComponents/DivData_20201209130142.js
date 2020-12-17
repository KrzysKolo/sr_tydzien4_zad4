import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Cat from './Cat';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import { faMoneyBillWave, faCartArrowDown, faHamburger, faFilm, faSwimmer } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
`;
const DivWrapper = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 2fr 1fr 0.5fr;
    width: 100%;
    margin: 5px 0;
    border-bottom: 1px solid #ccc;
    padding-bottom: 5px;
`;
const NameH3 = styled.h3`
    font-size: 1.1rem;
    font-weight: 600;
    text-align: left;
`;
const AmountSpan = styled.span`
    font-size: 1rem;
    text-align: right;
`;
const FontAwsomeP = styled.p`
    font-size: 1rem;
    font-weight: 300;
    text-align: right;
    color: rgb(127, 5, 80);
    cursor: pointer;
    transition: 0.3s ease-in-out;
    &:hover{
        transform: scale(0.9);
        color: rgba(127, 5, 80, 0.8);
    }
`;
const TotalAmountDivStyles = (label) => `
    color: ${label ? 'rgb(19, 147, 109)' : 'red'};
    font-size: 1.2rem;
    font-weight: 800;
    margin: 4% auto;
    width: 100%;
`;
const TotalAmountDiv = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    ${props => TotalAmountDivStyles(props.label)}
`;
const AmountP = styled.p`
    text-align: right;
    margin-right: 20%;
`;
const IcoP = styled.p`
    font-size: 1rem;
    font-weight: 300;
    text-align: left;
    color: rgb(127, 5, 80);
`;


const DivData = ({data, label, total, onClick}) => {
    const {deleteTransaction} = useContext(GlobalContext);
    return (
        <Container>
            {data.map(item => (
                <DivWrapper key={item.id}>
                    <IcoP>
                        <FontAwesomeIcon icon={faMoneyBillWave}/>
                    </IcoP>
                    <NameH3>{item.name}</NameH3>
                    <AmountSpan>{item.amount}zł</AmountSpan>
                    <FontAwsomeP  onClick={() => deleteTransaction(item.id)}><FontAwesomeIcon icon={faTrashAlt}/></FontAwsomeP>
                </DivWrapper>)) }
                <TotalAmountDiv label={label}><p>Total amount:</p>  <AmountP>{total}zł</AmountP></TotalAmountDiv>
        </Container>
    )
}

export default DivData;
