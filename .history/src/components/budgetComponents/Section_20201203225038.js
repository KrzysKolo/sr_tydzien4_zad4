import React from 'react';
import { H1 }from './sectionComponents/index';
import Transactions from './../data/Transactions';
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
    width: 300px;
`;
const Section = ({ title, label }) => {
   return (
        <SectionWrapper>
           <H1 title={title} label={label} />
          {Transactions.map(item => {return(<div key={item.id} category={item.category}>{item.name} {item.amount} </div>)}).filter(("Przychód")}
        </SectionWrapper>
    )
}

export default Section;
