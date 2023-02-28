import CarouselBanner from "../components/Carousel"
import thumb from '../img/thumb.webp'
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
                    <div className="col-4">
                        <div className="service-card p-4">
                           <h5 className="fw-bold">
                            Pengajuan Uji Bahan Konstruksi
                           </h5>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="service-card p-4">
                            Tarif & Biaya
                        </div>
                    </div>
                </div>

                <div className="row py-5">
                    <div className="col-12">
                        <h5>Layanan Kami</h5>
                        <h1 className=" fw-bold mt-2">LAB PUPR TARAKAN KOTA</h1>
                    </div>
                    <div className="col-4">
                        <div className="service-card p-4 mt-4">
                            <img src={thumb} className="w-100 rounded-4" />
                            <h5 className="mt-3">sdrf</h5> 
                            <span>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus.  </span>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="service-card p-4 mt-4">
                            <img src={thumb} className="w-100 rounded-4" />
                            <h5 className="mt-3">sdrf</h5> 
                            <span>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus.  </span>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="service-card p-4 mt-4">
                            <img src={thumb} className="w-100 rounded-4" />
                            <h5 className="mt-3">sdrf</h5> 
                            <span>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus.  </span>
                        </div>
                    </div>
                </div>

                <div className="row py-5">
                    <div className="col-12 text-center">
                        <h5>Layanan Kami</h5>
                        <h1 className=" fw-bold mt-2">Pengajuan Tes LAB</h1>
                    </div>
                </div>
                

            </div>

        </div>
    )
}

export default Homepage