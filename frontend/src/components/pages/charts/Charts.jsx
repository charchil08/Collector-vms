import React from 'react'
import { Bar } from 'recharts'
import Bars from './Bar'
import Chart from './Chart'
import Stacked from './Stacked'

export default function Charts({pending, rejected, solved, working}) {
  return (
    <div className='d-flex flex-wrap' style={{marginTop:"130px"}}>
        <Chart  pending={pending} rejected= {rejected} setsolved={solved} setworking= {working} />
        <Stacked />
       
    </div>
  )
}
