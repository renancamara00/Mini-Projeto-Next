export default interface Cliente {
    id?: string | null
    nome: string
    idade: number
}

export function clienteVazio(): Cliente {
    return {
        nome: '',
        idade: 0
    }
}