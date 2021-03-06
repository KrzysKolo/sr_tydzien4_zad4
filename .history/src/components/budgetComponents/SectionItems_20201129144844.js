import React from 'react';
import H2 from './sectionComponents/H2';
import styled from 'styled-components';

const SectionWrapper = styled.section`
    border: 1px solid #ccc;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    margin: 2vw;
    padding: 2%;
`;
const Section = ({ title }) => {
    return (
        <SectionWrapper>
           <H2 title={title}> </H2>
           <p>dsdsdsdsd</p>
        </SectionWrapper>
    )
}

export default Section;
