import React,{useState, useEffect} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [data, setData] = useState([])

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
    
    
    fetch('http://localhost:8001/transactions',{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTransaction)
    })
    .then(res => res.json())
    .then(newTransaction => {
      console.log(newTransaction)
      setData([...data, newTransaction])

    })
  }

  }
  //function to handle search
  function onSearch(searchTerm){
    console.log(searchTerm)
   const filteredData = data.filter((item)=> {    
    return searchTerm.toLowerCase() === ""? item : item.category.toLowerCase().includes(searchTerm)
  })
  setData(filteredData)
  

  }

  return (
    <div>
      <Search handleSearch={onSearch}/>
      <AddTransactionForm 
      handleAddTransaction={addTransaction}/>
      <TransactionsList data={data}/>
    </div>
  );
}

export default AccountContainer;
