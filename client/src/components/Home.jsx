import React from "react";
import Graph from "./Graph";
import Form from "./Form";
import "./style.css";

const Home = () => {
  return (
    <div className="App">
      <div className="container max-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
        <h1 className="text-4xl py-8 mb-10 bg-slate-800 text-white rounded">
          Expense Tracker
        </h1>
        {/* Grid Columns */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Chart */}
          <Graph />
          {/* Form */}
          <Form/>
        </div>
      </div>
    </div>
  );
};

export default Home;
