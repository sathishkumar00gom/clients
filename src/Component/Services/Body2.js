import React, { useState, useEffect } from 'react'
import Carousel from 'react-grid-carousel'
import axios from 'axios'

export default function Body2() {
    const [state, setState] = useState([])



    const home = () => {



        axios.get("http://localhost:3003/gettours")
            .then((res) => { setstate(res.data) })
            .catch((err) => {
                console.log("tour", err)
            }

            )

        return (
            <Carousel cols={6} rows={1} gap={10} loop>

                {state && state.map((item) =>
                    <Carousel.Item>
                        {item.title}
                        {item.image}
                    </Carousel.Item>)}

            </Carousel>
        )
    }