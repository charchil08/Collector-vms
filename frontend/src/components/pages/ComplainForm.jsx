import React, { useEffect, useState } from 'react'
import { MDBFile } from 'mdb-react-ui-kit';
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';
import img2 from "../../image/login-background/Picsart_22-10-05_14-14-02-869-min_11zon.png"
import img3 from "../../image/login-background/Picsart_22-10-05_14-14-49-990-min_11zon.png"
import img4 from "../../image/login-background/Picsart_22-10-05_14-15-37-652-min_11zon.png"
import { useNavigation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';


export default function ComplainForm() {
    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [middle_name, setMiddle_name] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("")
    const [address, setAddress] = useState("");
    const [details, setDetails] = useState("");
    const [dept, setDept] = useState([]);
    const [department, setDepartment] = useState("");
    const [image, setImg] = useState("");
    const [severity, setSeverity] = useState("")


    useEffect(() => {
        const fetchDept = async () => {
            await axios.get("http://localhost:8888/api/v1/departments").then(res => {
                setDept(res.data)
                setDept(res.data.departments);
                console.log(res.length);
                console.log(res.data.departments);
            })

        }
        fetchDept();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newComplain = {
            first_name,
            middle_name,
            last_name,
            email,
            mobile_no: mobile,
            address,
            details,
            department_name: department,
            severity,
            image
        };

        try {
            console.log(newComplain);
            await axios.post("complain", newComplain).then((res) => {
                // window.location.replace("/preview/" + res.data._id)

                toast.success("complain has been added")
            });

        } catch (err) {
            console.log(err);
            toast.error("Error while writing blog")
        }

    }
    const upload = (e) => {
        // check max. file size is not exceeded
        // size is in bytes
        if (e.size > 200000) {
            console.log("File too large");
            return;
        }
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);

        reader.onload = () => {
            // console.log(reader.result); //base64encoded string
            setImg(reader.result)
        };
        reader.onerror = error => {
            console.log("Error: ", error);
        };
    }
    return (
        <div>
            <div className="background opacity-75" style={{ position: "relative", zIndex: "1" }}>

                <MDBCarousel className='fluid"' style={{ marginLeft: "5%", marginRight: "5%" }}>
                    <MDBCarouselItem

                        className='w-100  d-block'
                        itemId={1}
                        src={img2}
                        alt='...'
                    />
                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={2}
                        src={img3}
                        alt='...'
                    />
                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={3}
                        src={img4}
                        alt='...'
                    />
                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={4}
                        src={img3}
                        alt='...'
                    />
                </MDBCarousel>
            </div>



            <div className=' d-flex flex-column align-items-center justify-content-center' style={{ zIndex: "2", position: "relative", marginTop: "-30%", width: "100%" }}>
                <p className="fs-1" style={{ color: "black" }}> Complain Form</p>

                <form onSubmit={handleSubmit} className='d-flex flex-column'>
                    <div className="row mb-2">
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="First name"
                                aria-label="First name"
                                value={first_name}
                                onChange={e => setFirst_name(e.target.value)}
                                required />
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Middle name"
                                aria-label="Middle name"
                                onChange={e => setMiddle_name(e.target.value)}
                                value={middle_name}
                            />
                        </div>
                        <div className="col">
                            <input type="text"
                                className="form-control"
                                placeholder="Last name"
                                aria-label="Last name"
                                value={last_name}
                                onChange={e => setLast_name(e.target.value)}

                                required />
                        </div>
                    </div>



                    <div className="row mb-2">
                        <div className="col">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Mobile No"
                                aria-label="Mobile No"
                                value={mobile}
                                onChange={e => setMobile(e.target.value)}
                                required />
                        </div>
                        <div className="col">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email Id"
                                aria-label="Email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="row mb-2">
                        <div className="col mb-2">
                            <textarea
                                className="form-control"
                                placeholder="Address"
                                id="c-address"
                                value={address}
                                onChange={e => setAddress(e.target.value)}
                                required />
                        </div>
                        <div className="col">
                            <textarea
                                className="form-control"
                                placeholder="Complain details"
                                id="complain-details"
                                value={details}
                                onChange={e => setDetails(e.target.value)}
                                required />
                        </div>
                    </div>

                    <div className=" row mb-2">
                        <div className="col select-menu">

                            <select className=" form-select" id="validationCustom0" onChange={e => setDepartment(e.target.value)} required>
                                <option selected="selected" value="--SELECT--">--SELECT- DEPARTMENT-</option>
                                {dept.map((c) => (

                                    <option value={c._id} key={c._id}  >{c.department_name}</option>

                                ))}

                            </select>

                        </div>
                        <div className="col select-menu">

                            <select className=" form-select" id="validationCustom0" onChange={e => setSeverity(e.target.value)} required>
                                <option selected="selected" value="--SELECT--">--SELECT-SEVERITY -</option>
                                <option value="critical">--CRITICAL--</option>
                                <option value="major">--MAJOR--</option>
                                <option value="moderate">--MODERATE--</option>
                                <option value="minor">--MINOR--</option>
                                <option value="cosmetic">--COSMETIC--</option>

                            </select>

                        </div>
                    </div>
                    <div>
                        <MDBFile className='mb-2' id='customFile' onChange={upload} placeholder="" accept="image/png, image/jpeg" />
                    </div>

                    <div className="submit d-flex align-items-center justify-content-center">

                        <button
                            type="submit"
                            className="btn btn-primary d-relative "
                            style={{ width: "200px" }}
                        >Register Complain</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
