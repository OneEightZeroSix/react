import React, {
    Component
} from "react";
// css
import "./Xheader.css";
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
            <header>{this.props.title}</header>
        )
    }
    // js
}

export default Xheader;
