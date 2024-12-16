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

        removerContato(state, action: PayloadAction<{id: number}>){
            const index = state.contatos.findIndex(contato => contato.id === action.payload.id)
            
            if (index >= 0) {
                state.contatos.splice(index, 1)
            }
            
        }
    }
})

export const { adicionarContato, removerContato } = contatosSlice.actions

export default contatosSlice.reducer