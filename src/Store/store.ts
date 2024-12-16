import { configureStore } from "@reduxjs/toolkit";
import contatosReducer from './reducers/contatoSlice'


const store = configureStore({
    reducer: {
        contatos: contatosReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispach = typeof store.dispatch

export default store