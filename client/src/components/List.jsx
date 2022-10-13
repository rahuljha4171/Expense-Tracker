import React from "react";
import "boxicons";

const obj = [
  {
    name: "Saving",
    color: "rgb(255, 205, 86)",
  },
  {
    name: "Investment",
    color: "rgb(54, 162, 235)",
  },
  {
    name: "Expense",
    color: "rgb(255, 99, 132)",
  },
];

const List = () => {
  return (
    <div className="flex flex-col py-6 gap-3">
      <h1 className="py-4 font-bold text-xl">History</h1>
      {obj.map((v, i) => (
        <Transaction key={i} category={v} />
      ))}
    </div>
  );
};

const Transaction = ({ category }) => {
  if (!category) return null;
  return (
    <div
      className="item flex justify-center bg-gray-50 py-2 rounded-r"
      style={{ borderLeft: `8px solid ${category.color ?? "#e5e5e5"}` }}
    >
      <span className="block w-full">{category.name ?? ""}</span>
      <button className="px-3">
        <box-icon
          name="trash"
          color={category.color ?? "#e5e5e5"}
          size="15px"
        />
      </button>
    </div>
  );
};

export default List;
