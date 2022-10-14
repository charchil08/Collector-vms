import React, { useState } from 'react'
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBIcon,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import pending from '../../../image/status/pending.svg'
import working from '../../../image/status/working.svg'
import solved from '../../../image/status/solved.svg'
import rejected from '../../../image/status/reject.svg'
import { useEffect } from 'react';
import axios from 'axios';
import Complains from './Complains';
import { useNavigate } from 'react-router-dom';

export default function CollectorDisplay() {
  const navigate = useNavigate()
  const [complains, setComplains] = useState([]);
  const [filter, setFilter] = useState([])
  const [complainStatus, setComplainStatus] = useState("")

  useEffect(() => {
    const fetchComplain = async () => { 

      
        await axios.get("/complain").then(res => {
          setComplains(res.data.complains);
          console.log(res.data.complains);
          setFilter(res.data.complains);
        })
      

    }
    fetchComplain();
  }, [complainStatus])

  const complainDivision = (status) => { 
    if (status === "pending") {
      const pc = complains.filter(c => c.status === "pending")
      setFilter(pc)
    }
    else if (status === "working") {
      const pc = complains.filter(c => c.status === "working")
      setFilter(pc)
    }
    else if (status === "solved") {
      const pc = complains.filter(c => c.status === "solved")
      setFilter(pc)
    }
    else if (status === "rejected") {
      const pc = complains.filter(c => c.status === "rejected")
      setFilter(pc)
    }
    else if (status === "alert") {
      const pc = complains.filter(c => c.status === "alert")
      setFilter(pc)
    }
  }
  return (
    <div className='container'>

      <div className="count d-flex align-items-center justify-content-center my-4" style={{}}>
        <div class="card mx-4" style={{ width: "150px", padding: "0px", height: "" }}>
          <div class="card-header d-flex align-items-center justify-content-center">
            <img
              src={pending}
              className='img-fluid ' style={{ height: "50px", color: "red" }}
              alt=''
            />
          </div>
          <div class="d-flex flex-column align-items-center justify-content-center">
            <h5 class="card-title">pending</h5>
            <p class="text">{complains.filter(c => c.status === "pending").length}</p>
            <button onClick={()=>complainDivision("pending")} class="btn btn-outline-warning my-2">view</button>
          </div>
        </div>
        <div class="card mx-4" style={{ width: "150px", padding: "0px", height: "" }}>
          <div class="card-header d-flex align-items-center justify-content-center">
            <img
              src={working}
              className='img-fluid ' style={{ height: "50px"}}
              alt=''
            />
          </div>
          <div class="d-flex flex-column align-items-center justify-content-center">
            <h5 class="card-title">solved</h5>
            <p class="text">{complains.filter(c => c.status === "solved").length}</p>
            <button onClick={()=>complainDivision("solved")} class="btn btn-outline-primary my-2">view</button>
          </div>
        </div>
        <div class="card mx-4" style={{ width: "150px", padding: "0px", height: "" }}>
          <div class="card-header d-flex align-items-center justify-content-center">
            <img
              src={solved}
              className='img-fluid ' style={{ height: "50px"}}
              alt=''
            />
          </div>
          <div class="d-flex flex-column align-items-center justify-content-center">
            <h5 class="card-title">working</h5>
            <p class="text">{complains.filter(c => c.status === "working").length}</p>
            <button onClick={()=>complainDivision("working")} class="btn btn-outline-success my-2">view</button>
          </div>
        </div>
        <div class="card mx-4" style={{ width: "150px", padding: "0px", height: "" }}>
          <div class="card-header d-flex align-items-center justify-content-center">
            <img
              src={rejected}
              className='img-fluid ' style={{ height: "50px", color: "red" }}
              alt=''
            />
          </div>
          <div class="d-flex flex-column align-items-center justify-content-center">
            <h5 class="card-title">rejected</h5>
            <p class="text">{complains.filter(c => c.status === "rejected").length}</p>
            <button onClick={()=>complainDivision("rejected")} class="btn btn-outline-danger my-2">view</button>
          </div>
        </div>
      </div>


      <div className="search d-flex justify-content-center my-3">
        <input type="text" name="search" id="search" placeholder='search with complain ID' style={{ width: "25%", }} />
        <button type="button" class="btn btn-primary" style={{ marginLeft: "5px" }}>Search</button>

        <div className="visualization">
        <button class="btn btn-success mx-4" onClick={()=>{navigate("/chart")}}>visualization</button>

        </div>
        <div className="removeFilter">
        <button class="btn btn-danger mx-4"  onClick={()=>setFilter(complains)}>Clear Filter</button>

        </div>

      </div>
      <div className='home'>
        <Complains complains={filter} setComplainStatus={setComplainStatus} />

      </div>
    </div>
  )
}
