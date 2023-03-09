import CarouselBanner from "../components/Carousel"
import pengujian from '../img/icon/pengujian.png'
import tarif from '../img/icon/tarif.png'
import steps from '../img/icon/steps.png'
import jenislayanan from '../img/icon/jenislayanan.png'
// import example from '../img/blog/example.jpg'
import accsent1 from '../img/accsent.jpg'
import accsent3 from  '../img/acc.png'
import accsent4 from  '../img/acc4.png'
import CardGaleri from "../components/CardGaleri"
import React  from 'react';
import {useContext} from 'react'
import { Provider, Contex } from '../components/Context';
import { useParams, useNavigate } from 'react-router-dom';

const Homepage = ()=>{
    return(
        <Provider>
            <HomepageProvider />
        </Provider>
    )
}

const HomepageProvider = ()=>{
    const {blog, setBlog} = useContext(Contex)
    const navigate = useNavigate()
    return(
        <div className="content-body-wrapper">
            <CarouselBanner />
            <div className="container py-5">

                <div className="row mt-3 mt-lg-5">
                    <div className="col-12 text-center">
                        <h5 className="text-blue">Layanan Kami</h5>
                        <h1 className=" fw-bold mt-2">Lab PUPR Tarakan Kota</h1>
                    </div>
                </div>

                <div className="row my-2 my-md-5 justify-content-center mb-5">

                    <div className="col-md-4 col-lg-3 col-6 mt-4 mt-md-0" onClick={()=>navigate('/pelayanan')}>
                        <div className="service-card p-4">
                            <div className="icon-layanan text-center mx-auto p-2 mb-4 d-flex justify-content-center align-items-center">
                                <img alt="" src={jenislayanan} className="w-75"/>
                            </div>
                           <h6 className="fw-normal lh-base text-blue text-center">Jenis Jenis Pengujian</h6>
                        </div>
                    </div>


                    <div className="col-md-4 col-lg-3 col-6 mt-4 mt-md-0" onClick={()=>navigate('/formpengajuan')}>
                        <div className="service-card p-4">
                            <div className="icon-layanan text-center mx-auto p-2 mb-4 d-flex justify-content-center align-items-center">
                                <img alt="" src={pengujian} className="w-75"/>
                            </div>
                           <h6 className="fw-normal lh-base text-blue text-center">Pengajuan Uji Bahan Konstruksi</h6>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-3 col-6 mt-4 mt-md-0" onClick={()=>navigate('/pelayanan')}>
                        <div className="service-card p-4">
                            <div className="icon-layanan text-center mx-auto p-2 mb-4 d-flex justify-content-center align-items-center">
                                <img alt="" src={tarif} className="w-75"/>
                            </div>
                           <h6 className="fw-normal lh-base text-blue text-center">Tarif & Biaya Pengujian</h6>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-3 col-6 mt-4 mt-md-0" onClick={()=>navigate('/mekanisme')}>
                        <div className="service-card p-4">
                            <div className="icon-layanan text-center mx-auto p-2 mb-4 d-flex justify-content-center align-items-center">
                                <img alt="" src={steps} className="w-75"/>
                            </div>
                           <h6 className="fw-normal lh-base text-blue text-center">Mekanisme Penujian Bahan</h6>
                        </div>
                    </div>
                </div>
  
                {/* Fungsi */}
                <div className="row align-items-center pt-lg-2 pt-4">
                    <div className="col-lg-6 order-lg-2 order-2">
                        <h5 className="text-blue">Fungsi</h5>
                        <h1 className=" fw-bold mt-2">Lab PUPR Trakan Kota</h1>
                        <div className="divider"></div>
                        <div className="accsent d-lg-none d-block">
                            <img alt="" src={accsent1} className="w-100 my-4"/>
                        </div>
                        <p className="text-black-90 mt-4 fungsi-title">UPT. Laboratorium Uji Bahan Konstruksi mempunyai fungsi 
                            menunjang pelaksanaan tugas dinas untuk kepentingan proses
                                pengendalian dalam rangka mewujudkan “SISTEM MANAJEMEN MUTU”.
                        </p>
                    </div>
                    <div className="col-lg-6 py-lg-5 mt-md-4 mt-2 mb-2 px-4 order-lg-3 order-1 d-none d-lg-block">
                        <div className="accsent">
                            <img alt="" src={accsent1} className="w-100"/>
                        </div>
                    </div>
                </div>

                {/* Tugas Pokok */}
                <div className="row align-items-center mt-5 py-5">
                    <div className="col-12">
                        <h5 className="text-blue text-center">Tugas Pokok</h5>
                        <h1 className=" fw-bold mt-2 text-center">Lab PUPR Trakan Kota</h1>
                        <div className="divider mx-auto"></div>
                        <div className="accsent2 text-center ">
                            <img alt="" src={accsent4} className="w-100 mt-3 d-block d-md-none"/>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center align-items-center">
                    <div className="col-md-4 tugaspokok">
                        <ul className="text-md-end text-start left">
                            <li className="fungsi-title"><mark className="bg-lightblue">Memberikan bantuan teknis </mark> dalam kegiatan pengawasan dan pengendalian agar produk pembangunan bermutu;</li>
                            <li className="fungsi-title"><mark className="bg-lightblue">Melaksanakan pelayanan jasa</mark> pengujian mutu bahan konstruksi tanah, agregat, beton, dan aspal</li>
                        </ul>
                    </div>
                    <div className="col-md-4 d-md-block d-none">
                        <div className="accsent2 text-center ">
                            <img alt="" src={accsent3} className="w-75"/>
                        </div>
                    </div>
                    <div className="col-md-4 tugaspokok">
                        <ul>
                            <li className="fungsi-title"><mark className="bg-lightblue">Melaksanakan pengkajian dan penerapan teknologi</mark> dibidang bahan konstruksi;</li>
                            <li className="fungsi-title"><mark className="bg-lightblue">Menyiapkan dan memelihara prasarana dan sarana laboratorium</mark> untuk menunjang proses pelayanan jasa uji, pengkajian dan penerapan teknologi;</li>
                            <li className="fungsi-title"><mark className="bg-lightblue">Melaksanakan urusan ketatausahaan.</mark></li>
                        </ul>
                    </div>
                </div>
                

                <div className="row mt-5 py-80">
                    <div className="col-12 mb-5">
                        <h5 className="text-blue">Lab PUPR Trakan Kota</h5>
                        <h1 className=" fw-bold mt-2">Program & Kegiatan Terkini</h1>
                    </div>

                    { blog.map((item, index)=>{
                        if( index <= 3 ){
                            return(
                                <CardGaleri key={item.id} data={item} />
                            )
                        }else{
                            return
                        }
                    }) }

                    <div className="col-12 text-center">
                        <span onClick={()=>navigate('/galeri')} className="text-decoration-none mx-auto d-block mt-5 link text-blue" style={{cursor : "pointer"}}>Lihat Lainnya...</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage