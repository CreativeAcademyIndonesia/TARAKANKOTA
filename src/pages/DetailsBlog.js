import lands from '../img/blog/lands.jpg'
import CardGaleri from '../components/CardGaleri'

const DetailsBlog = ()=>{
    return(
        <div className="content-body-wrapper">
            <div className="container py-60">
                <div className="row justify-content-center py-5">
                    <div className="col-8 text-center">
                        <div className="card-service p-4 text-cener"></div>
                        <h5 className="text-blue">Senin, 25 January 2023</h5>
                        <h2 className=" fw-bold mt-2 lh-base">Musyawarah Perancangan dan Pembangunan Pekerjaan Umum dan Tata Ruang</h2>
                        <img src={lands} className="rounded-4 mt-5 w-75"/>
                        <p className='mt-5' style={{textAlign : "justify"}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </p>
                        <p className='mt-5' style={{textAlign : "justify"}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </p>
                        <p className='mt-5' style={{textAlign : "justify"}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
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
                            <CardGaleri />
                            <CardGaleri />
                            <CardGaleri />

                        <div className="col-8 text-center">
                            <a href="/home" className="text-decoration-none mx-auto d-block mt-5 link">Lihat Lainnya...</a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default DetailsBlog