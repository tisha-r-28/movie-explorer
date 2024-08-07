import React from 'react'

function Footer() {
    return (
        <>
            <footer className="container-fluid mt-5" style={{backgroundColor : "#040404"}}>
                <div className="row">
                    <div className="col-12">
                        <div className="card text-center text-white" style={{backgroundColor : "#040404"}}>
                            <div className="card-header">
                                Featured
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <button className="btn btn-primary">Go somewhere</button>
                            </div>
                            <div className="card-footer text-white">
                                2 days ago
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;
