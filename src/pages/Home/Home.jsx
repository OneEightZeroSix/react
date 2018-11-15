import React, {
    Component
} from "react";
import "./Home.css";

import Wechat from '../Wechat/Wechat.jsx';
import Contact from '../Contact/Contact.jsx';
import Research from '../Research/Research.jsx';
import Mine from '../Mine/Mine.jsx';

import Xfooter from '../../components/Xfooter/Xfooter';
import Xactionsheet from '../../components/Xactionsheet/Xactionsheet.jsx';
import { Route } from "react-router-dom";
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <Route path="/home/wechat" component={Wechat} />
                <Route path="/home/contact" component={Contact} />
                <Route path="/home/research" component={Research} />
                <Route path="/home/mine" component={Mine} />
                <Xactionsheet />
                <Xfooter />
            </div>
        )
    }
}

export default Home;