const Contact = ()=>{
    return(
        <div className="content-body-wrapper py-80 d-flex align-items-center" >
            <div className="container ">
                <div className="row mt-3 ">
                    <div className="col-12 text-center mb-md-5 mb-2">
                        <h5 className="text-blue">Trakan Kota</h5>
                        <h1 className=" fw-bold mt-2">Kantak & Social Media</h1>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-3">
                        <div className="service-card contact-social p-4 d-flex align-items-center gap-3">
                            <i className="bi bi-instagram"></i>
                            <span>@Tarakan Kota</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-3">
                        <div className="service-card contact-social p-4 d-flex align-items-center gap-3">
                            <i className="bi bi-facebook"></i>
                            <span>Tarakan Kota</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-3">
                        <div className="service-card contact-social p-4 d-flex align-items-center gap-3">
                            <i className="bi bi-whatsapp"></i>
                            <span>0881453925</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-3">
                        <div className="service-card contact-social p-4 d-flex align-items-center gap-3">
                            <i className="bi bi-telephone"></i>
                            <span>0222222</span>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center text-center mt-5">
                    <div className="col-md-6">
                        <h5 className="lh-lg">Jl. Pepaya No.51, Kp. Empat, Kec. Tarakan Tim., Kota Tarakan, Kalimantan Utara</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact