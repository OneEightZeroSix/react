import React, {
    Component
} from "react";
// css
import "./Xsearch.css";
class Xsearch extends Component {
    constructor(props){
        super(props);
        // model  data  M-》V
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
    }
    getInputValue(e){
        console.log(e.target.value);
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
                <a onClick={this.tapLabel.bind(this)} href="javascript:" className="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
            </div>
        )
    }
}

export default Xsearch;