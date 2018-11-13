import React from 'react';
// axios
import axios from 'axios';

// 虚拟DOM
import ReactDOM from 'react-dom';
import './index.css';
// app组件
import App from './App';
import Xheader from './components/Xheader/Xheader';
import Xsearch from './components/Xsearch/Xsearch';
import Xpannel from './components/Xpannel/Xpannel.jsx';
import Xfooter from './components/Xfooter/Xfooter';

import * as serviceWorker from './serviceWorker';
React.axios = axios;
ReactDOM.render(
    <div>
        <Xheader title="微博" />
        <Xheader title="微信" />
        <Xsearch />
        <Xpannel />
        <Xfooter />
    </div>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();