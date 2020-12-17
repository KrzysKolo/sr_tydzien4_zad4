import React from 'react';
import H2 from './sectionComponents/H2';
import P from './sectionComponents/P';
import Button from './../budgetComponents/buttons/Button';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faHeart, faPlus,  faTrashAlt, faShareAlt, faAngleDown } from '@fortawesome/free-solid-svg-icons';
const SectionWrapper = styled.section`
    border: 1px solid #ccc;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    margin: 2vw;
    padding: 2%;
`;
const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;
const Section = ({ title }) => {
    return (
        <SectionWrapper>
           <H2 title={title}> </H2>
           <P />
           <ButtonWrapper>
                <Button title="Dodaj transakcje" icons={faPlus} type="submit"/>
                <Button title="Usuń wszystko" icons={faTrashAlt} type="submit"/>
           </ButtonWrapper>
        </SectionWrapper>
    )
}

export default Section;
