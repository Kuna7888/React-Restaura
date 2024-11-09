
import React from 'react'
import HeroComponent from './01-components/02-Hero-Component'
import NavbarComponent from './01-components/01-Navbar-Component'
import DishesComponent from './01-components/03-Dishes-Component'
import AboutComponent from './01-components/05-About-Component'
import MissionComponent from './01-components/06-Mission-Component'
import ExpertiseComponent from './01-components/07-Expertise-Component'
import ReviewsComponent from './01-components/08-Reviews-Component'
import ContactComponent from './01-components/09-Contact-Component'
import FooterComponent from './01-components/10-Footer-Component'
import { tailChase } from 'ldrs'

// https://youtu.be/Wtm_VyuPssk?si=xTiQ8AX0ODVmOw3c&t=2710


function App () {
  tailChase.register()
  const [isLoading, setIsLoading] = React.useState(true)


  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])


  if(isLoading){
    return (
      <div className='h-screen  flex justify-center items-center'>
        <l-tail-chase size="40" speed="1.75" color="cyan"></l-tail-chase>
      </div>
    )
  }

  return (
    <main className='overflow-y-hidden text-neutral-200 selection:bg-cyan-300 selection:text-black  antialiased'>
      <HeroComponent/>
      <NavbarComponent />
      <DishesComponent/>
      <AboutComponent/>
      <MissionComponent/>
      <ExpertiseComponent/>
      <ReviewsComponent/>
      <ContactComponent/>
      <FooterComponent/>
    </main>
  )
}

export default App