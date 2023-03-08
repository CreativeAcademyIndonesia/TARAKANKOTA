import Table from 'react-bootstrap/Table';
import axios from 'axios'
import { useState } from 'react'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'
import React from 'react';
import { Provider, Contex } from "../components/Context"
import {useContext} from 'react'

// const data = [
//     {
//       name: {
//         firstName: 'John',
//         lastName: 'Doe',
//       },
//       address: '261 Erdman Ford',
//       city: 'East Daphne',
//       state: 'Kentucky',
//     },
//     {
//       name: {
//         firstName: 'Jane',
//         lastName: 'Doe',
//       },
//       address: '769 Dominic Grove',
//       city: 'Columbus',
//       state: 'Ohio',
//     },
//     {
//       name: {
//         firstName: 'Joe',
//         lastName: 'Doe',
//       },
//       address: '566 Brakus Inlet',
//       city: 'South Linda',
//       state: 'West Virginia',
//     },
//     {
//       name: {
//         firstName: 'Kevin',
//         lastName: 'Vandy',
//       },
//       address: '722 Emie Stream',
//       city: 'Lincoln',
//       state: 'Nebraska',
//     },
//     {
//       name: {
//         firstName: 'Joshua',
//         lastName: 'Rolluffs',
//       },
//       address: '32188 Larkin Turnpike',
//       city: 'Charleston',
//       state: 'South Carolina',
//     },
//   ];

//   const Example = () => {
//     //should be memoized or stable
//     const columns = useMemo(
//       () => [
//         {
//           accessorKey: 'name.firstName', //access nested data with dot notation
//           header: 'First Name',
//         },
//         {
//           accessorKey: 'name.lastName',
//           header: 'Last Name',
//         },
//         {
//           accessorKey: 'address', //normal accessorKey
//           header: 'Address',
//         },
//         {
//           accessorKey: 'city',
//           header: 'City',
//         },
//         {
//           accessorKey: 'state',
//           header: 'State',
//         },
//       ],
//       [],
//     );
  
//     return <MaterialReactTable columns={columns} data={data} />;
//   };

const Admin = ()=>{
    return(
        <Provider>
            <AdminProvider />
        </Provider>
    )
}

const AdminProvider = ()=>{
    const {blog, getDataBlog} = useContext(Contex)
    const navigate = useNavigate()
    const [ tanggal, setTanggal ] = useState('')
    const [ judul, setJudul ] = useState('')
    const [ paragraph1, setParagraph1 ] = useState('')
    const [ paragraph2, setParagraph2 ] = useState('')
    const [ image, setImage ] = useState('')

    const loadImage = (e) => {
        const buffer = e.target.files[0];
        setImage(buffer);
    };

    const handSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", image);
        const con = {
            judul,
            paragraph1,
            paragraph2,
            tanggal
        }
        formData.append("data", JSON.stringify(con));
        try {
            await axios.post("http://localhost:5000/upload/blog", formData, {
            headers: {
                "Content-type": "multipart/form-data",
            },
        }).then((response) => {
            setJudul('')
            setParagraph1('')
            setParagraph2('')
            setTanggal('')
            setImage(null)
            getDataBlog()
            swal({
                title: "Blog Disimpan",
                text: "Program / Kegiatan UPT Lab PUPR Tarakan Kota Telah ditambahkan",
                icon: "success",
                button: false,
            })
        });
            navigate("/admin");
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
                                <h5 className="text-blue">Hallo Admin, Silahkan Upload</h5>
                                <h1 className=" fw-bold mt-2">Program & Kegiatan Terkini</h1>
                                <form className='mt-4' onSubmit={(e)=>handSubmit(e)}>
                                    <div className='row'>
                                        <div className='col-12'>
                                                <div className="form-floating mb-3">
                                                    <textarea 
                                                    type="text" 
                                                    className="form-control" 
                                                    id="floatJudul" 
                                                    placeholder="Judul" 
                                                    value={judul} 
                                                    onChange={(e)=> 
                                                    setJudul(e.target.value)}/>
                                                    <label htmlFor="floatJudul">Judul</label>
                                                </div>
                                            </div>
                                        <div className='col-12'>
                                            <div className="form-floating mb-3">
                                                <textarea 
                                                style={{height : "200px"}} 
                                                type="text" 
                                                className="form-control" 
                                                id="floatParagraph1" 
                                                placeholder="Paragraph1" 
                                                value={paragraph1} 
                                                onChange={(e)=> 
                                                setParagraph1(e.target.value)}/>
                                                <label htmlFor="floatParagraph1">Paragraph 1</label>
                                            </div>
                                        </div>

                                        <div className='col-12'>
                                            <div className="form-floating mb-3">
                                                <textarea 
                                                style={{height : "200px"}} 
                                                type="text" 
                                                className="form-control" 
                                                id="floatParagraph2" 
                                                placeholder="Paragraph2" 
                                                value={paragraph2} 
                                                onChange={(e)=> 
                                                setParagraph2(e.target.value)}/>
                                                <label htmlFor="floatParagraph2">Paragraph 2</label>
                                            </div>
                                        </div>

                                        <div className='col-12'>
                                            <div className="form-floating mb-3">
                                                <input 
                                                type="date" 
                                                className="form-control" 
                                                id="floatTanggal" 
                                                placeholder="Tanggal" 
                                                value={tanggal} 
                                                onChange={(e)=> setTanggal(e.target.value)}/>
                                                <label htmlFor="floatTanggal">Tanggal</label>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="formFileLg" className="form-label">Upload Foto Kegiatan</label>
                                            <input 
                                            className="form-control-lg w-100" 
                                            type="file" id="formFile"
                                            onChange={(e)=>loadImage(e)}/>
                                        </div>
                                    </div>
                                    <button type='submit' className='btn btn-lg btn-primary w-100'>Simpan</button>
                                </form>
                            </div>
                        </div>
                    </div>  
                    <div className='row justify-content-center mt-5'>
                      <div className='col-12'>
                        <div className="service-card p-4 ">
                          <BasicTable data={blog} getDataBlog={getDataBlog} />
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const BasicTable = ({data, getDataBlog})=> {

    
    const handlingDelete = async(id)=>{
        try{
            await axios.delete(`http://localhost:5000/blog/${id}`)
            getDataBlog()
        } catch(err){
            console.log(err)
        }
    }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Judul</th>
          <th>Paragraph 1</th>
          <th>Paragraph 2</th>
          <th>Tanggal</th>
          <th>Image</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
          { data.map((b)=>{
              return(
                <tr key={b.id}>
                    <td>{b.id}</td>
                    <td>{b.judul}</td>
                    <td>{b.paragraph1}</td>
                    <td>{b.paragraph2}</td>
                    <td>{b.tanggal}</td>
                    <td>{b.imgpath}</td>
                    <td className="d-flex gap-2">
                        {/* <button className='btn btn-warning'><i className="bi bi-pencil-fill text-white"></i></button> */}
                        <button className='btn btn-danger' onClick={()=>handlingDelete(b.id)}><i className="bi bi-trash3-fill text-white"></i></button>    
                    </td>
                </tr>
              )
          })}
      </tbody>
    </Table>
  );
}

export default Admin