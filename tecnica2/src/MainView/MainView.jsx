import React from "react";
import "./MainView.css"; // Asegúrate de que la ruta sea correcta

function MainView() {
    return (
        <div className="container-fluid text-center" style={{ height: '93vh', padding: '0' }}>
            <div className="row g-0" style={{ height: '96%' }}>
                <div className="col-sm-12 col-md-6" style={{ backgroundColor: '#032A41', height: '96%' }}>
                    <div className="">
                        <div className="card-body " style={{ marginTop: '12%' }}>
                            <div className="d-flex">
                                <button style={{ color: 'white', margin: "2%", marginLeft: "15%" }} className="custom-button4 text" type="submit"> Welcome to Businezz X</button>
                            </div>

                            <h1 className="card-title" style={{ textAlign: 'left', color: 'white', marginLeft: "15%" }}>
                                Join us in growing <br /> your <span className="span2">business.</span>
                            </h1>
                        </div>
                        <hr style={{ borderColor: '#00bfff', borderWidth: '1px', marginLeft: "15%", marginRight:"15%", marginTop:"18%"}} />
                        <div className="card-body">
                            <h4 className="card-title mt-2" style={{ textAlign: 'left', color: 'white', marginLeft: "15%", }}>
                                Elevate your business with Businezz X, a<br />
                                 professional Webflow template.
                            </h4>
                            <div className="d-flex">
                                <button style={{ color: 'white', margin: "2%", marginLeft: "15%" }} className="custom-button text" type="submit">Contact us</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6" style={{ position: 'relative', padding: '0', height: '96%' }}>
                    <div className="background-image">
                        <img
                            src="https://images.unsplash.com/photo-1557113166-6bf8102e535b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9maWNpbmFzfGVufDB8fDB8fHww"
                            alt="Background"
                        />
                    </div>
                    {/* Form container */}
                    <div
                        className="form-container"
                    >
                        {/* Button on the top */}
                        <div style={{ textAlign: 'left' }}>
                            <button className="custom-button" type="submit">
                                Book your free consultation
                            </button>
                        </div>

                        {/* Form content */}
                        <h3 style={{ marginTop: '20px', color: '#032A41', textAlign: 'left' }}>Get a free consultation</h3>

                        <form style={{ marginTop: '20px' }}>
                            <div className="row">
                                <div className="col-sm-12 col-md-6 mb-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        placeholder="Name"
                                        required
                                    />
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <input
                                        type="email"
                                        className="form-control text"
                                        id="email"
                                        placeholder="Contact@email.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mt-3">
                                <textarea
                                    className="form-control"
                                    id="message"
                                    rows="3"
                                    placeholder="Pease type your message here..."
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="custom-button2"
                                style={{ marginTop: '20px' }}
                            >
                                Get in Touch
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainView;
