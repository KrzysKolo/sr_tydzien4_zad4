import React from 'react';
import { H1, DivData }from './sectionComponents/index';

import styled from 'styled-components';

const SectionWrapper = styled.section`
    border: 1px solid #ccc;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    font-size: 1.3rem;
    justify-content: center;
    align-items: center;
    margin: 2%;
    padding: 20px;
    min-width: 350px;
    width: 50%;
`;
const Section = ({ title, label, data }) => {
   return (
        <SectionWrapper>
           <H1 title={title} label={label} />
           <DivData data={data} />
        </SectionWrapper>
    )
}

export default Section;
