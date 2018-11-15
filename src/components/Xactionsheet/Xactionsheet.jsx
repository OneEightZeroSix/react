import React, {
    Component
} from "react";
import { Provider, connect } from 'react-redux';
// css
class Xactionsheet extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
        }
    }
    // html
    render() {
        return (
            <div className="weui-skin_android" id="androidActionsheet" style={{
                opacity: 1,
                display: this.props.isShowActionSheet ? 'block' : 'none'
            }}>
                <div className="weui-mask" onClick={this.props.toggleSheet.bind(this)}></div>
                <div className="weui-actionsheet">
                    <div className="weui-actionsheet__menu">
                        <div className="weui-actionsheet__cell">示例菜单</div>
                        <div className="weui-actionsheet__cell">示例菜单</div>
                        <div className="weui-actionsheet__cell">示例菜单</div>
                    </div>
                </div>
            </div>
        )
    }
    // js
}

export default connect((state) => {
    return state
}, (dispatch) => {
    return {
        toggleSheet(){
            dispatch({
                type:"toggleSheet",
                isShowActionSheet:false
            })
        }
    }
})(Xactionsheet);
