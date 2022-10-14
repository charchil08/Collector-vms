import { Dropdown } from 'bootstrap'
import React, { useState } from 'react'
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';
import img2 from "../../image/login-background/Picsart_22-10-05_14-14-02-869-min_11zon.png"
import img3 from "../../image/login-background/Picsart_22-10-05_14-14-49-990-min_11zon.png"
import img4 from "../../image/login-background/Picsart_22-10-05_14-15-37-652-min_11zon.png"
import { toast } from 'react-toastify';
import axios from 'axios';
import {useNavigate} from "react-router-dom"

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [department_name, setDept] = useState("");
    const navigate= useNavigate()
 

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {  

            await axios.post("/register", {
                department_name,
                email,
                password,

            }).then((res) => {
                toast.success("Registration successfully ")
                navigate('/login')
                // res.data && window.location.replace("/login");
                // console.log(profilePic);
            });
        } catch (err) {
            console.log(err)
            toast.error("Error while register")
        }
    }; 
    return (
        <>
            <div className="background opacity-75" style={{ position: "absolute", zIndex: "1" }}>

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



            <div className='container d-flex flex-column align-items-center justify-content-center' style={{ marginTop: "20vh", position: "relative", zIndex: "2" }} >
                <p className="fs-1" style={{ color: "black" }}> Create New User</p>
                <form className='w-50 d-flex flex-column justify-content-center' onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            aria-describedby="emailHelp"
                            placeholder='email Id'
                            onChange={e => setEmail(e.target.value)}
                            required />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="department"
                            placeholder='Department name'
                            onChange={e => setDept(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder='Password'
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='d-flex justify-content-center'>

                        <button type="submit" className="btn btn-primary w-75">create New user</button>
                    </div>
                </form>
            </div>
        </>
    )
}
