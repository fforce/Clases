import React, { Component } from 'react';
import Reloj from './Reloj';


class RelojList extends Component {

    setReloj(date, offset) {
        let d = new Date(date)
        d.setHours(d.getHours() + offset);
        return d;
    }

    render() {
        const { date } = this.props;
        const { onClickSelected } = this.props;
        const { tituloSelected } = this.props;
        const printRelogs = this.props.relojs.map((item, i) =>
          <Reloj key={i} selected={item.selected} titulo={item.titulo} hora={this.setReloj(date, item.offset)}
             onClickSelected={()=>onClickSelected(item)}  classSelected={item.titulo == tituloSelected ? "selected" :"" }  />
           )

        return (
            <React.Fragment>
                {printRelogs}
            </React.Fragment>
        )
    }
}
export default RelojList;
