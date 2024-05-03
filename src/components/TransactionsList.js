import React, {useEffect, useState} from "react";
import Transaction from "./Transaction";

function TransactionsList({ data, searchTerm }) {
  const [filteredData, setFilteredData] = useState([]);
  const [sortedTransactions, setSortedTransactions] = useState([]);
  const [sort, setSort] = useState('');

  useEffect(() => {
    const updatedData = data.filter((item) =>
      searchTerm === '' ? item : item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    let sortedItems = [...updatedData];
    if (sort === 'category') {
      sortedItems.sort((a, b) => a.category.localeCompare(b.category));
    } else if (sort === 'description') {
      sortedItems.sort((a, b) => a.description.localeCompare(b.description));
    }

    setFilteredData(updatedData);
    setSortedTransactions(sortedItems);
  }, [data, searchTerm, sort]);

  function onSortByCategory() {
    setSort('category');
  }

  function onSortByDescription() {
    setSort('description');
  }

  function handleDelete(deletedItem) {
    const updatedItems = filteredData.filter((item) => item.id !== deletedItem.id);

    let sortedItems = [...updatedItems];
    if (sort === 'category') {
      sortedItems.sort((a, b) => a.category.localeCompare(b.category));
    } else if (sort === 'description') {
      sortedItems.sort((a, b) => a.description.localeCompare(b.description));
    }

    setFilteredData(updatedItems);
    setSortedTransactions(sortedItems);
  }

  return (
    <>
      <button onClick={onSortByDescription}>Sort By Description</button>
      <button onClick={onSortByCategory}>Sort By Category</button>
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
          {sortedTransactions.map((item) => (
            <Transaction key={item.id} item={item} onDelete={handleDelete} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TransactionsList;
