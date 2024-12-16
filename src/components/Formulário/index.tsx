import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../Store/store"
import { adicionarContato, removerContato } from "../../Store/reducers/contatoSlice"
import React, { useState } from "react"

import { CorpoForm } from './style'

export type Contato = {
    id: number
    nome: string
    email: string
    telefone: string
}

export function Formulario(){

    const dispatch = useDispatch()
    const contatos = useSelector((state: RootState) => state.contatos.contatos)

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")

    function cadastrar(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

                
        if (nome && email && telefone){
            const novoContato: Contato = {
                id: contatos.length + 1,
                nome,
                email,
                telefone
            };
            dispatch(adicionarContato(novoContato))

            setNome("")
            setEmail("")
            setTelefone("")
        } else {
            alert('Preencha todos os campos do fomulário')
        }
        
    }

    function removerContatoId(contatoId: number) {
        dispatch(removerContato({id: contatoId}))
    }

    return (
        <CorpoForm>
            <form onSubmit={cadastrar}>
                <input type="text" placeholder="Nome Completo" value={nome} onChange={(e) => setNome(e.target.value)}/>
                <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="text" placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)}/>
                <button type="submit">Adicionar</button>
            </form> 

            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Telefone</th>
                        <th></th>
                    </tr>
                </thead>
                    <tbody>
                        {contatos.map(contato => (
                            <tr key={contato.id}>
                                <td>{contato.nome}</td>
                                <td>{contato.email}</td>
                                <td>{contato.telefone}</td>
                                <td><button onClick={() => removerContatoId(contato.id)}>X</button></td>
                            </tr>
                        ))}
                    </tbody>
            </table>
        </CorpoForm>
        
    )
}