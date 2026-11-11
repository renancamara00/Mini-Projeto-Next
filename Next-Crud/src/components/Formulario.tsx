import Input from '@/components/Input'
import { useState } from 'react'
import Cliente from '@/core/Cliente'
import Botao from './Botao'

interface FormularioProps {
    cliente: Cliente
    clienteChange?: (cliente: Cliente) => void
    cancelado?: () => void
}

export default function Formulario({ cliente, cancelado, clienteChange }: FormularioProps) {
    const id = cliente?.id
    const [nome, setNome] = useState(cliente?.nome ?? '')
    const [idade, setIdade] = useState(cliente?.idade ?? 0)
    return (
        <div>
            {id ? (
                <Input
                    leitura
                    texto="Código"
                    value={id}
                    className="mb-5"
                />
            ) : false}
            <Input
                texto="Nome"
                value={nome}
                onChange={setNome}
                className="mb-5"
            />
            <Input
                texto="Idade"
                tipo="number"
                value={idade}
                onChange={valor => setIdade(+valor)}
            />
            <div className='flex justify-end mt-7'>
                <Botao className='mr-2' onClick={() => clienteChange?.({ nome, idade, id })}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao cor='gray' onClick={cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}