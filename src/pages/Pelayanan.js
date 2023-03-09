import form from '../img/icon/formicon.png'
import customservice from '../img/icon/customer-service.png'
import React, {useState}  from 'react';
import { useNavigate } from 'react-router-dom';
import process from '../img/icon/process.png'
import Table from 'react-bootstrap/Table';

const Pelayanan = ()=>{
    const navigate = useNavigate()
    const [layanan, setLayanan] = useState([
        {
            jenis : "Jasa Labolatorium Pengujian Tanah", 
            item : [ 'Batas cair (Liquid limit)', 'Batas plastic (Plastic limit)',  'Batas susut (Shrinkage limit)', 'Hidrometer Analisis Test','Berat jenis tanah (Spesific Gravity)',  'CBR laboratorium  Consolidation Test  Kepadatan standar (Standard Proctor)',  'Kepadatan berat (Modified Proctor)',  'Kadar air tanah'  ]
        },
        {
            jenis : "Jasa Labolatorium Pengujian Agregat", 
            item : [ 'Analisa sarinqan agregat halus dan kasar',  'Berat jenis dan penyerapan agregat halus',  'Berat jenis dan penyerapan agregat kasar',  'Berat isi agregat',  'Keausan agregat dengan mesin los angeles',' Kadar air agregat  Kadar kotoran omanik / kadar lumpur']
        },
        {
            jenis : "Jasa Labolatorium Pengujian Beton", 
            item : [ 'Berat jenis semen portland', ' Kuat tekan kubus beton',  'Kuat tekan silinder beton',  'Kuat tekan paving block',  'Concrete beam test',  'Kekuatan tekan mortar semen portland','  Cement Tes Time of Setting Vicat Needle', 'Uji Kuat Tank Logam']
        },
        {
            jenis : "Jasa Labolatorium Pengujian Aspal", 
            item : [ 'Penetrasi (Laboratory Penetration)',  'Titik lembek aspal (Softening Point Test)', ' Titik nyala dan titik bakar (Flash on Fire Point Test)', ' Daktilitas  Uji kehilanqan berat (TFOT)',  'Berat jenis aspal',  'Centrifuge Extractor test (Ekstraksi)',  'Marshall test']
        },
        {
            jenis : "Jasa Labolatorium Pengujian Lapangan", 
            item : [ 'Hand bor', 'SPT', 'Kekuatan tanah dengan Sondir', 'CBR Lempengan (Field CBR)',  'Kepadatan lapangan dengan kerucut pasir (Sand Cone)', ' Dynamic Cone Penetrometer (DPC)',  'Hammer test',  'Slump test', ' Core drill aspal',  'Core drill beton' ]
        },
        {
            jenis : "Jasa Labolatorium Pengujian Mix Desain", 
            item : [ 'Mix desain agregat',  'Mix desain beton',  'Mix desain aspal',  'Mix desain tanah urug']
        },
    ])
    return(
        <div className="content-body-wrapper">
            <div className="container-fluid py-80">
                <div className="container">
                    <div className='row justify-content-center'>
                        <div className='col-md-8 order-1 mt-4'>
                            <div className="service-card p-4 text-center">
                                <h5 className="text-blue">Tarif & Biaya</h5>
                                <h1 className=" fw-bold mt-2">Layanan Uji Labolatorium</h1>
                                <span>Tarif tertuang pada Perda Kota Tarakan No.3 Tahun 2020 Tentang Perubahan kedua atas Perda Nomor 2 Tahun 2012 tentang Retribusi Jasa Usaha.</span>
                                { layanan.map((data)=>{
                                    return(
                                        <TabelLayanan data={data} />
                                    )
                                })}
                            </div>
                        </div>
                        <div className='col-md-4 order-md-2'>
                            <div className='sticky-top nav-right'>
                                <div className="service-card p-4 p-4" onClick={()=>navigate('/formpengajuan')} >
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
                                <div className="service-card p-4 mt-3" onClick={()=>navigate('/mekanisme')} >
                                    <img src={process} alt="" className='mb-3' style={{width : "18%"}}/>
                                    <h5>Alur Pengajuan</h5>
                                    <p>Pengujian Uji Bahan Konstruksi</p>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <span className='text-grey text-14'>Lihat Mekanisme & Proses </span> <i className="bi bi-arrow-right-short text-16"></i>
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

const TabelLayanan = ({data})=>{
    console.log(data)
    return(
        <div className='my-5'>
            <h5 className='mb-3 text-start fw-bold'><mark className="bg-lightblue text-blue">{data.jenis}</mark></h5>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Jenis Pengujian</th>
                    </tr>
                </thead>
                <tbody>
                    { data.item.map((i, index)=>{
                        return(
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{i}</td>
                            </tr>
                        )
                    }) }
                </tbody>
            </Table>
        </div>
    )
}
export default Pelayanan