import React from 'react';
import H1 from './sectionComponents/H1';
import styled from 'styled-components';

const SectionWrapper = styled.section`
    display: flex;
    flex-direction: column;
    margin: 0 10%auto;;
`;
const Section = () => {
    return (
        <SectionWrapper>
           <H1 title={"Przychód"} />
           <p>dsdsdsdsd</p>
        </SectionWrapper>
    )
}

export default Section;
