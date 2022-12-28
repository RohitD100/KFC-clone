export const addToCart =(data)=>({
    type:"ADD_TO_CART",
    payload:data,
})

export const removeFromCart =(id)=>({
    type:"REMOVE_FROM_CART",
    payload:id
})

export const removeAll =()=>({
    type:"REMOVE_ALL",
})

export const Increment=(id)=>({
    type:"INCREMENT",
    payload:id
})

export const Decrement=(id)=>({
    type:"DECREMENT",
    payload:id
})


export const checkout =()=>({
    type:'CHECKOUT',
})