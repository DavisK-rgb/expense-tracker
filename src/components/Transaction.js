import React,{useContext} from 'react'
import { DelTransaction } from './DelTransaction';
import {GlobalContext} from '../context/Stateprovider'

const Transaction = () => {
    
    const {state} = useContext(GlobalContext)
    console.log(state);
    return (
        <div>
             {state.transactions.map((transaction)=>{
            return ( <li key={transaction.id}>
           
                <div>
    
                <DelTransaction id={transaction.id}/>
                <p>{transaction.text}</p>
                <p>{transaction.amount}</p>
               
    
                </div>
                
            </li>)
        })}
        </div>
       
       
    )
}
export default Transaction;