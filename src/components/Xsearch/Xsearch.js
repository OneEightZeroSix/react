import React, {
    Component
} from "react";
// css
import "./Xsearch.css";
import store from "../../libs/store.js";
import { connect} from 'react-redux';
class Xsearch extends Component {
    constructor(props){
        super(props);
        // model  data  M-》V
        console.log(props);
        this.state = {
            isShowSearchBar:true,
            searchValue:""
        }
    }
    // 事件
    tapLabel(){
        this.setState({
            isShowSearchBar:!this.state.isShowSearchBar
        })
        this.refs.imput.focus();
        this.props.onEditTextClick();
    }
    getInputValue(e){
        // 发送数据
        store.emit("inputValue",e.target.value);
        //console.log(e.target.value);
        this.setState({
            searchValue:e.target.value
        })
    }
    // html
    render(){
        return (
            <div className={this.state.isShowSearchBar?'weui-search-bar':'weui-search-bar weui-search-bar_focusing'} id="searchBar">
                <form className="weui-search-bar__form">
                    <div className="weui-search-bar__box">
                        <i className="weui-icon-search"></i>
                        <input onChange={this.getInputValue.bind(this)} ref="imput" type="search" className="weui-search-bar__input" id="searchInput" placeholder="搜索" required="" />
                        <a href="javascript:" className="weui-icon-clear" id="searchClear"></a>
                    </div>
                    <label onClick={this.tapLabel.bind(this)} className="weui-search-bar__label" id="searchText">
                        <i className="weui-icon-search"></i>
                        <span>搜索</span>
                    </label>
                </form>
                <a onClick={this.tapLabel.bind(this)} href="javascript:" className="weui-search-bar__cancel-btn" id="searchCancel">{this.props.text}</a>
            </div>
        )
    }
}
// getters
// 第一个回调函数 该组件连接上redux的store，并把state里面的数据拿回来，放到props

// action->mumtation
// 第二个回调函数  该组件触发事件，让state里面的数据改变
export default connect((state)=>{
    return state
},(dispatch)=>{
    return {
        // 定义了一个函数
        onEditTextClick: () => {
            //可以触发多个
            // dispatch的参数为store里面的action
            dispatch({
                type:"editText",
                text:"校区"
            })
        }
    }
})(Xsearch);