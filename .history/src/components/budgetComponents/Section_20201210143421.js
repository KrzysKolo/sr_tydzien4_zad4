import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
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
const Section = ({ title, label, data, total, onClick }) => {
    const {deleteTransaction} = useContext(GlobalContext);

   return (

        <SectionWrapper>
           <H1 title={title} label={label} />
           <DivData data={data} label={label} total={total} onClick={onClick}  />
        </SectionWrapper>
    )
}

export default Section;
