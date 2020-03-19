import React,{useState} from 'react'

const Course =({match})=>{

    const [state, setstate] = useState({            
            id: 2,
            title: "HTML desde cero",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZWxq_DqhMbwm5yN1F3G3O7AU0r37vyj6MZOAGxj-7Gxq3Rr0R",
            price: "20",
            professor: "Fernando Mora"  
    })
    
    const changeTitle = (text)=>{
        setstate({
            ...state,
            title:text
        })
    }
    return (
        <div className="ed-grid m-grid-3">
        {
            state 
                ? (
                    <>         
                        <h1 className="m-cols-3">{state.title}</h1>
                        <img className="m-cols-1" src={state.image} alt={state.title}></img>
                        <p className="m-cols-2">Descripcion</p>
                        <button onClick={changeTitle.bind(this,"Go desde Cero")}>Cambiar</button>
                    </>
                ) :
                    <h1>El curso no existe</h1>  
        }
        </div>
           
    )
}

export default Course