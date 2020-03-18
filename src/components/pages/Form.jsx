import React, {Component} from 'react'

class Form extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            name:"",
            mail:"",
            fecha:new Date()
        }
        this.changeName = this.changeName.bind(this)
        this.changeMail = this.changeMail.bind(this)
        this.changeDate = this.changeDate.bind(this)
    }
    changeName(e){
        this.setState({
            name:e.target.value
        })
    }
    
    changeMail(e){
        this.setState({
            mail:e.target.value
        })
    }
    changeDate(){
        this.setState({
            date:new Date()
        })
    }

    render(){
        return (
            <div className="ed-grid">
                <h1>Formulario</h1>
                <h3>Fecha Actual: {Math.ceil(this.state.date/1000)}</h3>
                <form id="form-element">
                    <div className="ed-grid m-grid-2">

                        <div className="form__item">
                            <label>Nombre Completo</label>
                            <input type="text" onChange={this.changeName}/>
                        </div>
                        <div className="form__item">
                            <label>Correo Electrónico</label>
                            <input type="email" onChange={this.changeMail}/>
                        </div>
                    </div>
                </form>                
                
                <div>
                    <h2>{`Hola ${this.state.name}`}</h2>
                    <span>{`Tu correo es ${this.state.mail}`}</span>
                </div>
            </div>
        )
    }

    componentDidMount() {
        console.log('Se cargo todo el componente del formulario')
        this.intervaloFecha = setInterval(()=>{
            this.changeDate()
            //console.log(new Date())
        },1000)
    }

    componentDidUpdate(prevProps,prevState){
        //Accede a las propiedades antes de actualizarse
       // console.log(prevState)
    }
    
    //Para limpiar intervalos de llamadas asincronas, verificaciones cierto tiempo
    componentWillUnmount(){
        clearInterval(this.intervaloFecha)
    }
}

export default Form