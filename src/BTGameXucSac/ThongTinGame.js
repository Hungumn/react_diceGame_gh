import React, { Component } from 'react';
import { connect } from "react-redux";

class ThongTinGame extends Component {
    render() {
        return (
            <div>
                <div className="display-4 mt-3 text-dark">
                    KẾT QUẢ:
                    <span className='text-danger'> {this.props.ketQua ?'WIN' : 'LOSE'} </span>
                </div>
                <div className="display-4 mt-3 text-dark">
                    LỰA CHỌN:
                    <span className='text-warning'> {this.props.taiXiu ?'TÀI' : 'XỈU'} </span>
                </div>
                <div className="display-4 mt-3 text-danger">
                    TỔNG ĐIỂM:
                    <span className='text-danger'> {this.props.tongDiem} </span>
                </div>
                <div className="display-4 mt-3 text-white">
                    SỐ LẦN THẮNG:
                    <span className='text-success'> {this.props.soBanThang} </span>
                </div>
                <div className="display-4 mt-3 text-dark">
                    TỔNG SỐ LẦN CHƠI:
                    <span className='text-white'> {this.props.tongSoBanChoi} </span>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        soBanThang: state.BTXucSacReducer.soBanThang,
        taiXiu:state.BTXucSacReducer.taiXiu,
        tongSoBanChoi:state.BTXucSacReducer.tongSoBanChoi,
        ketQua:state.BTXucSacReducer.ketQua,
        tongDiem:state.BTXucSacReducer.tongDiem,
    }
}

export default connect(mapStateToProps) (ThongTinGame);
