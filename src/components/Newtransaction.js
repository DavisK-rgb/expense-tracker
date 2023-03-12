
import React,{useState,useContext} from 'react'
import {GlobalContext} from '../context/Stateprovider'




const Newtransaction = () => {
    
    const {addTransaction} = useContext(GlobalContext)
    
    const [text,setText] = useState('');
    const [amount,setAmount] = useState('');
    const trans = {text,amount};
    const submitHandler =(e)=>{
        e.preventDefault();
       addTransaction(trans);
       setText('');
       setAmount('');
    }
    return (
        <div>
            <form onSubmit={submitHandler} >
                <h3>
                 Add new transaction
                </h3>

                <label htmlFor="transactionName">transaction name</label>
                <input type="text" name="transactionName" value={text} onChange={(ev)=>{setText(ev.target.value)}} />
                
                <label htmlFor="transaction">Amount(use negative for expense)</label>
                <input type="text" name="transaction" value={amount} onChange={(ev)=>{setAmount(ev.target.value)}} />

                <input type='submit' value='add'  />
                

            </form>
        </div>
    )
}

export default Newtransaction;
