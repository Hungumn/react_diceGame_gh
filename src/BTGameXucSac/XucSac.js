import React, { Component } from 'react';
import { connect } from "react-redux";

class XucSac extends Component {

    renderXucSac = ()=> {
        return this.props.mangXucSac.map((xucSac,index)=>{
            return <img key={index} className="ml-2" style={{width:50,height:50}} 
                        src={xucSac.hinhAnh} alt={xucSac.hinhAnh} />
        })
    }

    render() {
        return (
            <div>
                {this.renderXucSac()}
            </div>
        );
    }
}

//get state from redux -> props of components
const mapStateToProps = state=>{
    return {
        mangXucSac:state.BTXucSacReducer.mangXucSac
        
    }
    
}

export default connect(mapStateToProps) (XucSac);
