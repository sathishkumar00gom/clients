import React, { useState } from "react"
import { Form } from "react-bootstrap";
import "./Login.css"

const Login = () => {
    const [data, setData] = useState("")
    console.log("data", data)

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
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
                    <button className="button" >Submit</button>
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