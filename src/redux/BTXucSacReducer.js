const stateDefault = {
    taiXiu: false, //true - Tai(3-11) , False - Xiu(>12)
    mangXucSac:[
        {ma:1,hinhAnh:'./img/1.png'},
        {ma:1,hinhAnh:'./img/1.png'},
        {ma:1,hinhAnh:'./img/1.png'},

    ],
    soBanThang:0,
    tongSoBanChoi:0,
    ketQua:true,
    tongDiem:0
}

const BTXucSacReducer = (state = stateDefault,action)=>{

    switch(action.type) {
        case 'DAT_CUOC':
            state.taiXiu = action.taiXiu;
            return {...state}
        ;
        case 'PLAY_GAME':{
            let mangXucSacNgauNhien = [];
            for(let i=0;i<3;i++){
                let soNgauNhien = Math.floor(Math.random() * 6) + 1;
                let xucSacNgauNhien = {ma:soNgauNhien,hinhAnh:`./img/${soNgauNhien}.png`};
                mangXucSacNgauNhien.push(xucSacNgauNhien)
            }
            state.mangXucSac = mangXucSacNgauNhien;

            state.tongSoBanChoi +=1;

            let tongSoDiem = mangXucSacNgauNhien.reduce((tongDiem,xucSac,index)=>{
                return tongDiem+= xucSac.ma
            },0);
            if((tongSoDiem >11 && state.taiXiu === true ) || (tongSoDiem <11 && state.taiXiu === false )){
                state.soBanThang +=1;
                state.ketQua = true;
                state.tongDiem =tongSoDiem
            }else{
                state.ketQua = false;
                state.tongDiem =tongSoDiem
            }

            return {...state}
        };
        default:return {...state}
    }
}

export default BTXucSacReducer;