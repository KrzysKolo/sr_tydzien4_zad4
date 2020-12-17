import React from 'react';
import H1 from './sectionComponents/H1';
import styled from 'styled-components';

const SectionWrapper = styled.section`
    border: 1px solid green;
    display: flex;
    flex-direction: column;
    margin: 0 2vw;
    padding: 2%;
`;
const Section = () => {
    return (
        <SectionWrapper>
           <H1 title={"Przychód"} label={"p"}/>
           <p>dsdsdsdsd</p>
        </SectionWrapper>
    )
}

export default Section;
