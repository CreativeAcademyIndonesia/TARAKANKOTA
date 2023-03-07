import CardGaleri from '../components/CardGaleri'

const Galeri = ()=>{
    return(
        <div className="content-body-wrapper">
            <div className="container">
                <div className="row mt-5 py-80">
                    <div className="col-12 mb-5">
                        <h5 className="text-blue">Lab PUPR Trakan Kota</h5>
                        <h1 className=" fw-bold mt-2">Program & Kegiatan Terkini</h1>
                    </div>

                    <CardGaleri />
                    <CardGaleri />
                    <CardGaleri />
                    <CardGaleri />
                    <CardGaleri />
                    <CardGaleri />

                    <div className="col-12 text-center">
                        <a href="/home" className="text-decoration-none mx-auto d-block mt-5 link">Lihat Lainnya...</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Galeri