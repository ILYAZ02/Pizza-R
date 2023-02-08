import React from 'react'
import a from '../../img/A1.webp'
import b from '../../img/B1.webp'
import c from '../../img/C1.webp'
import d from '../../img/D1.webp'
import i from '../../img/I1.webp'
const Slider = () => {
  return (
 
    <div>
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={a} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={b} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={c} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={d} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={i} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Slider