import React,{useState} from "react";
import axios from "axios"

function AddTransactionForm({handleAddTransaction}) {
  const [formdata, setformData] = useState({
    date: "",
    amount: "",
    description: "",
    category: ""
  })
  

 function handleChange(e){
   setformData({
     ...formdata,
     [e.target.name]: e.target.value
    });
    
  }
  const handleSubmit = (event)=>{
    event.preventDefault()
    const newTransaction = {
      ...formdata
    }
    if(newTransaction !=="") {
    axios.post('http://localhost:8001/transactions',{
      ...newTransaction,
      amount: parseInt(newTransaction.amount)
    
    })
    .then(() => handleAddTransaction(newTransaction))
    .catch(error=> console.error(error))
  }
  setformData({
    date: "",
    amount: "",
    description: "",
    category: ""
  })
}

  
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input 
            type="date" 
            name="date" 
            value={formdata.date} 
            onChange={handleChange}/>
          <input 
            type="text" 
            name="description" 
            placeholder="Description" 
            value={formdata.description} 
            onChange={handleChange}/>
          <input 
            type="text" 
            name="category" 
            placeholder="Category" 
            value={formdata.category}
            onChange={handleChange}/>
          <input 
            type="number" 
            name="amount" 
            placeholder="Amount" 
            step="0.01" 
            value={formdata.amount} 
            onChange={handleChange}/>
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
