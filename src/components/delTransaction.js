import React,{useContext} from 'react'
import {GlobalContext} from '../context/Stateprovider'
export const DelTransaction = ({id}) => {
const {deleteTransaction} = useContext(GlobalContext);
    return (
        <div>
            <input type="button"  value="X" onClick={()=>{deleteTransaction(id)}}/>
            
        </div>
    )
}
