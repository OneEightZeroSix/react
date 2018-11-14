import React, {
    Component
} from "react";
import { Link } from "react-router-dom";
import "./Detail.css";
class Detail extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.match.params);
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <Link to="/home/wechat">跳转Home</Link>
                Detail页面
            </div>
        )
    }
}

export default Detail;