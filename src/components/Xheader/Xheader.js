import React, {
    Component
} from "react";
// css
import "./Xheader.css";
import { Provider, connect } from 'react-redux';

class Xheader extends Component {
    constructor(props){
        super(props);
        // props states
        this.props = props;
        // model  data
        this.state = {
            title:"微博"
        }
    }
    // html
    render(){
        return (
            <header onClick={this.props.toggleSheet.bind(this)}>{this.props.title}</header>
        )
    }
    // js
}

export default connect((state)=>{
    return state
},(dispatch)=>{
    return {
        toggleSheet(){
            dispatch({
                type:"toggleSheet",
                isShowActionSheet:true
            })
        }
    }
})(Xheader);
