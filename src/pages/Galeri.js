import CardGaleri from '../components/CardGaleri'
import React, { useState } from 'react';
import { Provider, Contex } from "../components/Context"
import {useContext} from 'react'

const Galeri = ()=>{
    const {blogdate, getDataBlogByDate} = useContext(Contex)
    const [date, setDate] = useState('')
    const onDate = (e)=>{
        setDate(e.target.value)
        getDataBlogByDate(new Date(e.target.value).getFullYear())
    }
    return(
        <div className="content-body-wrapper">
            <div className="container">
                <div className="row mt-5 py-60">
                    <div className="col-12 mb-5">
                        <h5 className="text-blue">Lab PUPR Trakan Kota</h5>
                        <h1 className=" fw-bold mt-2">Program & Kegiatan Terkini</h1>
                    </div>
                    { blogdate.map((item)=>{
                        return(
                            <CardGaleri key={item.id} data={item} />
                        )
                    }) }
                </div>
                <div className='row justify-content-center py-80'>
                    <div className="col-lg-2 col-md-3 col-6 text-center">
                        <label>Blog Lainnya, Silahkan Pilih Tahun</label>
                        <input type="month" id="month" placeholder='select date' className='form-control mx-auto' value={date} onChange={(e)=>onDate(e)}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const GaleriConsumer = ()=>{
    
    // console.log(blog)
    return(
        <Provider>
            <Galeri />
        </Provider>
    )
}

export default GaleriConsumer