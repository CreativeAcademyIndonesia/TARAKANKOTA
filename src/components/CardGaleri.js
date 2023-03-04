import example from '../img/blog/example.jpg'

const CardGaleri = ()=>{
    return(
        <div className="col-lg-4 col-md-6 col-12 mt-lg-0 my-4">
            <div className="service-card p-4">
                <img alt="" src={example} className="ratio ratio-4x3 w-100 rounded-4" />
                <h5 className="mt-3">sdrf</h5> 
                <span>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus.  </span>
            </div>
        </div>
    )
}

export default CardGaleri