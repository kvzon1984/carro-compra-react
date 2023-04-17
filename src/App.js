import { Component } from 'react'
import Productos from './components/Productos'
import Layout from './components/Layout'
import Title from './components/Title'
import Navbar from './components/Navbar'

class App extends Component{
  state = {
    productos: [
      {name: 'Tomate', price: 1500, img: '/productos/tomate.jpg'},
      {name: 'Arbejas', price: 1250, img: '/productos/arbejas.jpg'},
      {name: 'Lechuga', price: 1000, img: '/productos/lechuga.jpg'}
    ],
    carro: [],
    esCarroVisible: false,
  }

  agregarAlCarro = (producto) => {
    const { carro } = this.state

    if (carro.find(c => c.name === producto.name)){
      const newCarro = carro.map(c => c.name === producto.name ? (
        {
          ...c, 
          cantidad: c.cantidad + 1 
        }
      )
      : c)

      return this.setState({ carro: newCarro })
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto, 
        cantidad: 1
      })
    })


  }

  mostrarCarro = () => {
    if(!this.state.carro.length){
      return
    }
    this.setState({ esCarroVisible:!this.state.esCarroVisible })
  }

  render() {
    const {carro , esCarroVisible, productos } = this.state
    return(
      <div>
        <Navbar esCarroVisible={esCarroVisible} carro={carro} mostrarCarro={this.mostrarCarro}/>
        <Layout>
          <Title/>
          <Productos
            agregarAlCarro = {this.agregarAlCarro}
            productos = {productos}
          />
        </Layout>
      </div>
    )
  }
}

export default App;
