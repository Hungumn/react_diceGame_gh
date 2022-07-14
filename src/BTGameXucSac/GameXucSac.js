import React, { Component } from 'react';
import './GameXucSac.css'
import ThongTinGame from './ThongTinGame';
import XucSac from './XucSac';
import { connect } from "react-redux";

class GameXucSac extends Component {
    render() {
        return (
            <div className="game">
                <div className='title-game text-center mt-5'>
                    Game Tài Xỉu
                </div>
                <div className='row text-center'>
                    <div className='col-5'>
                        <button onClick={()=>
                            {this.props.datCuoc(true)}
                        } className='btnGame'>TÀI</button>
                    </div>
                    <div className='col-2'>
                        <XucSac />
                        
                    </div>
                    <div className='col-5'>
                        <button onClick={()=>
                            {this.props.datCuoc(false)}
                        } className='btnGame'>XỈU</button>
                    </div>
                </div>
                <div className='ThongTinGame text-center'>
                    <ThongTinGame />
                    <button onClick={()=>{
                        this.props.playGame()
                    }} className='btn btn-danger p-2 btn-lg display-4 mt-5'>Play Game</button>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        datCuoc:(taiXiu)=>{
            let action ={
                type:'DAT_CUOC',
                taiXiu
            }
            dispatch(action);
        },
        playGame: ()=>{
            let action = {
                type: 'PLAY_GAME',
            }
            dispatch(action);
        }
    }
}

export default connect(null,mapDispatchToProps) (GameXucSac);
