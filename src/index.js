import React from 'react';
// axios
import axios from 'axios';

// 虚拟DOM
import ReactDOM from 'react-dom';

// 路由功能
import { HashRouter as Router, Route , Redirect} from "react-router-dom";

import './index.css';
import './assets/weui.css';
// 子组件 复用组件
// import App from './App';


// 页面组件 容器组件
import Home from './pages/Home/Home.jsx';
import Detail from './pages/Detail/Detail.jsx';

import * as serviceWorker from './serviceWorker';
React.axios = axios;
ReactDOM.render(
    <Router>
        <div>
            <Route path="/home/" component={Home} />
            <Route path="/detail/:id/:song_id" component={Detail} />
            
        </div>
    </Router>
    , 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();