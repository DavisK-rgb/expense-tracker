
import './App.css';
import Newtransaction from './components/Newtransaction'
import Header from './components/Header'
import { Transactionlist } from './components/Transactionlist';
import {IncomeExpense} from './components/IncomeExpense'
import { Balance } from './components/Balance';
import Stateprovider from './context/Stateprovider'
function App() {
  return (
    
    <Stateprovider>

      <Header/>
      <Balance/>
      <IncomeExpense/>
      <Transactionlist/>
      <Newtransaction/>
            
    </Stateprovider>
     
 
  );
}

export default App;
