import { Component } from 'react';
import BubbleAlert from './BubbleAlert'

const styles = {
    btnCarro: {
        backgroundColor: '#359A2C',
        color: '#fff',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer '
    },
    bubble: {
        position: 'relative',
        left: 12,
        top: 20,

    }
}


class BtnCarro extends Component {
    render(){
        return (
            <div>
                <span style={styles.bubble}>
                    <BubbleAlert value={10}/>
                </span>
                <button style={styles.btnCarro}>
                    Carro
                </button>
            </div>
        )
    }
}

export default BtnCarro
