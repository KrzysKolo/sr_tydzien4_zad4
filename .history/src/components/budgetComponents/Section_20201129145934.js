import React from 'react';
import H1 from './sectionComponents/H1';
import styled from 'styled-components';

const SectionWrapper = styled.section`
    border: 1px solid #ccc;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    font-size: 20px;
    justify-content: center;
    align-items: center;
    margin: 2%auto;
    padding: 20px;
`;
const Section = ({ title, label }) => {
    return (
        <SectionWrapper>
           <H1 title={title} label={label}> </H1>
           <p>dsdsdsdsd</p>
        </SectionWrapper>
    )
}

export default Section;
