export const addToDo = (payload) => {
    return {
        type: "ADD_TODO",
        payload,
    }
}

export const removeToDo =(payload) => {
    return {
        type: "REMOVE_TODO",
        payload,
    }
}
