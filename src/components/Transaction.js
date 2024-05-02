import React from "react";
import axios from 'axios'

function Transaction({item, onDelete}) {
  const { id, amount, category, date, description}= item;
//deleting an item
  function handleDelete(){
    axios.delete(`http://localhost:8001/transactions/${id}`)
    .then(() =>onDelete(item))
  }
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td>
        <button  onClick={handleDelete}>X</button>
      </td>
    </tr>
  );
}

export default Transaction;
