import CardGaleri from '../components/CardGaleri'
import React, { useEffect, useState }  from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import {useContext} from 'react'
import { Provider, Contex } from '../components/Context';

const DetailsBlog = ()=>{
    return(
        <Provider>
            <DetailBlogProvider />
        </Provider>
    )
}

const DetailBlogProvider = ()=>{
    const {blog, setBlog} = useContext(Contex)
    const navigate = useNavigate()
    let { id } = useParams();
    const [ data, setData ] = useState([])

    const getDetail = async (id)=> {
        const response = await axios.get(`http://localhost:5000/blogdetail/${id}`)
        setData(response.data[0])
    }
    useEffect(()=>{
        getDetail(id)
    }, [id])
    return(
        <div className="content-body-wrapper">
            <div className="container py-60">
                <div className="row justify-content-center py-5">
                    <div className="col-8 text-center">
                        <div className="card-service p-4 text-cener"></div>
                        <h5 className="text-blue">{moment(data.tanggal).format('LLLL')}</h5>
                        <h2 className=" fw-bold mt-2 lh-base">{data.judul}</h2>
                        <img alt="lands" src={`http://localhost:5000/images/${data.imgpath}`} className="rounded-4 mt-5 w-75"/>
                        <p className='mt-5' style={{textAlign : "justify"}}>
                        {data.paragraph1}
                        </p>
                        <p className='mt-5' style={{textAlign : "justify"}}>
                        {data.paragraph2}
                        </p>
                        <p className='mt-5' style={{textAlign : "justify"}}>
                        {data.paragraph3}
                        </p>
                    </div>
                </div>
            </div>
            <div className='container-fluid bg-lightblue py-5'>
                <div className='container'>
                    <div className='row justify-content-center py-5'>
                        <div className='col-12 mb-4'>
                            <h5 className="text-blue">Blog Lainnya</h5>
                            <h1 className=" fw-bold mt-2">Program & Kegiatan</h1>
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

                        <div className="col-8 text-center">
                            <span onClick={()=>navigate('/galeri')} className="text-decoration-none mx-auto d-block mt-5 link text-blue" style={{cursor : "pointer"}}>Lihat Lainnya...</span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default DetailsBlog