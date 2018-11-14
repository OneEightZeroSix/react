import React, {
    Component
} from "react";
// import { Link } from "react-router-dom";
import Xheader from '../../components/Xheader/Xheader';
import Xsearch from '../../components/Xsearch/Xsearch';
import Xpannel from '../../components/Xpannel/Xpannel.jsx';
import "./Wechat.css";
class Wechat extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <Xheader title="微信" />
                <Xsearch />
                <Xpannel /> 
            </div>
        )
    }
}

export default Wechat;