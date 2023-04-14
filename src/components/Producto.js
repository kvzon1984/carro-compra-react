import {Component} from 'react'

class Producto extends Component {
    render() {
        console.log(this.props)
        const { key, producto, agregarAlCarro} = this.props

        return(
            <div>
                <img alt={producto.nombre} src={producto.img}/>
                <h3>{producto.name}</h3>
                <p>{producto.price}</p>
            </div>
        )
    }
}

export default Producto