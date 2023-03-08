import axios from 'axios'
import { useState } from 'react'
import customservice from '../img/icon/customer-service.png'
import process from '../img/icon/process.png'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'
import React from 'react';

const FormPengajuan = ()=>{
    const navigate = useNavigate()
    const [ no, setNo ] = useState('')
    const [ lampiran, setLampiran ] = useState('')
    const [ perihal, setPerihal ] = useState('')
    const [ nama, setNama ] = useState('')
    const [ alamat, setAlamat ] = useState('')
    const [ jabatan, setJabatan ] = useState('')
    const [ instansi, setInstansi ] = useState('')
    const [ telp, setTelp ] = useState('')
    const [ kegiatan, setKegiatan ] = useState('')
    const [ paketkegiatan, setPaketkegiatan ] = useState('')
    const [ lokasi, setLokasi ] = useState('')
    const [ pernyataan, setPernyataan ] = useState('')
    const [ tanggal, setTanggal ] = useState('')
    const [ ttd, setTTd ] = useState('')


    const loadImage = (e) => {
        const image = e.target.files[0];
        setTTd(image);
    };

    const handSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", ttd);
        const con = {
            no,
            lampiran,
            perihal,
            nama,
            alamat,
            jabatan,
            instansi,
            telp,
            kegiatan,
            paketkegiatan,
            lokasi,
            pernyataan,
            tanggal,
            ttd
        }
        formData.append("data", JSON.stringify(con));
        try {
            await axios.post("http://localhost:5000/upload/pengajuan", formData, {
            headers: {
                "Content-type": "multipart/form-data",
            },
        }).then((response) => {
            swal({
                title: "Pengajuan Disimpan",
                text: "Pengajuan Uji Lab Bahan Konstruksi Terlah tersimpan, Silahkan kirim Whatsapp untuk Konfirmasi",
                icon: "success",
                button: 'Kirim Via Whatapp',
                })
                .then((willSend) => {
                    if (willSend) {
                        window.location.replace(`https://api.whatsapp.com/send/?phone=088145333925&text=Hallo saya ${nama} jabatan ${jabatan} mohon pengajuan uji lab dengan No Lampiran ${lampiran}`);
                        setNo('')
                        setLampiran('')
                        setPerihal('')
                        setNama('')
                        setAlamat('')
                        setJabatan('')
                        setInstansi('')
                        setTelp('')
                        setKegiatan('')
                        setPaketkegiatan('')
                        setLokasi('')
                        setPernyataan('')
                        setTanggal('')
                        setTTd('')
                }
            });
        });
            navigate("/formpengajuan");
        } catch (error) {
            console.log(error);
        }
    };

    return(
        <div className="content-body-wrapper">
            <div className="container-fluid py-60">
                <div className="container">
                    <div className='row justify-content-center'>
                        <div className='col-md-8 order-1'>
                            <div className="service-card p-4 ">
                                <h5 className="text-blue">Form Pengajuan</h5>
                                <h1 className=" fw-bold mt-2">Uji Bahan Konstruksi</h1>
                                <form className='mt-4' onSubmit={(e)=>handSubmit(e)}>
                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <div className="form-floating mb-3">
                                                <input type="text" className="form-control" id="floatingno" placeholder="No Pengajuan" value={no} onChange={(e)=> setNo(e.target.value)} />
                                                <label htmlFor="floatingno">No Pengajuan</label>
                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className="form-floating mb-3">
                                                <input type="text" className="form-control" id="floatinglampiran" placeholder="Lampiran" value={lampiran} onChange={(e)=> setLampiran(e.target.value)}/>
                                                <label htmlFor="floatinglampiran">Lampiran</label>
                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className="form-floating mb-3">
                                                <input type="text" className="form-control" id="floatingperihal" placeholder="Perihal" value={perihal} onChange={(e)=> setPerihal(e.target.value)} />
                                                <label htmlFor="floatingperihal">Perihal</label>
                                            </div>
                                        </div>
                                        <p className='my-2'>yang bertanda tangan dibawah ini : </p>
                                        <div className='col-md-6 col-12'>
                                            <div className="form-floating mb-3">
                                                <input type="text" className="form-control" id="floatnama" placeholder="Nama" value={nama} onChange={(e)=> setNama(e.target.value)}/>
                                                <label htmlFor="floatnama">Nama</label>
                                            </div>
                                        </div>
                                        <div className='col-md-6 col-12'>
                                            <div className="form-floating mb-3">
                                                <input type="text" className="form-control" id="floatJabatan" placeholder="Jabatan" value={jabatan} onChange={(e)=> setJabatan(e.target.value)}/>
                                                <label htmlFor="floatJabatan">Jabatan</label>
                                            </div>
                                        </div>
                                        <div className='col-md-6 col-12'>
                                            <div className="form-floating mb-3">
                                                <input type="text" className="form-control" id="floatInstansi" placeholder="Instansi" value={instansi} onChange={(e)=> setInstansi(e.target.value)}/>
                                                <label htmlFor="floatInstansi">Instansi</label>
                                            </div>
                                        </div>
                                        <div className='col-md-6 col-12'>
                                            <div className="form-floating mb-3">
                                                <input type="text" className="form-control" id="floatTelp" placeholder="Telp" value={telp} onChange={(e)=> setTelp(e.target.value)}/>
                                                <label htmlFor="floatTelp">Telphone</label>
                                            </div>
                                        </div>
                                        <div className='col-12'>
                                            <div className="form-floating mb-3">
                                                <input type="text" className="form-control" id="floatAlamat" placeholder="Alamat" value={alamat} onChange={(e)=> setAlamat(e.target.value)}/>
                                                <label htmlFor="floatAlamat">Alamat</label>
                                            </div>
                                        </div>
                                        <div className='col-12'>
                                            <div className="form-floating mb-3">
                                                <textarea style={{height : "100px"}} type="text" className="form-control" id="floatKegiatan" placeholder="Kegiatan" value={kegiatan} onChange={(e)=> setKegiatan(e.target.value)}/>
                                                <label htmlFor="floatKegiatan">Kegiatan</label>
                                            </div>
                                        </div>
                                        <div className='col-12'>
                                            <div className="form-floating mb-3">
                                                <textarea style={{height : "100px"}} type="text" className="form-control" id="floatPaketKegiatan" placeholder="Paket Kegiatan" value={paketkegiatan} onChange={(e)=> setPaketkegiatan(e.target.value)}/>
                                                <label htmlFor="floatPaketKegiatan">Paket Kegiatan</label>
                                            </div>
                                        </div>
                                        <div className='col-12'>
                                            <div className="form-floating mb-3">
                                                <textarea style={{height : "100px"}} type="text" className="form-control" id="floatLokasi" placeholder="Lokasi" value={lokasi} onChange={(e)=> setLokasi(e.target.value)}/>
                                                <label htmlFor="floatLokasi">Lokasi</label>
                                            </div>
                                        </div>
                                        <div className='col-12'>
                                            <div className="form-floating mb-3">
                                                <textarea style={{height : "200px"}} type="text" className="form-control" id="floatPernyataan" placeholder="Pernyataan" value={pernyataan} onChange={(e)=> setPernyataan(e.target.value)}/>
                                                <label htmlFor="floatPernyataan">Pernyataan</label>
                                            </div>
                                        </div>
                                        <div className='col-12'>
                                            <div className="form-floating mb-3">
                                                <input type="date" className="form-control" id="floatTanggal" placeholder="Tanggal" value={tanggal} onChange={(e)=> setTanggal(e.target.value)}/>
                                                <label htmlFor="floatTanggal">Tanggal</label>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="formFileLg" className="form-label">Upload tanda tangan digital</label>
                                            <input className="form-control-lg w-100" type="file" id="formFile"  onChange={(e)=>loadImage(e)}/>
                                        </div>
                                    </div>
                                    <button type='submit' className='btn btn-lg btn-primary w-100'>Buat Pengajuan</button>
                                </form>
                            </div>
                        </div>
                        <div className='col-md-4 order-md-2 mb-3'>
                            <div className='sticky-top' style={{paddingTop : '90px', marginTop : '-90px'}}>
                                <div className="service-card p-4 " >
                                    <img src={process} alt="" className='mb-3' style={{width : "18%"}}/>
                                    <h5>Alur Pengajuan</h5>
                                    <p>Pengujian Uji Bahan Konstruksi</p>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <span className='text-grey text-14'>Lihat Mekanisme & Proses </span> <i className="bi bi-arrow-right-short text-16"></i>
                                    </div>
                                </div>

                                <div className="service-card p-4 mt-3" >
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
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default FormPengajuan;