export const itemChange=(item)=>{
    return (dispatch)=>{
        dispatch({
            type: 'itemChange',
            payload: item
        })
    }
}
export const changeObj=(obj)=>{
    return (dispatch)=>{
        dispatch({
            type: 'changeObj',
            payload: obj
        })
    }
}


export const updateCart=(obj)=>{
    return (dispatch)=>{
        dispatch({
            type: 'updateCart',
            payload: obj
        })
    }
}
export const alertStatus=(obj)=>{
    return (dispatch)=>{
        dispatch({
            type: 'changeAlert',
            payload: obj
        })
    }
}
export const userToken=(obj)=>{
    return (dispatch)=>{
        dispatch({
            type: 'userToken',
            payload: obj
        })
    }
}