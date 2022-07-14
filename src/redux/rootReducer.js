import {combineReducers} from 'redux';
import BTXucSacReducer from './BTXucSacReducer';



const rootReducer = combineReducers({ //store tổng của ứng dụng
    BTXucSacReducer: BTXucSacReducer
})

export default rootReducer;