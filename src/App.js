import { Component } from 'react'
import Productos from './components/Productos'

class App extends Component{
  state = {
    productos: [
      {name: 'Tomate', price: 1500, img: '/productos/tomate.jpg'},
      {name: 'Arbejas', price: 1250, img: '/productos/arbejas.jpg'},
      {name: 'Lechuga', price: 1000, img: '/productos/lechuga.jpg'}
    ]
  }
  render() {
    return(
      <div>
        <Productos
          agregarAlCaroo = {() => console.log('Por hacer')}
          productos = {this.state.productos}
        />
      </div>
    )
  }
}

export default App;
