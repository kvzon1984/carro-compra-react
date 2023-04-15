import { Component } from 'react'
import Productos from './components/Productos'
import Layout from './components/Layout'

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
        <Layout>
          <Productos
            agregarAlCarro = {() => console.log('Por hacer')}
            productos = {this.state.productos}
          />
        </Layout>
      </div>
    )
  }
}

export default App;
