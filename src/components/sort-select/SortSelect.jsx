import React from "react";

const options = [
  {
    content: "lasted note",
    value: "last",
  },
  {
    content: "earliest note",
    value: "earliest",
  },
  {
    content: "completed note",
    value: "completed",
  },
];
function SortSelect() {
  return (
    <select className="px-3 py-1 rounded-lg">
      {options.map((option) => {
        return <option value={option.value}>{option.content}</option>;
      })}
    </select>
  );
}

export default SortSelect;
