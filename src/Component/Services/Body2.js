import React, { useState, useEffect } from 'react'
import Carousel from 'react-grid-carousel'
import axios from 'axios'
import TokenService from "./servicetoken"
import Body3 from './Body3'



export default function Body2() {
    const [state, setState] = useState([])
    let datas = state.data?.Data
    console.log("str==>", datas)



    useEffect(() => {
        axios.get("http://localhost:3026/Home", { headers: { "x-access-token": TokenService.getAccessToken() } })
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
        <>
            <section style={{ display: "flex", padding: "1rem" }}>
                <Carousel cols={6} rows={1} gap={10} loop>
                    <Carousel.Item>
                        <img width="100%" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1903/1231903-v-4cbff0394620" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6011/1236011-v-b900d7045471" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5211/1165211-v-7ac0f6d12a5d" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3825/1163825-v-425dd8e7501a" />
                    </Carousel.Item>
                    {datas?.map((item) => {
                        console.log("items--=>", item)
                        return (

                            < Carousel.Item >

                                <img src={item.image} style={{ width: "14.6rem", padding: "5px" }} alt="" />
                            </Carousel.Item>

                        )


                    })}


                </Carousel >



            </section>
            <Body3 />
            <Body3 />
            <Body3 />

        </>
    )
}
