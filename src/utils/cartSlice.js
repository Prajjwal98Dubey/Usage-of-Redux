import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        cartQuantity: 0,
        cartTotal: 0
    },
    reducers:
    {
        addToCart: (state, action) => {
            const itemIndex = state.items.findIndex((item) => item.id === action.payload.id)
            if (itemIndex >= 0) {
                state.items[itemIndex].quantity += 1
            }
            else {
                const temProducts = { ...action.payload, quantity: 1 }
                state.items.push(temProducts)
            }
        },

        removeFromCart: (state, action) => {
            const newItems = state.items.filter((item) => item.id !== action.payload.id)
            state.items = newItems

        },
        clearCart: (state) => {
            state.items = []
        },
        decreasedFromCart:(state, action) => {
            const itemIndex = state.items.findIndex((item) => item.id === action.payload.id)
            if (state.items[itemIndex].quantity > 1) {
                state.items[itemIndex].quantity -= 1
            }
            else {
                const nextItems = state.items.filter((item) => item.id !== action.payload.id)
                state.items = nextItems
            }
        }

    }
})

export const { addToCart, removeFromCart, clearCart, decreasedFromCart } = cart.actions
export default cart.reducer