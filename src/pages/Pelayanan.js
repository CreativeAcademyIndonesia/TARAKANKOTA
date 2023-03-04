import form from '../img/icon/formicon.png'
import customservice from '../img/icon/customer-service.png'

const Pelayanan = ()=>{
    return(
        <div className="content-body-wrapper">
            <div className="container-fluid py-80">
                <div className="container">
                    <div className='row justify-content-center'>
                        <div className='col-md-8 order-1 mt-4'>
                            <div className="service-card p-4 ">
                                
                            </div>
                        </div>
                        <div className='col-md-4 order-md-2'>
                            <div className='sticky-top bg-danger'>
                                <div className="service-card p-4 " >
                                    <img src={form} alt="" className='mb-3' style={{width : "18%"}}/>
                                    <h5>
                                        Buat Pengajuan 
                                    </h5>
                                    <p>
                                    Pengujian UPT Lab Uji Bahan Konstruksi
                                    </p>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <span className='text-grey text-14'>Isi Form Disini </span> <i class="bi bi-arrow-right-short text-16"></i>
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

export default Pelayanan