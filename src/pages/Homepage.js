import CarouselBanner from "../components/Carousel"
import thumb from '../img/thumb.webp'
import pengujian from '../img/icon/pengujian.png'
import tarif from '../img/icon/tarif.png'
import steps from '../img/icon/steps.png'
import jenislayanan from '../img/icon/jenislayanan.png'
import example from '../img/blog/example.jpg'

const Homepage = ()=>{
    return(
        <div>
            <CarouselBanner />
            <div className="container py-5">

                <div className="row mt-5">
                    <div className="col-12 text-center">
                        <h5 className="text-blue">Layanan Kami</h5>
                        <h1 className=" fw-bold mt-2">Lab PUPR Tarakan Kota</h1>
                    </div>
                </div>

                <div className="row my-5 justify-content-center mb-5">

                    <div className="col-3">
                        <div className="service-card p-4">
                            <div className="icon-layanan p-2 mb-4 d-flex justify-content-center align-items-center">
                                <img src={jenislayanan} className="w-75"/>
                            </div>
                           <h5 className="fw-bold lh-base">Jenis Jenis Pelayanan Pengujian</h5>
                        </div>
                    </div>


                    <div className="col-3">
                        <div className="service-card p-4">
                            <div className="icon-layanan p-2 mb-4 d-flex justify-content-center align-items-center">
                                <img src={pengujian} className="w-75"/>
                            </div>
                           <h5 className="fw-bold lh-base">Pengajuan Uji Bahan Konstruksi</h5>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="service-card p-4">
                            <div className="icon-layanan p-2 mb-4 d-flex justify-content-center align-items-center">
                                <img src={tarif} className="w-75"/>
                            </div>
                           <h5 className="fw-bold lh-base">Tarif & Biaya Pengujian Bahan Konstruksi</h5>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="service-card p-4">
                            <div className="icon-layanan p-2 mb-4 d-flex justify-content-center align-items-center">
                                <img src={steps} className="w-75"/>
                            </div>
                           <h5 className="fw-bold lh-base">Mekanisme Penujian Bahan Konstruksi</h5>
                        </div>
                    </div>
                </div>
                
                <div className="row mt-5">
                    <div className="col-12">
                        <h5 className="text-blue">Lab PUPR Trakan Kota</h5>
                        <h1 className=" fw-bold mt-2">Tugas Pokok dan Fungsi</h1>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-12 mb-5">
                        <h5 className="text-blue">Lab PUPR Trakan Kota</h5>
                        <h1 className=" fw-bold mt-2">Program & Kegiatan Terkini</h1>
                    </div>

                    <div className="col-4">
                        <div className="service-card p-4">
                            <img src={example} className="ratio ratio-4x3 w-100 rounded-4" />
                            <h5 className="mt-3">sdrf</h5> 
                            <span>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus.  </span>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="service-card p-4">
                            <img src={example} className="ratio ratio-4x3 w-100 rounded-4" />
                            <h5 className="mt-3">sdrf</h5> 
                            <span>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus.  </span>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="service-card p-4">
                            <img src={example} className="ratio ratio-4x3 w-100 rounded-4" />
                            <h5 className="mt-3">sdrf</h5> 
                            <span>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus.  </span>
                        </div>
                    </div>

                    <div className="col-12 text-center">
                        <a href="" className="text-decoration-none mx-auto d-block mt-5 link">Lihat Lainnya...</a>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Homepage