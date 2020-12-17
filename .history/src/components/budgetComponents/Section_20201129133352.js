import React from 'react';
import styled from 'styled-components';

const SectionWrapper = styled.section`
    display: flex;
    flex-direction: column;
`;
const Section = () => {
    return (
        <SectionWrapper>
           <p>sekcja 1</p>
           <p>dsdsdsdsd</p>
        </SectionWrapper>
    )
}

export default Section;
