import React,{useContext} from 'react'
import {GlobalContext} from '../context/Stateprovider'

export const Balance = () => {
const{state} = useContext(GlobalContext);
const transactions = state.transactions
const balance = transactions.reduce((acc,value)=>{
    return (acc + value.amount )
},0)
const sign = balance>0 ? "$" : "-$"

    return (
        <div>
            <h2>BALANCE</h2>
            <h1>{sign}{Math.abs(balance)}</h1>
        </div>
    )
}
