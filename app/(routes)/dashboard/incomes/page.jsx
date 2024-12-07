import React from "react";
import IncomeList from "./_components/IncomeList";

function Income() {
  return (
    <div className="p-10  bg-secondary h-[100vh] ">
      <h2 className="font-bold text-3xl text-white ">My Income Streams</h2>
      <IncomeList />
    </div>
  );
}

export default Income;
