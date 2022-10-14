import {
    PieChart,
   
    Cell,
    
    Pie,
    CartesianGrid,
    XAxis,
    YAxis,
  } from "recharts";
//   import "./App.css";
  
  function Bars() {
    const sampleData = [
      { name: "Ggggg", value: 30, color: "#123321" },
      { name: "Cars", value: 40, color: "#ff0000" },
      { name: "Table", value: 30, color: "#000000" },
    ];
    return (
      <div
        style={{
          display: "block",
          width: 100,
          paddingLeft: 30,
        }}
      >
        <h4>React-Suite Charts PieChart Component</h4>
        <PieChart width={730} height={300} data={sampleData}>
          {sampleData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
          <Pie dataKey="value" fill="green" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
        </PieChart>
      </div>
    );
  }
  
  export default Bars;