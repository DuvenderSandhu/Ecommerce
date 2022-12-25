
const objReducer=(state=[],action)=>{
    if(action.type==='changeObj'){
        return action.payload
    }
    else{
        return state
    }
}
export default objReducer