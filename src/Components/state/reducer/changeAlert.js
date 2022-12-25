const alertReducer=(state={},action)=>{
    if(action.type==='changeAlert'){
        return action.payload
    }
    else{
        return state
    }
}


export default alertReducer;