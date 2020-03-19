import {useState,useEffect} from 'react'
import Axios from 'axios'

const useCourse = id => {
    const [course, setCourse] = useState({})
    
    useEffect(()=>{
        Axios.get(`https://my-json-server.typicode.com/MaryFerH/json-db/Cursos/${id}`)
        .then(res=>setCourse(res.data))
    },[])

    return course
}

export default useCourse
