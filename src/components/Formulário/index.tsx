import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../Store/store"
import { adicionarContato, removerContato, atualizarContato } from "../../Store/reducers/contatoSlice"
import React, { useState } from "react"

import { CorpoForm } from './style'

export type Contato = {
    id: number
    nome: string
    email: string
    telefone: string
}

export function Formulario() {
    const dispatch = useDispatch()
    const contatos = useSelector((state: RootState) => state.contatos.contatos)

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")
    const [editando, setEditando] = useState(false) 
    const [contatoAtual, setContatoAtual] = useState<Contato | null>(null) 

    function cadastrar(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (nome && email && telefone && telefone.replace(/\D/g, "").length === 11) {  
            if (editando) {
                if (contatoAtual) {
                    dispatch(atualizarContato({ ...contatoAtual, nome, email, telefone }))
                    setEditando(false)
                    setContatoAtual(null)
                }
            } else {
                const novoContato: Contato = {
                    id: contatos.length + 1,
                    nome,
                    email,
                    telefone
                }
                dispatch(adicionarContato(novoContato))
            }

            setNome("")
            setEmail("")
            setTelefone("")
        } else {
            alert('Preencha todos os campos corretamente, incluindo o telefone no formato (00) 00000-0000')
        }
    }

    function removerContatoId(contatoId: number) {
        dispatch(removerContato({ id: contatoId }))
    }

    function editarContato(contato: Contato) {
        setNome(contato.nome)
        setEmail(contato.email)
        setTelefone(contato.telefone)
        setEditando(true)
        setContatoAtual(contato)
    }

    function mascaraTelefone(value: string): string {
        value = value.replace(/\D/g, ''); 
        return value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3'); 
    }

    function confereTelefone(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        const telefoneFormatado = mascaraTelefone(value);
        setTelefone(telefoneFormatado);
    }

    return (
        <CorpoForm>
            <form onSubmit={cadastrar}>
                <input 
                    type="text" 
                    placeholder="Nome Completo" 
                    value={nome} 
                    onChange={(e) => setNome(e.target.value)} 
                />
                <input 
                    type="email" 
                    placeholder="E-mail" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <input 
                    type="tel" 
                    placeholder="(00) 00000-0000" 
                    value={telefone} 
                    onChange={confereTelefone} 
                />
                <button type="submit">{editando ? "Atualizar" : "Adicionar"}</button>
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
                            <td>
                                <button className="material-icons" id="excluir" onClick={() => removerContatoId(contato.id)}>delete</button>
                                <button className="material-icons" id="editar" onClick={() => editarContato(contato)}>edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </CorpoForm>
    )
}
