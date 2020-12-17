import React from 'react';
import styled from 'styled-components';

import SectionIncome from './budgetComponents/SectionIncome';
import SectionExpense from './budgetComponents/SectionExpense';
import SectionInfo from './budgetComponents/SectionInfo';
import H2 from './budgetComponents/sectionComponents/H2';

const SectionContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
const SectionBudget = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const DivItems = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;

`;

const Section = () => {
    return (
        <SectionContainer>
        <SectionBudget>
            <H2 title="Transactions list" />
            <DivItems>
                <SectionIncome title="Income" label="income" incomeTransactions={incomeTransactions} total={totalI} />
                <SectionExpense title="Expenses"expenseTransactions={expenseTransactions} total={totalE} />
            </DivItems>
        </SectionBudget>
        <SectionInfo title="Your Balance" total={total}/>
    </SectionContainer>
    )
}

export default Section
