import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Contato } from '../../components/Formulário/index'

type ContatosState = {
    contatos: Contato[];
}

const initialState: ContatosState = {
    contatos: []
}

const contatosSlice = createSlice({
    name: 'contatos',
    initialState,
    reducers: {
        adicionarContato(state, action: PayloadAction<Contato>){
            state.contatos.push(action.payload)
        },

        // removerContato(state, action: PayloadAction<Contato>){

        // }
    }
})

export const { adicionarContato } = contatosSlice.actions

export default contatosSlice.reducer