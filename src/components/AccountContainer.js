import React,{useState, useEffect} from "react";
import axios from 'axios'
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState('');
  
//fetch data
  useEffect(()=>{
    axios.get('http://localhost:8001/transactions')
    .then(response => setData(response.data))
    .catch(error => console.error(error))
    },[])

    
//function to update new transaction
  function addTransaction(newTransaction){
    setData([...data, newTransaction])

    
   
  }
//function to handle search
  function onSearch(searchTerm){
    setSearchTerm(searchTerm.trim())
  }

  return (
    <div>
      <Search handleSearch={onSearch}/>
      <AddTransactionForm 
      handleAddTransaction={addTransaction}/>
      <TransactionsList 
        data={data}
        searchTerm={searchTerm}
      />
    </div>
  );
}

export default AccountContainer;
