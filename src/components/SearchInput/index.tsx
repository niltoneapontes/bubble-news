import React, { useState } from "react";

interface SearchInputProps {
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchInput({ setInput }: SearchInputProps) {
  return (
    <input
      type="text"
      className="p-4 bg-transparent h-12 w-full border-solid border-gray rounded-md border text-lightGray font-sans"
      placeholder="Search for articles, topics, countries, etc."
      onChange={(event) => setInput(event.target.value)}
    ></input>
  );
}
