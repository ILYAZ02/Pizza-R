import React from 'react'
import Pizza from '../../components/Pizzas/Pizza';
import Video from '../Video';
import { useState } from 'react';
import { pizza } from '../../constants/pizza'
import Slider from '../../components/Slider/Slider';

const Hompage = () => {

    const [value, setValue] = useState('')

    const allData = pizza.filter(pizzas => pizzas.name.toLowerCase().includes(value.toLowerCase()))
    
    return (
        <div>
            <Slider/>
            <Video   allData={allData} setValue={setValue} value={value}/>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {allData.map(item => (
                    <Pizza item={item} />
                ))}
            </div>
        </div>
    )
}

export default Hompage