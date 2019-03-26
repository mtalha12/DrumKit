import React, { component, Component } from "react";
import styles from "./styles";
import '../App.css';



class ButtonComponent extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div data-key={this.props.dataKey} className="key ">
            <kbd style={styles.kbd}>{this.props.char}</kbd>
            <span style={styles.sound}>{this.props.name}</span>
            </div>
        )
    }
}
export default ButtonComponent