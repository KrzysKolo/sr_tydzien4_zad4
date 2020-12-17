import React from 'react';
import H2 from './sectionComponents/H2';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faHeart, faShareAlt, faAngleDown } from '@fortawesome/free-solid-svg-icons';
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
           <p>0 zł</p>
           <ButtonWrapper>
                <button type="submit" icon={} >text1</button>
                <button type="submit" >text2</button>
           </ButtonWrapper>
        </SectionWrapper>
    )
}

export default Section;
