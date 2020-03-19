import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import useCourse from '../CustomHooks/useCourse'
 
const Course =({match})=>{

    const [comment,setComment] = useState("Sin comentaros")
    const course = useCourse(match.params.id)
    
    const changeComment=e=>{
        setComment(e.target.value)
    }
    return (
        <div className="ed-grid m-grid-3">
        {
            course 
                ? (
                    <div className="ed-grid"> 
                        <div className="l-block">        
                            <h1 className="m-cols-3">{course.title}</h1>
                            <img className="m-cols-1" src={course.image} alt={course.title}></img>
                            <p className="m-cols-2">Descripcion</p>
                        </div>
                        <div>
                            <h2>Escribe tu comenario</h2>
                            <input type="text" placeholder="Escribe..." onChange={changeComment.bind(this)} />
                            <p>{comment}</p>
                        </div>
                    </div>
                ) :
                    <h1>El curso no existe</h1>  
        }
        </div>
           
    )
}

export default Course