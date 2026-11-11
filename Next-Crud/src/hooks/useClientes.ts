import { useState, useEffect } from "react"
import Cliente, { clienteVazio } from "@/core/Cliente"
import ClienteRepositorio from "@/core/ClienteRepositorio";
import ColecaoCliente from "@/backend/db/ColecaoCliente";
import useTabelaOuForm from "./useTabelaOuForm";

export default function useClientes() {

    const repo: ClienteRepositorio = new ColecaoCliente()

    const { tabelaVisivel, formularioVisivel, exibirTabela, exibirFormulario } = useTabelaOuForm()

    const [cliente, setCliente] = useState<Cliente>(clienteVazio())
    const [clientes, setClientes] = useState<Cliente[]>([])

    async function obterTodos() {
        const clientesBanco = await repo.obterTodos()
        setClientes(clientesBanco)
        exibirTabela()
    }

    useEffect(() => {
        obterTodos()
    }, [])

    function clienteSelect(cliente: Cliente) {
        setCliente(cliente)
        exibirFormulario()
    }

    async function clienteDeleted(cliente: Cliente) {
        await repo.excluir(cliente)
        obterTodos()
    }

    function novoCliente() {
        setCliente(clienteVazio())
        exibirFormulario()
    }

    async function saveCliente(cliente: Cliente) {
        await repo.salvar(cliente)
        obterTodos()
    }
    return {
        tabelaVisivel,
        formularioVisivel,
        cliente,
        clientes,
        exibirTabela,
        saveCliente,
        novoCliente,
        clienteSelect,
        clienteDeleted,
        obterTodos
    }
}