import React, {
    Component
} from "react";
import { Link } from "react-router-dom";
// css
import "./Xpannel.css";
import store from "../../libs/store.js";
console.log(React);
class Xpannel extends Component {
    constructor(props) {
        super(props);
        // model  data
        this.state = {
            song_list: [],
            inputValue:""
        }
    }
    loadMore() {
        console.log(this)
        //React.axios.get("http://tingapi.ting.baidu.com/v1/restserver/ting",{
        React.axios.get("music.json", {
            params: {
                method: "baidu.ting.billboard.billList",
                type: 1,
                size: 10,
                offset: 0

            }
        }).then((response) => {
            console.log(response.data.song_list);
            this.setState({
                song_list: this.state.song_list.concat(response.data.song_list)
            })
        }).catch(function (error) {
            console.log(error);
        });
    }
    // html
    render() {
        return (
            <div name={
                (()=>{
                    return "abc"
                })()
            } className="weui-panel weui-panel_access">
                <div className="weui-panel__hd">{this.state.inputValue}</div>
                <div className="weui-panel__bd">
                    {(()=>{
                        return this.state.song_list.map((item,index)=>{
                            return (
                                <Link key={index} to={`/detail/${index}/${item.song_id}`} className="weui-media-box weui-media-box_appmsg">
                                    <div className="weui-media-box__hd">
                                        <img className="weui-media-box__thumb" src={item.pic_small} alt="" />
                                    </div>
                                    <div className="weui-media-box__bd">
                                        <h4 className="weui-media-box__title">{item.title}</h4>
                                        <p className="weui-media-box__desc">{item.author}</p>
                                    </div>
                                </Link>
                            )
                        })
                    })()}                  
                </div>
                <div className="weui-panel__ft" onClick={this.loadMore.bind(this)}>
                    <a href="javascript:void(0);" className="weui-cell weui-cell_access weui-cell_link">
                        <div className="weui-cell__bd">查看更多</div>
                        <span className="weui-cell__ft"></span>
                    </a>
                </div>
            </div>
        )
    }
    componentDidMount() {
        store.on("inputValue",(data)=>{
            console.log(data);
            this.setState({
                inputValue:data
            })
        })
        this.loadMore()
    }

}

export default Xpannel;
