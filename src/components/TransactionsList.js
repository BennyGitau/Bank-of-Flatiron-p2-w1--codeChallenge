import React from "react";
import Transaction from "./Transaction";

function TransactionsList({ data }) {
  //const [amount, category,date, description, id] = data
  
  
  return (
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
        {data.map((item)=> 
          <Transaction
            key={item.id}
            amount={item.amount}
            category={item.category}
            date={item.date}
            description={item.description}
          />
        )}
        {/* render a list of <Transaction> components here */}
      </tbody>
    </table>
  );
}

export default TransactionsList;
