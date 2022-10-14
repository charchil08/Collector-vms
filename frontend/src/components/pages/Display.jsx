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
import pending from '../../image/status/pending.svg'
import working from '../../image/status/working.svg'
import solved from '../../image/status/solved.svg'
import rejected from '../../image/status/reject.svg'
import { useEffect } from 'react';
import axios from 'axios';
import Complains from './Collector/Complains';

export default function Display() {
  useEffect(() => {
    if ("caches" in window) {
      caches.keys().then((names) => {
        names.forEach((name) => {
          caches.delete(name);
        });
      });
    }
  }, []);

  const [complains, setComplains] = useState([]);



  useEffect(() => {
    const fetchComplain = async () => {

      
        await axios.get("/complain").then(res => {
          setComplains(res.data.complains)
          console.log(res.data.complains)
        })
    }
    fetchComplain();
  }, [])


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
            <p class="text">50</p>
            <a href="#" class="btn btn-outline-warning my-2">view</a>
          </div>
        </div>
        <div class="card mx-4" style={{ width: "150px", padding: "0px", height: "" }}>
          <div class="card-header d-flex align-items-center justify-content-center">
            <img
              src={working}
              className='img-fluid ' style={{ height: "50px", color: "red" }}
              alt=''
            />
          </div>
          <div class="d-flex flex-column align-items-center justify-content-center">
            <h5 class="card-title">solved</h5>
            <p class="text">50</p>
            <a href="#" class="btn btn-outline-primary my-2" >view</a>
          </div>
        </div>
        <div class="card mx-4" style={{ width: "150px", padding: "0px", height: "" }}>
          <div class="card-header d-flex align-items-center justify-content-center">
            <img
              src={solved}
              className='img-fluid ' style={{ height: "50px", color: "red" }}
              alt=''
            />
          </div>
          <div class="d-flex flex-column align-items-center justify-content-center">
            <h5 class="card-title">working</h5>
            <p class="text">50</p>
            <a href="#" class="btn btn-outline-success my-2">view</a>
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
            <p class="text">50</p>
            <a href="#" class="btn btn-outline-danger my-2">view</a>
          </div>
        </div>
      </div>


      <div className="search d-flex justify-content-center my-3">
        <input type="text" name="search" id="search" placeholder='search with complain ID' style={{ width: "25%", }} /><MDBBtn className="position-relative" style={{ height: "30px", marginLeft: "5px" }}> Search</MDBBtn>
      </div>
      <div className='home'>
        <Complains complains={complains} />

      </div>
    </div>
  )
}
 