import React,{useState} from 'react'

const Newtransaction = () => {

    const [text,setText] = useState('')

    const [amount,setAmount] = useState('')

    return (
        <div>
            <form>
                <h3>
                    Add new transaction
                </h3>

                <label for="transactionName">transaction name</label>
                <input type="text" name="transactionName" value={text} onChange={(ev)=>{setText(ev.target.value)}} />
                
                <label for="transaction">Amount(use negative for expense)</label>
                <input type="text" name="transaction" value={amount} onChange={(ev)=>{setAmount(ev.target.value)}} />

                <input type='submit' value='add' />
                

            </form>
        </div>
    )
}

export default Newtransaction;
