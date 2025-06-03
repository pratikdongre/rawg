import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
  return (
    <>
      <CiSearch className="text-gray-600 w-8 h-8" />

      <input
        type="search"
        className="w-full bg-black text-white outline-0 rounded-2xl p-1"
        placeholder="Search Games..."
      ></input>
    </>
  );
};

export default SearchInput;
