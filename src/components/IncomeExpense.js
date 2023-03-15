import React,{useContext} from 'react'
import {GlobalContext} from '../context/Stateprovider'

export const IncomeExpense = () => {
    const {state} = useContext(GlobalContext);
    const transactions = state.transactions
    const income = transactions.filter((value)=>{return (value.amount > 0)})
    const incomeTotal = income.reduce((acc,value)=>{
        return (acc + value.amount)
    },0)

    const expense = transactions.filter((value)=>{return(value.amount < 0)}) 
    const expenseTotal= expense.reduce((acc,value)=>{
        return (acc + value.amount);
    },0)

    return (
        <div>
            <div>
            <p>Income</p>
            <h2>${incomeTotal}</h2> 
            </div>

           <div>
            <p>Expenses</p>
           <h2>-${Math.abs(expenseTotal)}</h2>
           </div>
            
        </div>
    )
}
