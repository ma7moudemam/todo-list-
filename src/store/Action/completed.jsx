export const Addcompleted = (payload) =>{
    return{
        type: 'ADD_COMPLETED',
        payload,
    }
}


export const Removecompleted = (payload) =>{
    return{
        type: 'REMOVE_COMPLETED',
        payload,
    }
}
