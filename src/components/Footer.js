import React  from 'react';

const Footer = ()=>{
    return(
        <div className="footer-dark">
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-3 item">
                            <h3>INFORMATION</h3>
                            <ul>
                                <li><a href="/">Jenis Jenis Layanan</a></li>
                                <li><a href="/">Pengajuan Uji Lab</a></li>
                                <li><a href="/">Mekanisme</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3 item">
                            <h3>ABOUT</h3>
                            <ul>
                                <li><a href="/">Visi Misi</a></li>
                                <li><a href="/">Kepala Dinas</a></li>
                                <li><a href="/">Struktur Organisasi</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 item text">
                            <h3>LAB PUPR TARAKAN KOTA</h3>
                            <p>Jl. Pepaya No.51, Kp. Empat, Kec. Tarakan Tim., Kota Tarakan, Kalimantan Utara</p>
                        </div>
                        <div className="col item social">
                            <a href="/"><i className="bi bi-whatsapp"></i></a>
                            <a href="/"><i className="bi bi-twitter"></i></a>
                            <a href="/"><i className="bi bi-facebook"></i></a>
                            <a href="/"><i className="bi bi-instagram"></i></a>
                            </div>
                    </div>
                    <p className="copyright">Company Name © 2023</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer