import React from "react";
import { Search } from "lucide-react";

export const SearchBarBox = () => {
  return (
    <div>
      <Search />
      <input placeholder="Type to search..." />
    </div>
  );
};
