import React from  'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Contacto from './Contacto'
import Planetas from './Planetas'
import DetallePlaneta from './DetallePlaneta'



const Contenido = () => {
  return(
  <Switch>
    <Route exact path='/' component={Home} />
    <Route  path='/Planetas/:id' component={DetallePlaneta} />
    <Route  path='/Planetas' component={Planetas} />
    <Route  path='/Contacto' component={Contacto} />

  </Switch>)
}

export default Contenido;
