import React, { useState } from "react"
import { Form } from "react-bootstrap";
import "./Login.css"
import axios from "axios";
import TokenService from "./Services/servicetoken";
import api from "instance"

const Login = () => {
    const [data, setData] = useState("")


    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios
            .post("http://localhost:3003/Login", data)
            .then((res) => {
                console.log(res, "signuppost")
                TokenService.setAccessToken(res.data.accessToken)
                TokenService.setRefreshToken(res.data.refreshToken)
            })
            .catch((err) => {
                console.log(err, "error")
            })
    }

    const authHeader = () => {
        const user = TokenService.getAccessToken()
        if (user) {
            return { 'x-access-token': user };
        } else {
            return {};
        }
    }
    const getallTours = async () => {
        try {
            return await api.get("/gettours", { headers: authHeader() }).then((res) => {
                return res.data
            })
                .catch((err) => {
                    console.log("INISDE THEN GETTOUR ==>", err.response.data.message)
                    return err;
                })
        }
        catch (e) {
            console.log("OUTSIDE CATCH GETTOUR===>", e)
        }
    }




    return (
        <>
            <div className="containers">
                <h1>
                    Login Form
                </h1>
                <Form >
                    <Form.Label className="p-1">
                        Email
                    </Form.Label>
                    <Form.Control type="text" placeholder="email" onChange={handleChange}
                        name="username" value={data.email}>

                    </Form.Control>

                    <Form.Label>
                        Password
                    </Form.Label>
                    <Form.Control type="password" placeholder="password" name="password" value={data.password} onChange={handleChange}  >

                    </Form.Control>
                    <button className="button" onClick={handleSubmit}>Submit</button>
                    <div className="signupusing">or signup using</div>
                    <div className="imgbig">
                        <img className="img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1200px-2021_Facebook_icon.svg.png" alt="facebook"></img>
                        <img className="img" src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png" alt="twitter"></img>
                        <img className="img" src="https://pbs.twimg.com/profile_images/1455185376876826625/s1AjSxph_400x400.jpg" alt="google"></img>
                    </div>
                    <div className="orsignupusing">or signup using</div>
                    <button className="button-2">SIGN UP</button>
                </Form>
            </div>
        </>
    )
}
export default Login;