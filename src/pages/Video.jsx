import React from 'react'
import vid from '../video/Промо-ролик кафе _Barbaris_ _ EPIC B-ROLL PIZZA.mp4'
import s from '../pages/Video.module.scss'
const Video = ({setValue, value}) => {
  return (
  <div>
    <div className={s.vse}>
         {/* <div className={s.vid}>
      <video src={vid} controls autoPlay muted ></video>
      </div> */}
      
    </div>
    <div className={s.dd}>
    
      <div className={s.pizza}><p>Все пиццы:</p></div>
      <div className={s.poisk}>
          <input placeholder='поиск...'
            type="search" 
            value={value}
            onChange={e => setValue(e.target.value)}/>
        </div>
   
       
    </div>
      </div>

  )
}

export default Video