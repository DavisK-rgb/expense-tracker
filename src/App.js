
import './App.css';
import Newtransaction from './components/Newtransaction'
import Header from './components/Header'
import { Transactionlist } from './components/Transactionlist';
import {IncomeExpense} from './components/IncomeExpense'
import { Balance } from './components/Balance';
function App() {
  return (
    <div >

      <Header/>
      <Balance/>
      <IncomeExpense/>
      <Transactionlist/>
      <Newtransaction/>
      

    </div>
  );
}

export default App;
