import React from 'react'
import Carousel from './Carousel'

export default function Home() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <img src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" alt="image" />
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="#" style={{ color: "white" }}>Tv <span className="sr-only" >(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{ color: "white" }}>Movies</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" style={{ color: "white" }}>Sports</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" style={{ color: "white" }}>Disney+</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                        <div className="nav-link p-3" type="button" href="#" style={{ color: "white" }}>Login</div>
                    </form>
                </div>
            </nav >
            <Carousel />
        </>
    )
}
