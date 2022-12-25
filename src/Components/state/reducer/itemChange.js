
const itemReducer=(state={},action)=>{
    if(action.type==='itemChange'){
        return action.payload
    }
    else{
        return state
    }
}


export default itemReducer;