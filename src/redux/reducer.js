import produce from "immer"
const inisialState = {
    cart: []
}
export default function reducer(state = inisialState, action) {
    switch (action.type) {
        case "addProd":
            return (
                produce(state, draft => {
                    let index = draft.cart.findIndex(prod => prod.id === action.payload)
                    if (index == -1) {
                        draft.cart.push({
                            id: action.payload,
                            qty: 1
                        })
                    } else {
                        draft.cart[index].qty++
                    }
                })
            );
        case "delProd":
            return (
                produce(state, draft => {
                    let index = draft.cart.findIndex(prod => prod.id === action.payload)
                    draft.cart.splice(index, 1)
                })
            );
        case "incProd":
            return (
                produce(state, draft => {
                    let index = draft.cart.findIndex(prod => prod.id === action.payload)
                        ++draft.cart[index].qty
                })
            );
        case "decProd":
            return (
                produce(state, draft => {
                    let index = draft.cart.findIndex(prod => prod.id === action.payload)
                        --draft.cart[index].qty
                })
            );;
        default:
            return state
    }
}