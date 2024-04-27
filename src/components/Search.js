import React, {useState} from "react";

function Search({handleSearch}) {


  const [searchTerm, setSearchTerm] = useState('');
  //console.log(searchTerm)
  function onTransactionSearch (value){
    setSearchTerm(value.trim())
    handleSearch(searchTerm)
    //setSearchTerm('')
    
  }
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        value={searchTerm}
        placeholder="Search your Recent Transactions"
        onChange={(e)=> onTransactionSearch(e.target.value)}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
