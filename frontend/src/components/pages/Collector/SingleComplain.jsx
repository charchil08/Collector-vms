import axios from 'axios';
import {
    MDBCard,
    MDBCardHeader,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn,
  
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';
import React from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';
import { PaperPlaneRight} from "phosphor-react";



export default function SingleComplain({ complain, setComplainStatus }) {
    let [departmentName, setDepartmentName] = ("");
    const [remark, setRemark]=("")
    // {console.log("form single post" + complain)}
    const toggleShow = () => {setCentredModal(!centredModal);
    axios.get('/department/'+ complain.department_name).then(res => {
        setDepartmentName(res.data.departments.departmentName)
        console.log(res.length);
        console.log(res.data.departments);
      })
    }
    const [centredModal, setCentredModal] = useState(false);
const addRemark = (remark)=>{
    axios.put('/complain/'+ complain._id, { remarks: remark }).then((res)=>{

        setRemark(res.data.complain.remarks);
        toast.success("remark added ")
    }
    )

}
    // const updateStatus = (string) => {
    //     axios.put('/complain/' + complain._id, { status: string }).then((res)=>{

    //         setComplainStatus(res.data.complain.status);
    //         toast.success("status updated... ")
    //     }
    //     )

    // }

    return (
        <>


            <MDBCard className='mx-3 my-2' style={{ width: "30%" }}>
                <MDBCardHeader>{complain._id}</MDBCardHeader>
                <MDBCardBody>
                    <div className="d-flex justify-content-between">

                        <MDBCardTitle>{complain.first_name}</MDBCardTitle>
                        <MDBCardTitle>{new Date(complain.createdAt).toLocaleDateString()}</MDBCardTitle>
                    </div>
                    <MDBCardText style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "webkitBox", 
                        webkitLineClamp: "2",
                        webkitBoxOrient: "vertical"
                    }}>{complain.details}</MDBCardText>
                    <div className="footer d-flex justify-content-between">
                        <MDBBtn
                            outline className='mx-2' color='info'>
                            {complain.status}...
                        </MDBBtn>
                        <MDBBtn onClick={toggleShow}>View</MDBBtn>
                    </div>
                </MDBCardBody>
            </MDBCard>





            <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                <MDBModalDialog centered>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>{complain._id}</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <img
                                src={complain.image}
                                className='img-fluid shadow-2-strong'
                                alt=''
                            />
                            <div className='d-flex justify-content-between'>

                                <MDBModalTitle>{complain.mobile_no}</MDBModalTitle>
                                <MDBModalTitle>{complain.email}</MDBModalTitle>
                            </div>
                            <hr />
                            <p>
                               {complain.details}
                            </p>

                            <hr />
                            <div className='d-flex justify-content-between'>
                                {/* <MDBModalTitle>{departmentName}</MDBModalTitle>
                                <MDBModalTitle>1235789102</MDBModalTitle> */}
                               
                                <MDBBtn outline className='mx-2' color='dark'>
                                connect Dept
                            </MDBBtn>
                            {/* <select className=" form-select w-50" id="validationCustom0" onChange={(e) => updateStatus(e.target.value)} required>
                                    <option selected="selected" value="--SELECT--">-Update-Status-</option>
                                    <option value="working">--WORKING--</option>
                                    <option value="solved">--SOLVED--</option>
                                    <option value="rejected">--REJECTED--</option>
                                    <option value="pending">--PENDING--</option>


                                </select> */}
                                <form>
                                    <div className='d-flex'>

                                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Remarks"
                                value={remark}
                                onChange={e=>setRemark(e.target.value)} />
                                <button type="button " class="btn btn-link" style={{width:"20%"}} onChange={(e)=>addRemark(remark)}><PaperPlaneRight size={32} /></button>
                                
                                
                                    </div>
                                </form>
                            </div>
                        </MDBModalBody>
                        <MDBModalFooter>
                        <MDBModalTitle>{complain.remarks}</MDBModalTitle>
                            <MDBBtn outline className='mx-2' color='info'>
                                pending...
                            </MDBBtn>
                            <MDBBtn color='secondary' onClick={toggleShow}>
                                Close
                            </MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>

    )
}
