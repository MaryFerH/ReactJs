import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom' //Permite que no se recarge la página

//Cuando se recibe por props se recibe todo el objeto, pero esto se puede optimisar
//escojiendo solo lo que se necesita para tu componente ({title,image,price})
const CourseCard = ({id,title,image,price,professor})=>(
    <article className="card">
      <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <Link to={`/cursos/${id}`}>  
          <img src={image} alt={title}></img>
        </Link>
      </div>
      <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="t5 s-mb-2 s-center">{title}</h3>
        <div className="s-mb-2 s-main-center">
          <div className="card__teacher s-cross-center">
            <div className="card__avatar s-mr-1">
              <div className="circle img-container">
                <img src="https://1.bp.blogspot.com/-79DdxzZkDog/T76QV6v5IuI/AAAAAAAAAEY/6DzpGZzsmfA/s320/homerocatolico_456_336.jpg" alt=""></img>
              </div>
            </div>
            <span className="small">{professor}</span>
          </div>
        </div>        
        <div className="s-main-center">
          <a className="button--ghost-alert button--tiny" href="https://ux.ed.team/cards.html">$ {price} usd</a>
        </div>
      </div>
    </article>    
)

CourseCard.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    professor: PropTypes.string
}

CourseCard.defaultProps ={
    title: "No se encontró title",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZWxq_DqhMbwm5yN1F3G3O7AU0r37vyj6MZOAGxj-7Gxq3Rr0R",
    price: "20",
    professor: "Fer"
}
export default CourseCard