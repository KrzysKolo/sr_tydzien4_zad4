import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
const initialState = {
    incomeTransactions: [
        { id: 0, category: 0, name: "wynagrodzenie", amount: 3500.45},
        { id: 1, category: 0, name: "500+", amount: 1000},
    ],
    expenseTransactions: [
        { id: 3, category: 1, name: "prąd", amount: 350},
        { id: 4, category: 1, name: "gaz", amount: 250},
        { id: 5, category: 4, name: "kino", amount: 110},
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
    const deleteTransactionsIncome = (incomeTransaction ) => {
        dispatch({
            type: "DELETE_TRANSACTIONS",
            payload: incomeTransaction,
        });
    };
    const deleteTransactionsExpense = (expenseTransaction ) => {
        dispatch({
            type: "DELETE_TRANSACTIONS",
            payload: expenseTransaction,
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