import React, { useState, useEffect } from 'react'
import Carousel from 'react-grid-carousel'
import axios from 'axios'
import TokenService from "./servicetoken"


export default function Body2() {
    const [state, setState] = useState([])
    let datas = state.data?.Data
    console.log("str==>", datas)



    useEffect(() => {
        axios.get("http://localhost:3024/Home", { headers: { "x-access-token": TokenService.getAccessToken() } })
            .then((res) => {
                console.log("ress", res)
                setState(res.data)

            })
            .catch((err) => {
                console.log("INISDE THEN GETTOUR ==>", err.response.data)
                return err
            })
    }, [])




    return (
        <section style={{ display: "flex" }}>

            {datas?.map((item) => {
                console.log("items--=>", item)
                return (
                    <Carousel col={6} gap={10} loop>
                        < Carousel.Item >
                            <div>{item.title}</div>
                            <img src={item.image} alt="" />
                        </Carousel.Item>
                    </Carousel >
                )
            }

            )}



        </section>
    )
}
