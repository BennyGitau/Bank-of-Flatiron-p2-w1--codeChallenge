import React, {useEffect, useState} from "react";
import Transaction from "./Transaction";

function TransactionsList({ data, searchTerm }) {
  console.log(data)
  const [filteredData, setFilteredData] = useState([])
  const [sort, setSort] = useState('')
  const [sortTransactions, setSortedTransactions] = useState([])

  
  
  useEffect(()=>{
    if(sort === "category"){
      setSortedTransactions([...filteredData].sort((a, b) => a.category.localeCompare(b.category)))
    }else if (sort === "description") {
      setSortedTransactions([...filteredData].sort((a,b)=> a.description.localeCompare(b.description)))
    } else {
      setSortedTransactions(filteredData)
    }
    
  },[sort, filteredData])
  useEffect(()=>{
    const updatedData = data.filter((item)=> {    
      return  searchTerm===''? item : item.category.toLowerCase().includes(searchTerm.toLowerCase())
    });
    setFilteredData(updatedData)
    
  },[data, searchTerm])
  function onSortByCategory (){
    setSort('category')
  }
  function onSortByDescription(){
    setSort('description')
  }
  
  //handle delete
  function handleDelete(deletedItem){
    const updatedItems = data.filter((item) => item.id !== deletedItem.id);
    setFilteredData(updatedItems)
    setSortedTransactions(updatedItems)
  }
    
  return (
    <>
    <button onClick={onSortByDescription}>Sort By Description</button>
    <button onClick={onSortByCategory}>Sort By Catetory</button>
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {sortTransactions.map((item)=> 
          <Transaction
            key={item.id}
            item={item}
            onDelete={handleDelete}
          />
        )}
      </tbody>
    </table>
    </>
  );
}

export default TransactionsList;
