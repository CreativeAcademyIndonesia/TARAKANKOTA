import VISI from '../img/visi.svg'
import MISI from '../img/misi.svg'
import kepaladinas from '../img/struktur/kepala.png'
import struktur from '../img/struktur/struktur.png'
import React from 'react';

const ProfilePage = ()=>{
    return(
        <div className="content-body-wrapper">
            <div className="container-fluid py-80 bg-darkblue">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12 text-center ">
                            <h5 className="text-blue">Tentang Kami</h5>
                            <h1 className=" fw-bold mt-2 text-white">Lab PUPR Tarakan Kota</h1>
                            <div className="divider mx-auto"></div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 text-center">
                                <p className="text-16 text-md-justify-center text-white">Pengujian Bahan Konstruksi adalah suatu rangkaian
                                kegiatan pelayanan yang dimulai dan pengujian kualitas
                                bah an dan atau material yang digunakan untuk membuat
                                komponen atau elemen bangunan atau konstruksi sesuai
                                dengan spesifikasi teknis sampai dengan penyampaian hasil
                                atau pembuatan sertifikat hasil uji atas kualitas bahan dan
                                atau material yang diuji.
                                </p>

                                <p className="text-16  text-md-justify-center text-white">
                                Laboratorium Uji Bahan Konstruksi adalah proses pengujian
                                terhadap sampel material yang menggunakan alat-alat
                                pengukuran yang dilakukan di dalam laboratorium.
                                </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Visi Misi */}
            <div className="container-fluid py-60">
                <div className="container">
                    <div className="row align-items-center pt-lg-2 pt-4">
                        <div className="col-lg-6 order-lg-2 order-2">
                            <h5 className="text-blue text-center text-md-start">Visi & Misi Lab PUPR Trakan Kota</h5>
                            <h1 className=" fw-bold mt-2 text-center text-md-start">VISI</h1>
                            <div className="divider mx-auto mx-md-0"></div>
                            <div className="accsent mx-auto text-center d-lg-none d-block">
                                <img alt='' src={VISI} className="w-lg-50 w-75 my-4"/>
                            </div>
                            <p className="text-black-90 mt-4 fungsi-title text-md-justify-start">Terwujudnya UPT Laboratorium Uji Bahan Konstruksi yang produktif dan bermanfaat membantu pemerintah dalam melaksanakan tugas pembangunan yang tepat mutu, tepat waktu, dan tepat biaya serta meningkatkan Pendapat Asli Daerah (PAD) Kota Tarakan.
                            </p>
                        </div>
                        <div className="col-lg-6 py-lg-5 mt-md-4 mt-2 mb-2 px-4 order-lg-3 order-1 d-none d-lg-block">
                            <div className="accsent mx-auto text-center">
                                <img alt='' src={VISI} className="w-lg-50 w-75"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid bg-darkblue">
                <div className="container pb-5">
                    <div className="row align-items-center pt-lg-2 pt-4">
                        <div className="col-lg-6 py-lg-5 mt-md-4 mt-2 mb-2 px-4 d-none d-lg-block">
                            <div className="accsent mx-auto text-center">
                                <img alt='' src={MISI} className="w-75"/>
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-2">
                            <h5 className="text-blue text-center text-md-start">Visi & Misi Lab PUPR Trakan Kota</h5>
                            <h1 className=" fw-bold mt-2 text-center text-md-start text-white">MISI</h1>
                            <div className="divider mx-auto mx-md-0"></div>
                            <div className="accsent mx-auto text-center d-lg-none d-block">
                                <img alt='' src={MISI} className="w-75 my-4"/>
                            </div>
                            <p className="text-black-90 mt-4 fungsi-title text-md-justify-start text-white">
                            Untuk melaksanakan fungsi tersebut, UPT. Laboratorium Uji Bahan Konstruksi mempunyai tugas sebagai berikut :
                            </p>
                            <ul className='text-white'>
                                <li>Memberikan bantuan teknis dalam kegiatan pengawasan dan pengendalian agar produk pembangunan bermutu;</li>
                                <li>Melaksanakan pelayanan jasa pengujian mutu bahan konstruksi tanah, agregat, beton, dan aspal</li>
                                <li>Melaksanakan pengkajian dan penerapan teknologi dibidang bahan konstruksi;</li>
                                <li>Menyiapkan dan memelihara prasarana dan sarana laboratorium untuk menunjang proses pelayanan jasa uji, pengkajian dan penerapan teknologi;</li>
                                <li>Melaksanakan urusan ketatausahaan.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid py-80 bg-white">
                <div className="container">
                    <div className="row mb-5 justify-content-center">
                        <div className="col-lg-6 col-12 text-center">
                            <img alt='' src={kepaladinas} className="rounded-circle w-50 mb-5"/>
                            <h5 className="text-blue">Kepala Dinas</h5>
                            <h1 className=" fw-bold mt-2">FANDARIANSYAH, S.T.,M.T</h1>
                            <h5 className="text-blue">NIP. 19710508 199803 1 009</h5>
                            {/* <div className="divider mx-auto"></div> */}
                        </div>
                    </div>

                    <div className="row mb-5 justify-content-center">
                        <div className="col-12 text-center">
                            <h4 className="text-blue">Struktur Organisasi</h4>
                            <div className="divider mx-auto"></div>
                        </div>
                        <div className='col-12 text-center'>
                            <img alt='' src={struktur} className="w-100 mb-5"/>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        
    )
}

export default ProfilePage