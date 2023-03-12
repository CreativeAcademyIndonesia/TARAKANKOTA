import React  from 'react'
import TextTruncate from 'react-text-truncate'
import { useNavigate } from 'react-router-dom'

const CardGaleri = ({data})=>{
    const navigate = useNavigate()
    return(
        <div className="col-lg-4 col-md-6 col-12 mt-lg-0 my-4" onClick={()=>navigate(`/galeri/${data.id}`)}>
            <div className="service-card p-4 blog-card">
                <div className=' blog-img rounded-4 overflow-hidden'>
                    <img alt="" src={`${process.env.REACT_APP_SERVER}images/${data.imgpath}`} className="rounded-4 w-100" />
                </div>
                <span className='d-block text-grey mt-3 d-inline-block text-14'>{data.tanggal}</span>
                <TextTruncate
                    containerClassName="mt-1 h-5"
                    line={2}
                    element="h5"
                    truncateText="…"
                    text={data.judul}
                />

                <h5 className='mt-1'></h5> 
                <TextTruncate
                    containerClassName="d-block"
                    line={5}
                    element="span"
                    truncateText="……"
                    text={data.paragraph1}
                />
            </div>
        </div>
    )
}

export default CardGaleri