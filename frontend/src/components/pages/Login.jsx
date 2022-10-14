
import React, { useState } from 'react'
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';
import img1 from "../../image/login-background/11zon_resized.png"
import img2 from "../../image/login-background/Picsart_22-10-05_14-14-02-869-min_11zon.png"
import img3 from "../../image/login-background/Picsart_22-10-05_14-14-49-990-min_11zon.png"
import img4 from "../../image/login-background/Picsart_22-10-05_14-15-37-652-min_11zon.png"
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom"
export default function Login({ setCollector, setHod }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [dept, setDept] = useState("");
    const navigate = useNavigate();



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8888/api/v1/login', {
                email,
                password,

            }).then((res) => {
                console.log(res.data);
                toast.success("Login Successfully... ");
                if (res.data.user.role === "collector") {
                    setCollector(true);
                    setHod(false)
                    navigate('/complain')
                } else if (res.data.user.role === "hod") {

                    setHod(true)
                    setCollector(false)

                    navigate('/complain/hod/dept')
                } else {
                    navigate('/complainform')
                }
            })

        } catch (err) {

            toast.warn("Invalid Login credential ")

        }
    };
    return (

        <>
            <div className="background opacity-75" style={{ position: "absolute", zIndex: "1" }}>

                <MDBCarousel className='fluid"' style={{ marginLeft: "5%", marginRight: "5%" }}>
                    <MDBCarouselItem

                        className='w-100  d-block'
                        itemId={1}
                        src={img1}
                        alt='...'
                    />
                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={2}
                        src={img2}
                        alt='...'
                    />
                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={3}
                        src={img3}
                        alt='...'
                    />
                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={4}
                        src={img4}
                        alt='...'
                    />
                </MDBCarousel>
            </div>
            <div className="login-form d-flex flex-column align-items-center justify-content-center " style={{ position: "relative", marginTop: "20vh", zIndex: "2" }}>
                <p className="fs-1" style={{ color: "black" }}> Login</p>
                <form className='d-flex flex-column align-items-center justify-content-center' style={{ zIndex: "5", width: "30%" }} onSubmit={handleSubmit}>
                    <div className="mb-3 w-100">
                        <input
                            type="email"
                            className="form-control"
                            placeholder='Email Id'
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            onChange={e => setEmail(e.target.value)}
                            required />
                    </div>
                    <div className="mb-3 w-100">
                        <input type="password"
                            className="form-control"
                            placeholder='Password'
                            id="exampleInputPassword1"
                            onChange={e => setPassword(e.target.value)}
                            required />
                    </div>

                    <button type="submit" className="btn btn-primary w-75 ">Login</button>
                </form>
            </div>
        </>
    )
}
