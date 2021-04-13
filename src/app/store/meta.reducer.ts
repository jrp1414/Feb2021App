import { ActionReducer, createReducerFactory, INIT, MetaReducer } from "@ngrx/store";
import { CartInfo } from "./cart.action";
import { cartReducer } from "./cart.reducer";

export const hydrationMetaReducer = (reducer: ActionReducer<CartInfo>): ActionReducer<CartInfo> => {
    return (state, action) => {
        if (action.type == INIT) {
            const storageValue = localStorage.getItem("state");
            if (storageValue) {
                try {
                    return JSON.parse(storageValue);
                } catch {
                    localStorage.removeItem("state");
                }
            }
        }
        const nextState = reducer(state, action);
        localStorage.setItem("state", JSON.stringify(nextState));
        return nextState;
    };
};

export const reducers: ActionReducer<CartInfo> = cartReducer;
 
export const metaReducers: MetaReducer[] = [hydrationMetaReducer];