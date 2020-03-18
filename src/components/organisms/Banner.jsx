import React from 'react'

const Banner =()=>(
  <div className="main-banner img-container l-section" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img className="main-banner__img" src="https://www.imagen.com.mx/assets/img/imagen_share.png" alt="baner"></img>
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Curso de Edteam</p>
          <p> Subtítulo del banner</p>
          <a href="https://ux.ed.team/banner.html" className="button">Botón del banner</a>
        </div>
      </div>
    </div>
  </div>
)

export default Banner