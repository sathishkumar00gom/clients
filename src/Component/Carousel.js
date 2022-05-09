import React from 'react'
import Body from './Body'

export default function Carousel() {
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5633/1215633-h-e8a786bd9f4d" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1483/1191483-h-2663b248a285" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4836/1234836-h-6518b3972c6a" alt="Third slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8773/1028773-h-48170a73363e" alt="Third slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2728/1122728-h-bf0246e20e6d" alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <Body />
        </>
    )
}
