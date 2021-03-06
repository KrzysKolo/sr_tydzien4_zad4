import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
const initialState = {
    incomeTransactions: [
        { id: 0, category: 0, name: "wynagrodzenie", amount: 3500.45},
        { id: 1, category: 0, name: "nadgodziny", amount: 700},
    ],
    expenseTransactions: [
        { id: 0, category: 1, name: "prąd", amount: 350},
        { id: 1, category: 1, name: "gaz", amount: 250},
        { id: 3, category: 4, name: "kino", amount: 110},
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