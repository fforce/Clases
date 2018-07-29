import React, { Component } from 'react';
import RelojList from './RelojList'


class RelojApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            tituloSelected:"",
            notas: [
                {
                    titulo: "Buenos Aires",
                    offset: 0,
                    selected: false
                },
                {
                    titulo: "New York (USA)",
                    offset: -1,
                    selected: false
                },
                {
                    titulo: "Londres (UK)",
                    offset: 4,
                    selected: false
                },
                {
                    titulo: " Moscú (Rusia)",
                    offset: 6,
                    selected: false
                }
            ]
        };
    }

    handleOnClickSelected = (relog) => {

        const newState = [...this.state.notas];

        for (var i of newState) {
            if (i === relog) {
                i.selected = true;
            } else {
                i.selected = false;
            }
        }

        this.setState(
            {
                notas: newState
            }
        )

    }

    handleOnClickSelectedString = (reloj) => {
      this.setState(
        {
          tituloSelected : reloj.titulo
        }
      )

    }


    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }


    render() {

        return (
            <RelojList relojs={this.state.notas} tituloSelected={this.state.tituloSelected} date={this.state.date} onClickSelected={this.handleOnClickSelectedString} />
        )
    }

}

//Porque si solo le paso la referencia del metodo no se ejecuta despues?

export default RelojApp;
