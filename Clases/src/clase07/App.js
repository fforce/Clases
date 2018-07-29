import React, {Component} from 'react'
import MenuNav from  './MenuNav'
import Contenido from './Contenido'



class App extends Component {


  render(){
    return (
      <div>
        <MenuNav/>
        <Contenido></Contenido>
      </div>
    )
  }
}
 export default App;
