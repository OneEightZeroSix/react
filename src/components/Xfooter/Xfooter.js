import React, {
    Component
} from "react";
import "./Xfooter.css";
import iconTabbar from "../../assets/icon_tabbar.png";
import { Link } from "react-router-dom";

// v-if  
// v-show
// v-for
// v-model
class Xfooter extends Component {
    constructor(props){
        super(props);
        this.state = {
            tab:0,
            tabs:[{
                title:"微信",
                href:"wechat",
                num:8,
                dot:false
            },{
                title:"通讯录",
                href:"contact",
                num:0,
                dot:false
            },{
                title:"发现",
                href:"research",
                num:0,
                dot:true
            },{
                title:"我",
                href:"mine",
                num:0,
                dot:false
            }]            
        }
    }
    ing(n){
        return n+"ing"
    }
    toggleTab(index,e){
        this.setState({
            tab:index
        })
    }
    render(){
        return (
            <div className="weui-tabbar">
                

                {(()=>{
                    return this.state.tabs.map((item,index)=>{
                        let showDot = (()=>{
                            if(item.dot){
                                return (
                                    <span className="weui-badge weui-badge_dot" style={{
                                        position: "absolute",
                                        top: "0",
                                        right: "-6px"
                                    }}>
                                    </span>
                                )
                            }else{
                                return;
                            }
                        })

                        let showBadge = (()=>{
                            if(item.num>0){
                                return (
                                    <span className="weui-badge" style={{
                                        position: "absolute",
                                        top: "-2px",
                                        right: "-13px"
                                    }}>8</span>
                                )
                            }else{
                                return;
                            }
                        })
                        return (
                            <Link to={`/home/${item.href}`} onClick={this.toggleTab.bind(this,index)} key={index} nnnnn={this.ing(this.state.title)} className={
                                this.state.tab===index?"weui-tabbar__item weui-bar__item_on":"weui-tabbar__item"
                            }>
                                <span style={{
                                    display: "inline-block",
                                    position: "relative"
                                }}>
                                    <img src={iconTabbar} alt="" className="weui-tabbar__icon" />
                                    {/* badge */}
                                    {
                                        showBadge()
                                    }
                                    {/* dot */}
                                    
                                    {
                                        showDot()
                                    }
                                </span>
                                <p className="weui-tabbar__label">{item.title}</p>
                            </Link>
                        )
                    })
                })()}

            </div>
        )
    }
}

export default Xfooter;
