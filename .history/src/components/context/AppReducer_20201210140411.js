export default (state, action) => {
    switch (action.type) {
    case 'DELETE_TRANSACTION':
            return {
                ...state,
                incomeTransactions: state.incomeTransactions.filter(
                    data => data.id !== action.payload
                  ),
                  expenseTransactions: state.expenseTransactions.filter(
                    expenseTransaction => expenseTransaction.id !== action.payload
                  ),
            }
        default:
            return state
        }
      };