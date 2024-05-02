import React, {useState} from "react";

function Search({handleSearch}) {
  const [searchTerm, setSearchTerm] = useState('')
  function onSearch(event){
    const term = event.target.value
    setSearchTerm(term)
    handleSearch(term)

  }
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        value={searchTerm}
        placeholder="Search your Recent Transactions"
        onChange={onSearch}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
