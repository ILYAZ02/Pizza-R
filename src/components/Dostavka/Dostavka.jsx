import React from 'react'
import s from './Dostavka.module.scss'
const Dostavka = () => {
  return (
    <div className={s.aa}>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
             <h2>
             О пицце:
              </h2> 
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong><div className={s.bb}> <p> Пицца — блюдо, завоевавшее любовь тысяч людей. Ее покупают на пикники, на обеды в офисы, домой для дружеских посиделок с друзьями. Ее заказывают для взрослых и детей. Если вы хотите попробовать вкусную итальянскую или американскую пиццу, купите ее в нашем ресторане в Бишкеке.

                Мы рады каждому новому клиенту и готовы порадовать как мясоедов, так и вегетарианцев. Попробуйте начинку из креветок, грибов и сыра или халапеньо, маслин и огурчиков. Если вы не можете посетить кафе, закажите пиццу онлайн или по телефону и утолите голод, где бы вы ни находились! Убедитесь в этом прямо сейчас!</p></div></strong>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Dostavka