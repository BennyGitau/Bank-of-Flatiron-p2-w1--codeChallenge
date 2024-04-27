import React from "react";

function Search({searchTerm, handleSearch}) {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        value={searchTerm}
        placeholder="Search your Recent Transactions"
        onChange={handleSearch}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
