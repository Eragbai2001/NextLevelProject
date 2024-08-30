import React from "react";
import { Search } from "lucide-react";
import "../C";

export const SearchBarBox = () => {
  return (
    <div className="input-wrapper">
      <Search id="search-icon" />
      <input placeholder="Type to search..." />
    </div>
  );
};
