export function userToken(state=[],action){
    if(action.type === "userToken"){
        return action.payload
    }
    else{
        return state
    }

}