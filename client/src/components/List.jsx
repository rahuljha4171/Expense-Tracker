import React from "react";
import "boxicons";
import { default as api } from "../store/api";

const List = () => {
  const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery();
  const [deleteTransaction] = api.useDeleteTransactionMutation();
  let Transactions;

  const handlerClick = (e) => {
    if (!e.target.dataset.id) return 0;
    deleteTransaction({ _id: e.target.dataset.id });
  };
  console.log(data);
  if (isFetching) {
    Transactions = <div>Fetching ...</div>;
  } else if (isSuccess) {
    Transactions = data.map((v, i) => (
      <Transaction key={i} category={v} handler={handlerClick} />
    ));
  } else if (isError) {
    Transactions = <div>Error</div>;
  }

  return (
    <div className="flex flex-col py-6 gap-3">
      <h1 className="py-4 font-bold text-xl">History</h1>
      {Transactions}
    </div>
  );
};

const Transaction = ({ category, handler }) => {
  if (!category) return null;

  return (
    <div
      className="item flex justify-center bg-gray-50 py-2 rounded-r"
      style={{ borderLeft: `8px solid ${category.color ?? "#e5e5e5"}` }}
    >
      <span className="block w-full">
        {category.name ?? ""}(₹{category.amount})
      </span>
      <button className="px-3" onClick={handler}>
        <box-icon
          data-id={category._id ?? ""}
          color={category.color ?? "#e5e5e5"}
          size="15px"
          name="trash"
        ></box-icon>
      </button>
    </div>
  );
};

export default List;
