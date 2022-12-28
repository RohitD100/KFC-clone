// import { initial } from 'lodash';
import React from 'react';
import { useReducer } from 'react';
// import { useState } from 'react';
import { reducer } from './Reducer';

export const CartContext = React.createContext(null);

const initialstate= []
export const CartContextProvider = ({children})=>{
    
    const [state, dispatch] = useReducer(reducer, initialstate)

    const value ={state, dispatch}
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}