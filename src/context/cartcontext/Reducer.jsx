export const reducer =(state,action)=>{
    switch(action.type){
        case "ADD_TO_CART":{
            return [...state, action.payload ];
        }

        case "REMOVE_FROM_CART":{
            const df = state.filter((item)=>item.id !== action.payload);
            return df;
        }
        case "REMOVE_ALL": {
            return []
        }
        case "INCREMENT":{
            const df = state.map((ele)=>{
                if(ele.id === action.payload){
                    return {...ele, quantity : ele.quantity + 1};
                }
                return ele;
            })
            return df;
        }
        case "DECREMENT": {
            const df = state.map((ele)=>{
                if(ele.id === action.payload){
                    return {...ele, quantity: ele.quantity -1};
                }
                return ele;
            })
            return df;
        }

        case "CHECKOUT":{
            return []
        }
        default:{
            return state;
        }
    }
}