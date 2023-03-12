import React, {createContext, useEffect, useState} from 'react'
import axios from 'axios'

const Contex = createContext(null)

const Provider = ({children})=> {
    const [blog, setBlog]= useState([])
    const [blogdate, setBlogdate]= useState([])

    const getDataBlog = async ()=> {
        const response = await axios.get(`${process.env.REACT_APP_SERVER}blog`)
        setBlog(response.data)
    }

    const getDataBlogByDate = async (date)=> {
        const response = await axios.get(`${process.env.REACT_APP_SERVER}blog/${date}`)
        setBlogdate(response.data)
    }

    useEffect(()=> {
        getDataBlog()
        getDataBlogByDate(new Date().getFullYear())
    },[])


    return (
        <Contex.Provider value={{blog, blogdate, getDataBlog, getDataBlogByDate}}>
            {children}
        </Contex.Provider>
    )
}

export {Contex, Provider}