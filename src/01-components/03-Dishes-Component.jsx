import React from 'react'
import { DISHES } from '../constants'
import DishCardComponent from './04-DishCard-Component'

const DishesComponent = () => {
  return (
    <section className='container   mx-auto py-16' id="dishes">
<h2 className='mb-8 text-center text-3xl tracking-tighter lg:text-4xl'>Our Dishes</h2>
<div className="grid grid-cols-1 gap-8 md:grid-cols-5 ">
    {DISHES.map((project, index)=>{
        return <DishCardComponent key={index} project={project} />
    })}
</div>
    </section>
  )
}

export default DishesComponent