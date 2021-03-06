import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./Registration.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registration = () => {
    const navigate = useNavigate()
    const [datas, setDatas] = useState("")


    const handleChange = (e) => {
        setDatas({
            ...datas,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("dae", datas)
        await axios
            .post("http://localhost:3026/signup", datas)
            .then((res) => {
                console.log(res, "signuppost")
            })
            .catch((err) => {
                console.log(err, "error")
            })
        navigate("/login")

    }
    return (
        <>
            <div className="containered">
                <h1>
                    Registration Form
                </h1>
                <Form>
                    <Form.Label className="p-1">
                        Username
                    </Form.Label>
                    <Form.Control type="text" placeholder="username" onChange={handleChange} value={datas.Username} name="username">

                    </Form.Control>

                    <Form.Label className="p-1">
                        Email
                    </Form.Label>
                    <Form.Control type="text" placeholder="email" onChange={handleChange} value={datas.Email} name="email">

                    </Form.Control>

                    <Form.Label>
                        Password
                    </Form.Label>
                    <Form.Control type="password" placeholder="password" onChange={handleChange} value={datas.password} name="password" >

                    </Form.Control>
                    <button onClick={handleSubmit} className="button" >Submit</button>

                </Form>
            </div>
        </>)
}
export default Registration