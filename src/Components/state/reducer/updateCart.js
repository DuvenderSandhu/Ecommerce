export function updateCart(state=[],action){
    if(action.type === "updateCart"){
        return action.payload
    }
    else{
        return state
    }

}