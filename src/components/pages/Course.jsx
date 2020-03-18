import React from 'react'

const cursos = [
    {
        id: 1,
        title: "React desde cero",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZWxq_DqhMbwm5yN1F3G3O7AU0r37vyj6MZOAGxj-7Gxq3Rr0R",
        price: "20",
        professor: "Fernando Mora"    
    },
    {
        id: 2,
        title: "HTML desde cero",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZWxq_DqhMbwm5yN1F3G3O7AU0r37vyj6MZOAGxj-7Gxq3Rr0R",
        price: "20",
        professor: "Fernando Mora"    
    },
    {
        id: 3,
        title: "JS desde cero",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZWxq_DqhMbwm5yN1F3G3O7AU0r37vyj6MZOAGxj-7Gxq3Rr0R",
        price: "20",
        professor: "Fernando Mora"    
    },
    {
        id: 4,
        title: "PHP desde cero",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZWxq_DqhMbwm5yN1F3G3O7AU0r37vyj6MZOAGxj-7Gxq3Rr0R",
        price: "20",
        professor: "Fernando Mora"    
    }
]

const Course =({match})=>{
    
    const cursoActual = cursos.filter(c=>c.id ===parseInt(match.params.id))[0]

    return (
        <div className="ed-grid m-grid-3">
        {
            cursoActual 
                ? (
                    <>         
                        <h1 className="m-cols-3">{cursoActual.title}</h1>
                        <img className="m-cols-1" src={cursoActual.image} alt={cursoActual.title}></img>
                        <p className="m-cols-2">Descripcion</p>
                    </>
                ) :
                    <h1>El curso no existe</h1>
            
        }
        </div>
           
    )
}

export default Course