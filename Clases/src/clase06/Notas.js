import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ListadoNotas from '../clase04/NotasApp/NotaList'
import StarWarsApi from '../apis/StarWarsApi'
import { validarCuit } from '../utils/funciones'

class Notas extends Component {



  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      error: null,
      notas: []
    }

    this.starWarsApi = new StarWarsApi()
  }

  handleScroll = (event) => {
    console.log('scroll')
    const estaAbajo = document.body.scrollHeight === window.scrollY + window.innerHeight;

    if(estaAbajo) {
      console.log('abajo')
      this.fetchData()
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    this.starWarsApi.listPeople().then(peopleArray => {
      console.log(peopleArray)
      this.setState({notas: peopleArray})
    })
  }

  componentWillUnmount() {
    //window.removeEventListener('scroll', this.handleScroll)
  }

  fetchData = () => {
    const { notas, loading } = this.state

    if (loading) {
      return false;
    }

    this.setState({ loading: true })

    // ajax simulado
    setTimeout(() => {
      this.setState({
        loading: false,
        notas: [...notas, {name: 'Otra nota'}, {name: 'esta otra'}]
      })
      //this.setState({loading: false, error: 'Ocurrió un error sarlanga'})
    }, 2500)
  }

  handleOnDeleteNota = (item) => (event) => {
    const { notas } = this.state
    this.setState({
      notas: notas.filter(nota => nota.name !== item.name)
    })
  }

  handleOnChangeInput = (event) => {
    this.setState({ valueInput: event.target.value, isValid: validarCuit(event.target.value) })
  }

  render() {
    const { notas, loading, error } = this.state
    return <div>
      <ListadoNotas notas={notas} onClickDelete={this.handleOnDeleteNota}/>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
    </div>
  }
}

export default Notas
