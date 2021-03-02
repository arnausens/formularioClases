
import React, {Component, Fragment} from 'react';


export default class Formulario extends Component {


    constructor (props) {
        super(props);

        this.state = {
            nombre: "",
            apellido: "",
            telefono: ""
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.enviarDatos = this.enviarDatos.bind(this)

    }


    handleInputChange(event) {
       this.setState({
           [event.target.name] : [event.target.value]
       })
    }

    enviarDatos (event)  {
        event.preventDefault()
        return (this.state.nombre, this.state.apellido, this.state.telefono)
    }

    render() {
        return (
            <Fragment>
                <div className="formularioContent">
                    <h1>Formulario</h1>
                    <form className="formGrid" onSubmit={this.props.enviarDatos}>
                        <div>
                            <input 
                            type="text" 
                            placeholder="Nombre" 
                            className="form-control" 
                            onChange={this.handleInputChange} 
                            name="nombre"
                            value={this.state.nombre}
                            ></input>
                        </div>
                        <div >
                            <input 
                            type="text" 
                            placeholder="Apellido" 
                            className="form-control"
                            onChange={this.handleInputChange} 
                            name="apellido"
                            value={this.state.apellido} 
                            ></input>
                        </div>
                        <div >
                            <input 
                            type="tel" 
                            pattern="[0-9]{9}" 
                            required 
                            placeholder="Telefono" 
                            className="form-control" 
                            onChange={this.handleInputChange} 
                            name="telefono"
                            value={this.state.telefono}
                            ></input>
                        </div>
                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </form>
                    <ul>
                        <li>{this.state.nombre}</li>
                        <li>{this.state.apellido}</li>
                        <li>{this.state.telefono}</li>

                    </ul>
                        
                </div>
            </Fragment>
            
        );
    }
}
 
;

