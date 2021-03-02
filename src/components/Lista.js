import React, { Fragment, Component } from 'react';
import Formulario from './Formulario';

export default class Lista extends Component {
    constructor() {
        super()

        this.state = {
            nombre: "",
            apellido: "",
            telefono: ""
        }
    }

    

    render() {
        return(
            <Fragment>
                <div className="lista">
                    <div className='names'>
                        <h2>Name</h2>
                        <div className='name'>{this.props.nombre}</div>
                    </div>
                    <div className='names'>
                        <h2>LastName</h2>
                        <div className='name'>{this.props.apellido}</div>
                    </div>
                    <div className='names'>
                        <h2>Phone</h2>
                        <div className='name'>{this.props.telefono}</div>
                    </div>
                    <div>
                        {this.props.render(this.state)}
                    </div>
                </div>
            </Fragment>
        )
    }

}

