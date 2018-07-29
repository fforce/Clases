import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StarWarsApi from '../apis/StarWarsApi'
import {Link} from 'react-router-dom'


class Planetas extends Component {

  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      error: null,
      planetas: []

    }

    this.starWarsApi = new StarWarsApi()
  }

  componentDidMount() {

    this.starWarsApi.listPlanetsOriginal().then(planetArray => {
      console.log(planetArray);
      this.setState({planetas: planetArray})
    })
  }





  render() {
    const { planetas, loading } = this.state
    return( <div>
          {planetas.map((item,i) =>

            <Link to={`/Planetas/${i}`} key={i} className='nav-item nav-link'>{item.name}  </Link>

           )
          }

    </div>
  )
  }
}

export default Planetas
