import { PieChart , BarChart, Pie, Cell, Tooltip, Legend, Bar } from "recharts";
// import './App.css';

function Chart({pending, rejected, solved, working}) {
  const sampleData = [
    {name:'solved', value:1,color:'rgba(0,143,251,1)'},
    {name:'WorkingOn', value:1,color:'rgba(0,227,150,1)'},
    {name:'Pending', value:3,color:'rgba(254,176,25,1)'},
    {name:'rejected', value:1,color:'rgba(255,69,96,1)'},
  ];
  return ( 
    <>
    <div style={{
      display: 'block', width: 700, paddingLeft: 30
    }}>
      <div className="d-flex align-items-center justify-content-center">
      <h4>Overall Eyesight </h4>
      </div>
      <PieChart width={730} height={300}>
      <Pie
         data={sampleData}
         color="#000000"
         dataKey="value"
         nameKey="name"
         cx="50%"
         cy="50%"
         outerRadius={120}
         fill="#8884d8"
      >
         {sampleData.map((entry, index) => (
            <Cell
               key={`cell-${index}`}
               fill={entry.color}
            />
         ))}
      </Pie>
      <Tooltip content={"hello"} />
      <Legend />
      </PieChart>
    </div >
   
    </>
  );
}

export default Chart;