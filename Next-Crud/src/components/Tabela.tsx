import Cliente from "@/core/Cliente"
import { IconeEdicao, IconeLixo } from "./Icones"

interface TabelaProps {
    clientes: Cliente[],
    clienteSelect?: (cliente: Cliente) => void
    clienteDeleted?: (cliente: Cliente) => void
}
export default function Tabela({clientes, clienteDeleted, clienteSelect}: TabelaProps) {

    const exibirAcoes = clienteDeleted || clienteSelect
    function renderHeader() {
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                {exibirAcoes ? <th className=" p-4">Ações</th> : false}
            </tr>
        )
    }

    function renderDados() {
        return clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id ?? i} className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className="text-left p-4">{cliente.id}</td>
                    <td className="text-left p-4">{cliente.nome}</td>
                    <td className="text-left p-4">{cliente.idade}</td>
                    {exibirAcoes ?renderAcoes(cliente) : false}
                </tr>
            )
        })
    }
    function renderAcoes(cliente: Cliente) {
        return (
            <td className="flex justify-center">
                {clienteSelect ? (
                    <button onClick={() => clienteSelect?.(cliente)} 
                    className="flex justify-center items-center text-green-600 rounded-full p-2 m-1 hover:bg-purple-50">{IconeEdicao}</button>
                ) : false}

                {clienteDeleted ? (
                    <button onClick={() => clienteDeleted?.(cliente)} 
                    className="flex justify-center items-center text-red-500 rounded-full p-2 m-1 hover:bg-purple-50">{IconeLixo}</button>
                ) : false}
            </td>
        )
    }
    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className="bg-linear-to-r from-purple-500 to-purple-950 text-gray-100" >
                {renderHeader()}
            </thead>
            <tbody>
                {renderDados()}
            </tbody>
        </table>
    )

}