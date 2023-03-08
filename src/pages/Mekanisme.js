import logo from '../img/tarakanlogo.png'
import bagan from '../img/bagan.PNG'
import keterangan from '../img/keterangan.PNG'
import form from '../img/icon/formicon.png'
import customservice from '../img/icon/customer-service.png'
import React from 'react';

const Mekanisme = ()=>{
    return(
        <div className="content-body-wrapper">
            <div className="container-fluid py-80">
                <div className="container">
                    <div className='row justify-content-center'>
                        <div className='col-md-8 order-1 mt-4'>
                            <NavTabs />
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                                    <MekanismeContent />
                                </div>
                                <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
                                    <ProsesContent />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 order-md-2'>
                            <div className='sticky-top nav-right'>
                                <div className="service-card p-4 p-4 " >
                                    <img src={form} alt="" className='mb-3' style={{width : "18%"}}/>
                                    <h5>
                                        Buat Pengajuan 
                                    </h5>
                                    <p>
                                    Pengujian UPT Lab Uji Bahan Konstruksi
                                    </p>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <span className='text-grey text-14'>Isi Form Disini </span> <i className="bi bi-arrow-right-short text-16"></i>
                                    </div>
                                </div>

                                <div className="service-card p-4 p-4 mt-3" >
                                    <img src={customservice} alt="" className='mb-3' style={{width : "18%"}}/>
                                    <h5>
                                        Jam OPrasional
                                    </h5>
                                    <div className='d-flex justify-content-between'>
                                        <p>Senin - Jum'at</p>
                                        <p >08:00 sd 20:00</p>
                                    </div>
                                    <div className='d-flex justify-content-between' style={{marginTop : "-12px"}}>
                                        <p>Sabtu</p>
                                        <p>08:00 sd 12:00</p>
                                    </div>
                                    
                                </div>

                            </div>
                        </div>


                        {/* <div className='col-lg-10 col-12 '>
                            <NavTabs />
                        </div>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                                <MekanismeContent />
                            </div>
                            <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
                                <ProsesContent />
                            </div>
                        </div> */}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

const NavTabs = ()=> {
    return (
        <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
                <button className="nav-link active py-3 px-2 px-md-5" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">MEKANISME</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link py-3 px-2 px-md-5" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">PROSES PELAYANAN</button>
            </li>
        </ul>
    );
}

const MekanismeContent = ()=>{
    return(
        <>
            {/* <div className='row justify-content-center'>
                <div className='col-lg-10 col-12'> */}
                    <div className="service-card p-4 d-flex flex-column flex-md-row gap-3 align-items-center" style={{ borderRadius : "0 0 16px 16px" }}>
                        <img src={logo} className="me-3" style={{width : "120px"}} alt="logo tarakan kota"/>
                        <div>
                            <h5 className="text-blue h6 text-center text-md-start">PUPR TARAKAN KOTA</h5>
                            <h4 className=" fw-bold mt-2 h5 text-center text-md-start">MEKANISME /TATA CARA PELAYANAN 
                            </h4>
                            <p className='text-14 text-center text-md-start'>Mekanisme /tata cara pelayanan jasa pengujian dan prosedur pungutan tarif retribusi jasa di UPT Laboratorium Uji Bahan Konstruksi adalah sebagai berikut :</p>
                            <div className="divider-35 mx-auto mx-md-0"></div>
                        </div>
                    </div>
                {/* </div>
            </div> */}

            {/* <div className='row justify-content-center'>
                <div className='col-lg-10 col-12'> */}
                    <div className="service-card p-4 mt-3">
                        <ul className='p-1 ps-md-3'>
                            <li className='text-14' style={{textAlign : "justify"}}><mark className="bg-lightblue fw-bold">Adanya surat permohonan tertulis</mark> orang pribadi atau badan usaha kepada UPT Laboratorium Uji Bahan Konstruksi Dinas Pekerjaan Umum dan Tata Ruang Kota Tarakan dengan permohonan pengujian /penyelidikan parameter yang akan diujikan. Surat permohonan dan contoh bahan /benda uji /sample yang akan diuji diterimakan melalui Loket 1, yaitu loket penerimaan surat dan contoh benda uji;</li>
                            <li className='mt-4 text-14'  style={{textAlign : "justify"}}>Setelah mendapatkan technical advice, selanjutnya pemohon <mark className="bg-lightblue fw-bold">mengisi blanko permohonan jenis pengujian </mark>yang akan diminta /diuji untuk mendapatkan persetujuan pemohon mengenai jenis parameter pengujian yang diminta dan standar ujinya serta besarnya biaya uji;</li>
                            <li className='mt-4 text-14'  style={{textAlign : "justify"}}><mark className="bg-lightblue fw-bold">Dibuatkan Surat Ketetapan Retribusi Daerah (SKRD)</mark> dari retrisbusi jasa jenis /parameter pengujian yang akan diujikan sesuai dengan besarnya tarif retribusi jasa yang harus dibayarkan lewat petugas kasir penerima. Selanjutnya petugas akan memberikan Tanda Bukti Pembayaran (TBP) yang syah kepada pemohon melalui Loket 2, yaitu loket pembayaran retribusi jasa pelayanan pengujian /penyelidikan bahan konstruksi;</li>
                            <li className='mt-4 text-14'  style={{textAlign : "justify"}}><mark className="bg-lightblue fw-bold">Jika pembayaran retribusi jasa belum bisa dibayar semua, maka minimal 50% sebagai uang muka.</mark> Sisanya harus dilunasi oleh pemohon selambat-lambatnya 15 hari sejak dikeluarkannya Surat Perintah Pengujian dari Kepala UPT Laboratorium Uji Bahan Konstruksi kepada petugas teknis yang akan melaksanakan pengujian bahan;</li>
                            <li className='mt-4 text-14'  style={{textAlign : "justify"}}><mark className="bg-lightblue fw-bold">Seluruh penerimaan pendapatan retribusi jasa</mark> berdasarkan Surat Ketetapan Retribusi Daerah (SKRD) dari retribusi jasa pelayanan pengujian /penyelidikan bahan konstruksi pada UPT Laboratorium Uji Bahan Konstruksi disetorkan ke kas daerah melalui Bank Pembangunan Daerah dengan Nomor Rekening x.x.x.xx.xxx;</li>
                            <li className='mt-4 text-14'  style={{textAlign : "justify"}}>Setelah proses dari angka 1 sampai dengan 4 diselesaikan, <mark className="bg-lightblue fw-bold">selanjutnya Kepala UPT Laboratorium Uji Bahan Konstruksi akan menerbitkan Surat Perintah Pengujian</mark> sebagai dasar untuk melaksanakan pekerjaan teknis pengujian bersama dengan contoh bahan /benda uji yang akan diuji diserahkan oleh petugas kepada Seksi Pengujian terkait untuk diproses uji dan dianalisis menjadi laporan hasil uji;</li>
                            <li className='mt-4 text-14'  style={{textAlign : "justify"}}>Biaya operasional pelayanan jasa pengujian masing-masing seksi pengujian dalam rangka melaksanakan kegiatan pengujian dibiayai oleh APBD pada DPA SKPD Dinas Pekerjaan Umum dan Tata Ruang Kota Tarakan pada tahun anggaran berjalan;</li>
                            <li className='mt-4 text-14'  style={{textAlign : "justify"}}>Kebutuhan biaya operasional seksi pengujian terkait dengan pekerjaan teknis pengujian antara lain bahan habis pakai, lembur, SPPD dan lain-lain akan diproses sesuai dengan kebutuhan dan alokasi biaya yang tersedia pada Anggaran Biaya Operasional dan Pemeliharaan (BOP)</li>
                            <li className='mt-4 text-14'  style={{textAlign : "justify"}}>Rencana kebutuhan biaya operasional seksi pengujian terkait dengan pelayanan jasa pengujian /penyelidikan yang dapat dimintakan panjar /melihat kondisi keuangan adalah uang lembur harian, makan lembur harian dan SPPD sesuai dengan Surat Perintah Pengujian dari Kepala UPT Laboratorium Uji Bahan Konstruksi untuk kebutuhan operasional yang lain /bahan laboratorium, bahan habis pakai ataupun hal-hal yang berkaitan dengan pengujian akan diakomodasi disimpan, diterima dan didistribusikan oleh satuan pemegang kas dan pemegang barang.</li>
                        </ul>
                        <p className='text-center mt-5 fw-bold'>Demikian mekanisme /tata cara pelayanan jasa pengujian /penyelidikan dan prosedur pengutan tarif retribusi jasa di UPT Laboratorium Uji Bahan Konstruksi agar semua pihak dapat memahami, mematuhi dan melaksanakan mekanisme, prosedur tersebut.</p>
                    </div>
                {/* </div>
            </div> */}
        </>
    )
}

const ProsesContent = ()=>{
    return(
        <>
            {/* <div className='row justify-content-center'>
                <div className='col-lg-10 col-12'> */}
                    <div className="service-card p-4 d-flex flex-column flex-md-row gap-3 align-items-center" style={{ borderRadius : "0 0 16px 16px" }}>
                        <img src={logo} className="me-3" style={{width : "120px"}} alt='Logo Tarakan Kota'/>
                        <div>
                            <h5 className="text-blue h6 text-center text-md-start">PUPR TARAKAN KOTA</h5>
                            <h4 className=" fw-bold mt-2 h5 text-center text-md-start">ALIR PROSES PELAYANAN PENGUJIAN
                            </h4>
                            <p className='text-14 text-center text-md-start'>ALIR PROSES PELAYANAN PENGUJIAN UPT LABORATORIUM UJI BAHAN KONSTRUKSI </p>
                            <div className="divider-35 mx-auto mx-md-0"></div>
                        </div>
                    </div>
                {/* </div>
            </div> */}

            {/* <div className='row justify-content-center '>
                <div className='col-lg-10 col-12'> */}
                    <div className="service-card p-4 mt-3">
                        <div className="position-relative">
                            <img src={bagan} className='w-100 text-center mx-auto' alt='Bagan'/>
                            <img src={keterangan} style={{width : "200px"}} alt='legend' className='text-center mx-auto position-absolute bottom-0 end-0 d-md-block d-none' />
                        </div>

                        <img src={keterangan} style={{width : "200px"}} alt="keterangan" className='text-center mx-auto d-md-none d-inline-block ' />
                        <ul className='mt-5 p-0 p-md-2'>
                            <h5 className="text-black-90"><mark className="bg-lightblue fw-bold">Langkah 1</mark></h5>
                            <li className='text-14' style={{listStyleType: 'none', textAlign : "justify"}}>Adanya surat permohonan disertai dengan bahan /sample /benda uji dari Pemohon /Pengguna jasa pelayanan pengujian kepada UPT. Laboratorium Uji Bahan Konstruksi masuk melalui loket 1 penerimaan surat permohonan dan penerimaan bahan /sample /benda uji, sekaligus dilakukan persetujuan jenis parameter uji, standar uji, dan pembayaran retribusi daerah sesuai dengan tarif kepada petugas di loket 1;</li>
                            <h5 className="text-black-90"><mark className="mt-4 d-inline-block bg-lightblue fw-bold">Langkah 2</mark></h5>
                            <li className='mt-2 text-14' style={{listStyleType: 'none', textAlign : "justify"}}>Surat permohonan, surat persetujuan jenis parameter uji serta persetujuan pembiayaan retribusi daerah disampaikan kepada Kepala UPT. Laboratorium Uji Bahan Konstruksi untuk dimintakan persetujuan guna mengeluarkan Surat Ketetapan Retribusi Daerah (SKRD) dan Surat Perintah kepada Koordinator Pengujian serta Surat Perintah Pengujian (SPP) kepada Analis /Teknisi pengujian terkait;</li>
                            <h5 className="text-black-90"><mark className="mt-4 d-inline-block bg-lightblue fw-bold">Langkah 3</mark></h5>
                            <li className='mt-2 text-14' style={{listStyleType: 'none', textAlign : "justify"}}>Kepala UPT mengeluarkan Surat Ketetapan Retribusi Daerah (SKRD) dan Surat Perintah kepada Koordinator Pengujian, serta Surat Perintah Pengujian kepada analis /teknisi, melalui petugas administrasi umum untuk didistribusikan kepada yang bersangkutan;</li>
                            <h5 className="text-black-90"><mark className="mt-4 d-inline-block bg-lightblue fw-bold">Langkah 4</mark></h5>
                            <li className='mt-2 text-14' style={{listStyleType: 'none', textAlign : "justify"}}>Petugas kasir memproses penyetoran penerimaan uang ke kas daerah melalui Bank Pembangunan Daerah nomor rekening : x.x.x.xx.xxx, dan petugas administrasi umum menyampaikan Surat Perintah kepada Koordinator Pengujian serta surat Perintah Pengujian kepada Analis /Teknisi pengujian terkait;</li>
                            <h5 className="text-black-90"><mark className="mt-4 d-inline-block bg-lightblue fw-bold">Langkah 5</mark></h5>
                            <li className='mt-2 text-14' style={{listStyleType: 'none', textAlign : "justify"}}>Koordinator Pengujian meneruskan Surat Perintah Pengujian kepada Analis /Teknisi pengujian terkait untuk dilakukan persiapan-persiapan dan proses pengujian lebih lanjut;</li>
                            <h5 className="text-black-90"><mark className="mt-4 d-inline-block bg-lightblue fw-bold">Langkah 6</mark></h5>
                            <li className='mt-2 text-14' style={{listStyleType: 'none', textAlign : "justify"}}>Analis /Teknisi pengujian terkait, setelah menerima Surat Perintah Pengujian, juga menerima bahan /benda uji /sample dari Petugas penerima sample sebagai bahan /benda uji /sample yang diterima dari Pemohon /Pengguna jasa untuk dilakukan pengujian sesuai dengan parameter uji yang diminta, berdasarkan standar uji yang disetujui bersama;</li>
                            <h5 className="text-black-90"><mark className="mt-4 d-inline-block bg-lightblue fw-bold">Langkah 7</mark></h5>
                            <li className='mt-2 text-14' style={{listStyleType: 'none', textAlign : "justify"}}>Koordinator Pengujian menerima hasil pengujian dari analis /teknisi sebagai bahan untuk menyusun Laporan Hasil Pengujian yang kemudian ditandatangankan kepada Koordinator Pengujian untuk diterbitkan Laporan Pengujian dari pengujian yang bersangkutan;</li>
                            <h5 className="text-black-90"><mark className="mt-4 d-inline-block bg-lightblue fw-bold">Langkah 8</mark></h5>
                            <li className='mt-2 text-14' style={{listStyleType: 'none', textAlign : "justify"}}>Koordinator Pengujian menyampaikan Laporan Hasil Pengujian dari pengujian terkait kepada Kepala UPT untuk diperiksa dan diketahui;</li>
                            <h5 className="text-black-90"><mark className="mt-4 d-inline-block bg-lightblue fw-bold">Langkah 9</mark></h5>
                            <li className='mt-2 text-14' style={{listStyleType: 'none', textAlign : "justify"}}>Kepala UPT melakukan pemeriksaan dan verifikasi teknis terhadap Laporan Hasil Pengujian dari Koordinator Pengujian sebelum menandatangani surat pengantar dari Laporan Hasil Pengujian tersebut;</li>
                            <h5 className="text-black-90"><mark className="mt-4 d-inline-block bg-lightblue fw-bold">Langkah 10</mark></h5>
                            <li className='mt-2 text-14' style={{listStyleType: 'none', textAlign : "justify"}}>Kepala UPT memerintahkan kepada Kepala Sub Bagian TU untuk memproses Surat Pengantar Laporan Hasil Pengujian sebagai produk akhir pelayanan jasa pengujian pada UPT. Laboratorium Uji Bahan Konstruksi;</li>
                            <h5 className="text-black-90"><mark className="mt-4 d-inline-block bg-lightblue fw-bold">Langkah 11</mark></h5>
                            <li className='mt-2 text-14' style={{listStyleType: 'none', textAlign : "justify"}}>Kepala Sub Bagian TU sebelum memproses Surat pengantar Kepala UPT melakukan klarifikasi administrasi kepada Koordinator Pengujian guna memperoleh informasi mengenai pelaksanaan proses pengujian yang sudah dilakukan;</li>
                            <h5 className="text-black-90"><mark className="mt-4 d-inline-block bg-lightblue fw-bold">Langkah 12</mark></h5>
                            <li className='mt-2 text-14' style={{listStyleType: 'none', textAlign : "justify"}}>Kepala Sub Bagian TU melalui Petugas Administrasi Umum meyalurkan hasil /produk akhir pelayanan jasa pengujian kepada pemohon /pengguna jasa, setelah pemohon /pengguna jasa melunasi semua pembayaran yang sudah ditetapkan.</li>
                        </ul>
                    </div>
                {/* </div>
            </div> */}
        </>
    )
}

export default Mekanisme