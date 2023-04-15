import { Component } from "react";

const styles = {
    layout :{
        backgroundColor: '#fff',
        display: 'flex',
        color: '#0A283E',
        alignItems: 'center'
    }
}

class Layout extends Component {
    render() {
        return (
            <div style={styles.layout}>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout