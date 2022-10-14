import React from 'react'
import ReactApexChart from 'react-apexcharts'

export default function Stacked() {
  const state = {
          
    series: [{
      name: 'SOLVED',
      data: [74, 55, 41, 37]
    },
    {
        name: 'WORKING ON',
        data: [41, 45, 24, 38]
      },
      {
        name: 'PENDING',
        data: [17, 51, 45, 25]
      },
      {
        name: 'REJECTED',
        data: [47, 58, 44, 14]
      },
      ],
    options: {
      chart: {
        type: 'bar',
        height: 50,
        stacked: true,
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      stroke: {
        width: 1,
        colors: ['#fff']
      },
      title: {
        text: 'Fiction Books Sales'
      },
      xaxis: {
        categories: ["ASSESSMENT CELL DEPARTMENT", "BUILDING DEPARTMENT","ELECTRICITY DEPARTMENT","DRAINAGE DEPARTMENT"],
        labels: {
          formatter: function (val) {
            return val
          }
        }
      },
      yaxis: {
        title: {
          text: undefined
        },
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val
          }
        }
      },
      fill: {
        opacity: 1
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40
      }
    },
  
  
  };

  return (
    <div id="chart">
    <ReactApexChart options={state.options} series={state.series} type="bar" height={250}  width={550}/>
  </div>
  )
}



// { label:"ASSESSMENT CELL DEPARTMENT" ,   y: 15 },
// { label:"BUILDING DEPARTMENT" ,   y: 21 },
// { label:"GARDEN DEPARTMENT" ,   y: 23 },
// { label:"FIRE AND EMERGENCY DEPARTMENTe" ,   y: 32 },
// { label:"FILTER DEPARTMENT" ,   y: 37 },
// { label:"ESTATE DEPARTMENT" ,   y: 39 },
// { label:"ELECTRICITY DEPARTMENT" ,   y: 41 },
// { label:"DRAINAGE DEPARTMENT" ,   y: 51 },
// { label:"COMPUTER DEPARTMENT" ,   y: 51 },
// { label:"CATTLE POUND DEPARTMENT" ,   y: 82 }