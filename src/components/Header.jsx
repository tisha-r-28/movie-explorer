import React from 'react';

function Header() {
    return (
        <>
            <section className="container-fluid m-0 p-0 overflow-hidden">
                <div className="row">
                    <div className="col-12">
                        <div id="carouselExample" className="carousel slide">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://s2.dmcdn.net/v/V6Y0j1aku7ngeETX2/x1080" className="d-block w-100" alt="Some movie posters" />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://s2.dmcdn.net/v/V6Y0j1aku7ngeETX2/x1080" className="d-block w-100" alt="Some movie posters" />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://s2.dmcdn.net/v/V6Y0j1aku7ngeETX2/x1080" className="d-block w-100" alt="Some movie posters" />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header;
