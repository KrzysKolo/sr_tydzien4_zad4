import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
const initialState = {
    incomeTransactions: [
        { id: 0, category: "Przychód", name: "wynagrodzenie", amount: 3500},
        { id: 1, category: "Przychód", name: "nadgodziny", amount: 700},
    ],
    expenseTransactions: [
        { id: 0, category: "Rachunki", name: "prąd", amount: 350},
        { id: 1, category: "Rachunki", name: "gaz", amount: 250},
        { id: 3, category: "Kultura", name: "kino", amount: 110},
    ],
};
export const GlobalContext = createContext(initialState);
export const GlobalContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const addIncome = incomeTransaction => {
        dispatch({
            type: "ADD_INCOME",
            payload: incomeTransaction,
        });
    };
    const addExpense = expenseTransaction => {
        dispatch({
            type: "ADD_EXPENSE",
            payload: expenseTransaction,
        });
    };
    const deleteTransaction = id => {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id,
          });
    };
    return (
        <GlobalContext.Provider value={{
            incomeTransactions: state.incomeTransactions,
            expenseTransactions: state.expenseTransactions,
            addIncome,
            addExpense,
            deleteTransaction,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}