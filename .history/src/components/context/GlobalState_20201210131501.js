import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
const initialState = {
    transactions: [
        { id: 0, category: 0, name: "wynagrodzenie", amount: 3500.45},
        { id: 1, category: 0, name: "nadgodziny", amount: 700},
        { id: 2, category: 1, name: "prąd", amount: 350},
        { id: 3, category: 1, name: "gaz", amount: 250},
        { id: 4, category: 4, name: "kino", amount: 110},
    ],
};
export const GlobalContext = createContext(initialState);
export const GlobalContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

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
            deleteTransaction,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}