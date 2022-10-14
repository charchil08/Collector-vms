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
import React, { useEffect } from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function SingleComplain({ complain, setComplainStatus }) {
    let [departmentName, setDepartmentName] = useState("");
    const [deptName, setDeptName]= useState("");
    // {console.log("form single post" + complain)}
    const toggleShow = () => {
        setCentredModal(!centredModal);
        axios.get('/department/' + complain.department_name).then(res => {
            setDepartmentName(res.data.departments.departmentName)
            console.log(res.length);
            console.log(res.data.departments);
        })
    }
    const [centredModal, setCentredModal] = useState(false);
    const updateStatus = (string) => {
        axios.put('/complain/' + complain._id, { status: string }).then((res)=>{

            setComplainStatus(res.data.complain.status);
            toast.success("status updated... ")
        }
        )

    }
    useEffect(() => {
        const fetchDept = async () => {
            await axios.get("/departments/"+complain.department_name).then(res => {
                console.log(res.data)
                setDeptName(res.data.department.department_name)
            
            })

        }
        fetchDept();
    }, [1])
    
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
                            outline className='mx-2' color='danger'>
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
                            <MDBModalTitle>{deptName}</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                        </MDBModalHeader>

                        <MDBModalBody className='d-flex align-items-center justify-content-center'>
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
                                <select className=" form-select w-50" id="validationCustom0" onChange={(e) => updateStatus(e.target.value)} required>
                                    <option selected="selected" value="--SELECT--">-Update-Status-</option>
                                    <option value="working">--WORKING--</option>
                                    <option value="solved">--SOLVED--</option>
                                    <option value="rejected">--REJECTED--</option>
                                    <option value="pending">--PENDING--</option>


                                </select>


                            </div>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn outline className='mx-2' color='danger'>
                                {complain.severity}
                            </MDBBtn>
                            <MDBBtn outline className='mx-2' color='info'>
                               {complain.status}
                            </MDBBtn>
                            
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>

    )
}
