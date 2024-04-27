import React,{useState, useEffect} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState('');
  
  //fetch data
  useEffect(()=>{
    fetch('http://localhost:8001/transactions')
    .then(response => response.json())
    .then(transactions => { 
      setData(transactions)
      console.log(transactions)})
  },[] )

  function addTransaction(newTransaction){
    if(newTransaction !=="") {
    
    ///function to update new transaction
    fetch('http://localhost:8001/transactions',{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTransaction)
    })
    .then(res => res.json())
    .then(newTransaction => {
      setData([...data, newTransaction])
    })
   }
  }
  //function to handle search
  function onSearch(event){
    setSearchTerm(event.target.value.trim())
  }
   const filteredData = data.filter((item)=> {    
    return  searchTerm===''? item : item.category.toLowerCase().includes(searchTerm.toLowerCase())
  })
  
  return (
    <div>
      <Search handleSearch={onSearch}/>
      <AddTransactionForm 
      handleAddTransaction={addTransaction}/>
      <TransactionsList data={filteredData}/>
    </div>
  );
}

export default AccountContainer;
