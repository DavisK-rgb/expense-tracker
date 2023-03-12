

const globalreducer = (state,action) => {
    switch (action.type) {
        case 'delete':
             return {...state,transactions:state.transactions.filter((transaction)=>{return transaction.id !== action.payload })}
        case 'addnew':
             return {...state,transactions:[...state.transactions,action.payload]}
        default:
             return {state}
    }
}


export default globalreducer
