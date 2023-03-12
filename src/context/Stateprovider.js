import React,{createContext,useReducer} from 'react'
import globalreducer from './Globalreducer'


const initialstate ={transactions:[{id:1,text:'salary',amount:800},{id:2,text:'fuel',amount:-400},{id:3,text:'rent',amount:-100}]} 

export const GlobalContext = createContext(initialstate);

const Stateprovider = ({children}) => {
 const [state, dispatch] = useReducer(globalreducer, initialstate )
 
 const deleteTransaction = (id)=>{
     dispatch({
         type:'delete',
         payload:id
     });
 }
 const addTransaction =(trans)=>{
     dispatch({
         type:'addnew',
         payload:{id:Math.random(),text:trans.text,amount:trans.amount}

     });
 }





    return (
     
        <GlobalContext.Provider value={{state,addTransaction,deleteTransaction}}>
            {children}
        </GlobalContext.Provider>
    
    )
}


export default Stateprovider
